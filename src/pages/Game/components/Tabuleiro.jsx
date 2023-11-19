import { Avatar, Button, Card, Container, Grid, Input } from "@mui/material";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { useContext, useEffect, useRef, useState } from "react";
/** Socket */
import { ModalResultado } from "./ModalResultado";
import MultiplayerContext from "../../../context/MultiplayerContext";
import AuthContext from "../../../context/AuthContext";
import { ModalSelecaoDeTema, geraPathTema } from "./ModalSelecaoDeTema";
import { retornaImagemFicha } from "./ImportFichas";
import { retornaAudio } from "./ImportAudios";

export default function Tabuleiro(  ) {
    const {
        gameState, setGameState,
        colunaState, setColunaState,
        temaState, setTemaState,
        vencedorState, setVencedorState,
        empateState, setEmpateState,
        loserState, setLoserState,
        mostrarModalState, setMostrarModalState,
        mostrarModalTemaState, setMostrarModalTemaState,
        disabledButton,
        socket, setSocket,
        stopWatch, setStopWatch,
        statusJogo, setStatusJogo,
        myTurn, setTurn,
        myChosenTheme, setChosenTheme,
        // aindaEhPossivelVencer,
        verificarEmpate,
        verificarVitoria,
        posicionaFichaAoFinalDaColuna,
        encerrarJogo,
        setMultiplayerEstabelecido, multiplayerEstabelecido,
        vsChosenTheme, setVsChosenTheme,
        categoriaTemaState, setCategoriaTemaState
    } = useContext(MultiplayerContext);

    const {userId} = useContext(AuthContext);

    const [delay, setDelay] = useState(1000);
    const [isRunning, setIsRunning] = useState(false);

    const [highlightedColumn, setHighlightedColumn] = useState(null);
    const [tempGameState, setTempGameState] = useState([]);
    const [isAnimating, setIsAnimating] = useState(false);
    const [animationCompleted, setAnimationCompleted] = useState(false);


    const handleMouseEnter = (columnIndex) => {
    setHighlightedColumn(columnIndex);
    };

    const handleMouseLeave = () => {
    setHighlightedColumn(null);
    };

    const delayAnima = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    const animationDelay = 150; // tempo da animação em milissegundos

    useEffect(() => {
        // Tocar música quando o tema é escolhido
        if (myChosenTheme && myChosenTheme !== 'grey' && myChosenTheme !== '' ) {
            playMusic();
        } else {
            return () => {
                stopMusic();
            };
        }
    }, [myChosenTheme]);

    useEffect(() => {
        // Parar música quando o jogo termina
        if (statusJogo === 'winner' || statusJogo === 'empate' || statusJogo === 'loser') {
            stopMusic();
        }
    }, [statusJogo]);

    const animateCellColors = async (cellIndex) => {
        if (!isAnimating && cellIndex < gameState.length) {
            setIsAnimating(true);
            const currentCell = gameState[cellIndex];
            if (currentCell && Array.isArray(currentCell.casas)) {
                const cellContent = currentCell.casas[colunaState];
                if (cellContent === 0) {
                    const animationTheme = myChosenTheme;
                    // Cria uma cópia do estado do jogo
                    const tempGameState = gameState.map(row => ({ ...row, casas: [...row.casas] }));
                    // Atualiza o estado temporário para refletir a animação
                    tempGameState[cellIndex].casas[colunaState] = animationTheme;
                    setGameState(tempGameState);
                    // Aguarda o tempo de animação
                    await delayAnima(animationDelay);
                    // Volta para a cor original
                    tempGameState[cellIndex].casas[colunaState] = casaBackgroundVazia;
                    setGameState(tempGameState);
                    // Verifica se é a última célula
                    if (cellIndex === gameState.length - 1) {
                        // Aguarda antes de encerrar a animação
                        await delayAnima(animationDelay);
                        // Atualiza a célula inicial para casaBackgroundVazia
                        tempGameState[0].casas[colunaState] = casaBackgroundVazia;
                        setGameState(tempGameState);
                    } else {
                        // Chama a próxima animação
                        await animateCellColors(cellIndex + 1);
                    }
                } else {
                    // Se a célula não estiver vazia, pula para a próxima sem animação
                    await animateCellColors(cellIndex + 1);
                }
            }
        }
    
        setIsAnimating(false);
    };

    useInterval(() => {
        if (stopWatch > 0)
            setStopWatch(stopWatch - 1);
        else {
            //setLoserState(true);
            setTurn(false);
            conversaComSocket();
        }
    }, isRunning ? delay : null);

    useEffect(() => {
        if (empateState || vencedorState || loserState)
            setIsRunning(false);
    }, [ stopWatch ])

    useEffect(() => {
        if (socket.set)
        {
            console.log(socket.id)
            socket.id.on("msg", (arg) => {
                console.log('socket message:', arg); // world
                setSocket((prev) => {return {...prev, msg: arg.tema}})
                if (!multiplayerEstabelecido) 
                    setMultiplayerEstabelecido(true);
                if (arg.tema !== 'escolhendo-tema')
                    setTurn(true);
                if (arg.tema !== '') {
                    setVsChosenTheme(arg.tema);
                    setIsRunning(true);
                }
                if (arg.gameStatus === 'loser') {
                    setVencedorState(true);
                    setIsRunning(false);
                }
                if (arg.tabuleiro !== gameState){
                    if (arg.gameStatus === 'jogando')
                        setTurn(true);
                    setGameState(arg.tabuleiro);
                    setStatusJogo(arg.gameStatus);
                };
                if (arg.gameStatus === 'winner') {
                    setLoserState(true);
                }
            });
        }
    }, [])
    
    useEffect(() => {
        if (multiplayerEstabelecido) conversaComSocket();
    }, [multiplayerEstabelecido])

    useEffect(() => {
        if (statusJogo != null && statusJogo === 'winner'){
            conversaComSocket();
            encerrarJogo();
        }
        else if (statusJogo != null && statusJogo === 'empate') {
            setEmpateState(true);
            encerrarJogo();
        }
    }, [statusJogo])

    useEffect(() => {
        if (myChosenTheme !== '' || myChosenTheme !== 'grey') conversaComSocket();
    }, [temaState])

    // Coloca timer de 45s se o Tema estiver como valor 'grey'
    useEffect(() => {
        if (temaState === 'grey') {
            setMostrarModalTemaState(true);
        };
    }, [temaState]);

    useEffect(() => {
        if (myTurn && (myChosenTheme !== 'grey' && myChosenTheme !== '')) {
            setStopWatch(15);
            setIsRunning(true);
        }
        else setIsRunning(false);
    }, [myTurn]);

    // Roda quando o evento do botão é gerado
    useEffect(() => {

        if (gameState.length > 0){
            animateCellColors(0);
            // Adiciona um atraso de 1000ms antes de executar a lógica seguinte
            const delayBeforeNextLogic = setTimeout(() => {
                // Chama função para alocar ficha ao final da coluna selecionada
                let novoArray = posicionaFichaAoFinalDaColuna(gameState, colunaState);
                setTemaState(myChosenTheme);
                setTurn(false);
                // Chama função que envia jogada para o outro jogador
                if (socket.set) {
                    conversaComSocket();
                }
                setColunaState(-1);
                setGameState(novoArray);
                // Roda lógica para saber se o jogador ganhou
                setVencedorState(verificarVitoria(gameState));
                // Roda lógica para saber o jogo empatou (terminou sem vitória)
                setEmpateState(verificarEmpate(gameState));
                //console.log("empate " + empateState);
            }, 1000);
    
            // Limpa o timeout ao desmontar o componente ou quando a dependência colunaState mudar
            return () => clearTimeout(delayBeforeNextLogic);
        }
    }, [colunaState]);

    // Roda quando um vencedor é determinado
    useEffect(() => {
        if (vencedorState) {
            encerrarJogo();
        };
    }, [vencedorState]);

    // Roda quando um empate é determinado
    useEffect(() => {
        if (empateState)   
        {
            encerrarJogo();
        };
    }, [empateState]);

    useEffect(() => {
        if (loserState)   
        {
            conversaComSocket();
            encerrarJogo();
        };
    }, [loserState]);

    // Envia mensagem para Socket/Multiplayer
    const conversaComSocket = () => {
        console.log('mandando msg!')
        setSocket((prev) => {return {...prev, it: (socket.it + 1)}});
        const multiplayerState = {
            tabuleiro: gameState,
            tema: myChosenTheme,
            userId: userId,
            gameStatus: vencedorState ? 'winner' 
                : empateState ? 'empate' 
                : myChosenTheme==='grey' || myChosenTheme==='' ? 'escolhendo-tema'
                : loserState ? 'loser'
                : 'jogando',
        };
        socket.id.emit("msg", multiplayerState);
    };

    useEffect(() => {
        conversaComSocket();
    }, [temaState]);

    useEffect(() => {
        conversaComSocket();
    }, [myChosenTheme]);

    const handleInput = (e) => {
        e.preventDefault();
        console.log(e.target.value)
        setChosenTheme(e.target.value);
        setTemaState(e.target.value);
    };

    return (
        <Container sx={{mx: 'auto', justifyContent: 'center'}}>  
            {/* Linha de botões */}
            <Grid container spacing={2} sx={{mt: 0.2, mb: 1, pl: 0.5, pr: 4}}>
                {gameState[0].casas.map((botao, i) => {
                    return (
                        <Grid item key={`JogarTabuleiroArrayBotao-${i}`} xs={1} sx={{my: 0, mx: 'auto'}}>
                            <Button 
                                disabled={
                                    disabledButton ? 
                                        disabledButton : 
                                        myTurn ? 
                                            false : 
                                            true
                                } 
                                onClick={() => {setColunaState(i); playAudio(); }}
                                sx={{
                                    height: '20px',
                                    mr: 4, mt: 0,
                                    borderRadius: '30px',
                                    '&:hover': {
                                        backgroundColor: 'none',
                                        opacity: '80%',
                                    }
                                }}>
                                <KeyboardDoubleArrowDownIcon sx={disabledButton ?
                                    {
                                        fontSize: "30px",
                                        color: 'font.main',
                                        '&:hover': {
                                            color: 'primary.main'
                                        }
                                    }
                                    : 
                                    {
                                        fontSize: "30px",
                                        color: '#5C92FF',
                                        '&:hover': {
                                            color: 'primary.main'
                                        }
                                    }
                                }/>
                            </Button>
                        </Grid>
                    )
                })}
            </Grid>

            {/* Tabuleiro */}
            <Card sx={{
                height: '515px', m: 2, 
                backgroundColor: 'background.card',
                borderRadius: 5,
                p: 0,
                minWidth: '530px'
            }}>
                {gameState.map((item, i) => {
                return (
                    // LINHA DO TABULEIRO
                    <Grid item key={`JogarTabuleiroArrayItem-${i}`} container spacing={0} sx={{mt: i===0?0:2, marginBottom: i===(gameState.length)?0:2, mx: 'auto'}}>
                        {item.casas.map((casa, j) => {
                        return (
                            <Grid item key={`JogarTabuleiroArrayItem-${i}-Casa-${j}`} xs={1} sx={{my: 2, ml: 0, mx: 'auto'}}>
                                {/* CASA DO TABULEIRO */}
                                <Avatar alt="" src={casa === 0 || casa === 'red' || casa === 'yellow' ? '' : casa}
                                    sx={{
                                        border: '1px solid white',
                                        color: 'font.main',
                                        backgroundColor: casa === 0 ? casaBackgroundVazia : (casa !== 'red' && casa !== 'yellow') ? '' : casa,
                                        transition:'background-color 0.5s, box-shadow 0.5s',
                                        boxShadow:
                                            highlightedColumn !== null && highlightedColumn === j
                                            ? '0 0 5px 5px white' 
                                            : 'none'
                                    }}
                                    onMouseEnter = {() => handleMouseEnter(j)}
                                    onMouseLeave = {handleMouseLeave}
                                >
                                    {''}
                                </Avatar>
                            </Grid>
                        )
                        })}
                    </Grid>
                )
            })}
            </Card>
            <ModalResultado mostrar={mostrarModalState} setMostrar={setMostrarModalState} isVencedor={vencedorState} isEmpate={empateState} temaUser={myChosenTheme} categoriaTemaUser={categoriaTemaState} />
            <ModalSelecaoDeTema mostrar={mostrarModalTemaState} setMostrar={setMostrarModalTemaState} setChosenState={setChosenTheme} setTemaState={setChosenTheme} vsChosenTheme={vsChosenTheme} setCategoriaTemaState={setCategoriaTemaState} />
        </Container>
    );
};

function useInterval(callback, delay) {
    const savedCallback = useRef();
    
    useEffect(() => {
        savedCallback.current = callback;
    });
    
    useEffect(() => {
        function tick() {
        savedCallback.current();
        }
        
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}

function playAudio() {
    var audioFicha = new Audio();
    audioFicha.src = retornaAudio('ficha');

    audioFicha.play();
}

var audioMusic = new Audio();

function playMusic() {
    audioMusic.src = retornaAudio('musica');
    // Configura o volume (0.0 - 1.0)
    audioMusic.volume = 0.25; 
    audioMusic.loop = true;
    audioMusic.play();
}

function stopMusic() {
    audioMusic.pause();
    audioMusic.currentTime = 0; // Reinicia a reprodução para o início
}

const casaBackgroundVazia = 'radial-gradient(50% 50% at 50% 50%, rgba(39, 39, 39, 0) 0%, rgba(29, 28, 28, 0.72) 100%)';