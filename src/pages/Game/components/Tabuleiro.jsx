import { Button, Card, Container, Grid } from "@mui/material";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { useEffect, useState } from "react";

import { ModalResultado } from "./ModalResultado";

export default function Tabuleiro(  ) {
    const [ gameState, setGameState ] = useState(arrayTabuleiro);
    const [ colunaState, setColunaState ] = useState(-1);
    const [ temaState, setTemaState ] = useState('red');
    const [ vencedorState, setVencedorState ] = useState(false);
    const [ empateState, setEmpateState ] = useState(false);
    const [ mostrarModalState, setMostrarModalState ] = useState(false);

    // Roda quando o evento do botão é gerado
    useEffect(() => {
    
        // Chama função para alocar ficha ao final da coluna selecionada
        let novoArray = posicionaFichaAoFinalDaColuna(gameState, colunaState);

        // Chama função que envia jogada para o outro jogador

        setColunaState(-1);
        setGameState(novoArray);

        // Roda lógica para saber se o jogador ganhou
        setVencedorState(verificarVitoria(gameState));

        // Roda lógica para saber o jogo empatou (terminou sem vitória)
        setEmpateState(verificarEmpate(gameState));
        //console.log("emapte " + empateState);

    }, [colunaState]);

    // Roda quando um vencedor é determinado
    useEffect(() => {
        if (vencedorState) {
            console.log("VITÓRIA");
            encerrarJogo();
        }  
            

    }, [vencedorState]);

    // Roda quando um empate é determinado
    useEffect(() => {
        if (empateState)   
        {
            console.log("EMPATE!");
            encerrarJogo();
        }
            

    }, [empateState]);

    const encerrarJogo = () => {
        // comunicar outro jogador
        // parar o jogo
        setMostrarModalState(true);
    };
    
    return (
        <Container sx={{mx: 'auto'}}>  
            {/* Linha de botões */}
            <Grid container spacing={2} sx={{my: 1, ml: 5}}>
                {gameState[0].casas.map((botao, i) => {
                    return (
                        <Grid key={`JogarTabuleiroArrayBotao-${i}`} xs={1} sx={{my: 1, ml: 2.2}}>
                            <Button onClick={() => setColunaState(i)}
                                sx={{mr: 5, borderRadius: '40px',
                                    '&:hover': {
                                        backgroundColor: 'none',
                                        opacity: '80%',
                                    }
                            }}>
                                <KeyboardDoubleArrowDownIcon sx={{
                                    fontSize: "40px",
                                    color: '#5C92FF',
                                    '&:hover': {
                                        color: 'primary.main'
                                    }
                                }} />
                            </Button>
                        </Grid>
                    )
                })}
            </Grid>

            {/* Tabuleiro */}
            <Card sx={{
                height: '605px', m: 2, 
                backgroundColor: 'background.card',
                borderRadius: 5,
                p: 2,
                minWidth: '530px'
            }}>
                {gameState.map((item, i) => {
                return (
                    // LINHA DO TABULEIRO
                    <Grid key={`JogarTabuleiroArrayItem-${i}`} container spacing={2} sx={{my: 1, mx: 'auto'}}>
                        {item.casas.map((casa, j) => {
                        return (
                            <Grid key={`JogarTabuleiroArrayItem-${i}-Casa-${j}`} xs={1} sx={{my: 2, ml: 3}}>
                                {/* CASA DO TABULEIRO */}
                                <Container
                                    sx={{
                                        background: casa === 0 ? casaBackgroundVazia : temaState,
                                        boxShadow: '0px 4px 4px 0px #00000040',
                                        '&:hover': {
                                          backgroundColor: 'primary.main',
                                          opacity: [0.9, 0.8, 0.7],
                                        },
                                        height: '55px',
                                        width: '55px',
                                        borderRadius: '55px'
                                      }}
                                >
                                    {casa}
                                </Container>
                            </Grid>
                        )
                        })}
                    </Grid>
                )
            })}
            </Card>

            <ModalResultado mostrar={mostrarModalState} isVencedor={vencedorState} isEmpate={empateState} />  
        </Container>
    );
};

const casaBackgroundVazia = 'radial-gradient(50% 50% at 50% 50%, rgba(39, 39, 39, 0) 0%, rgba(29, 28, 28, 0.72) 100%)';

const arrayTabuleiro = [
    {
        casas: [0, 0, 0, 0, 0, 0, 0]
    },
    {
        casas: [0, 0, 0, 0, 0, 0, 0]
    },
    {
        casas: [0, 0, 0, 0, 0, 0, 0]
    },
    {
        casas: [0, 0, 0, 0, 0, 0, 0]
    },
    {
        casas: [0, 0, 0, 0, 0, 0, 0]
    },
    {
        casas: [0, 0, 0, 0, 0, 0, 0]
    }
];

const posicionaFichaAoFinalDaColuna = (array, indiceColuna) => {
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i].casas[indiceColuna] === 0) {
            array[i].casas[indiceColuna] = 1;
            break; // Para o loop assim que encontrar o primeiro zero
        };
    };

    return array;
};

function verificarVitoria(tabuleiro) {
    const linhas = 6;
    const colunas = 7;

    // Verificar na horizontal
    for (let linha = 0; linha < linhas; linha++) {
        for (let coluna = 0; coluna < colunas - 3; coluna++) {
            if (tabuleiro[linha].casas[coluna] !== 0 &&
                tabuleiro[linha].casas[coluna] === tabuleiro[linha].casas[coluna + 1] &&
                tabuleiro[linha].casas[coluna] === tabuleiro[linha].casas[coluna + 2] &&
                tabuleiro[linha].casas[coluna] === tabuleiro[linha].casas[coluna + 3]) {
                return true;
            }
        }
    }

    // Verificar na vertical
    for (let linha = 0; linha < linhas - 3; linha++) {
        for (let coluna = 0; coluna < colunas; coluna++) {
            if (tabuleiro[linha].casas[coluna] !== 0 &&
                tabuleiro[linha].casas[coluna] === tabuleiro[linha + 1].casas[coluna] &&
                tabuleiro[linha].casas[coluna] === tabuleiro[linha + 2].casas[coluna] &&
                tabuleiro[linha].casas[coluna] === tabuleiro[linha + 3].casas[coluna]) {
                return true;
            }
        }
    }

    // Verificar nas diagonais (superior esquerda para inferior direita)
    for (let linha = 0; linha < linhas - 3; linha++) {
        for (let coluna = 0; coluna < colunas - 3; coluna++) {
            if (tabuleiro[linha].casas[coluna] !== 0 &&
                tabuleiro[linha].casas[coluna] === tabuleiro[linha + 1].casas[coluna + 1] &&
                tabuleiro[linha].casas[coluna] === tabuleiro[linha + 2].casas[coluna + 2] &&
                tabuleiro[linha].casas[coluna] === tabuleiro[linha + 3].casas[coluna + 3]) {
                return true;
            }
        }
    }

    // Verificar nas diagonais (superior direita para inferior esquerda)
    for (let linha = 0; linha < linhas - 3; linha++) {
        for (let coluna = 3; coluna < colunas; coluna++) {
            if (tabuleiro[linha].casas[coluna] !== 0 &&
                tabuleiro[linha].casas[coluna] === tabuleiro[linha + 1].casas[coluna - 1] &&
                tabuleiro[linha].casas[coluna] === tabuleiro[linha + 2].casas[coluna - 2] &&
                tabuleiro[linha].casas[coluna] === tabuleiro[linha + 3].casas[coluna - 3]) {
                return true;
            }
        }
    }

    // Nenhum alinhamento de 4 peças foi encontrado
    return false;
}

function verificarEmpate(tabuleiro) {
    const linhas = 6;
    const colunas = 7;

    for (let linha = 0; linha < linhas; linha++) {
        for (let coluna = 0; coluna < colunas; coluna++) {
            if (aindaEhPossivelVencer(tabuleiro, linha, coluna)) {
                return false;
            }
        }
    }

    return true;
}

function aindaEhPossivelVencer(tabuleiro, linha, coluna) {
    const linhas = 6;
    const colunas = 7;
    const posicaoAtual = tabuleiro[linha].casas[coluna];

    // Verificar na horizontal
    for (let i = 0; i < 4; i++) {
        if (coluna + i >= colunas || (tabuleiro[linha].casas[coluna + i] !== posicaoAtual && tabuleiro[linha].casas[coluna + i] != 0)) {
            break;
        }
        if (i === 3) {
            return true;
        }
    }

    // Verificar na vertical
    for (let i = 0; i < 4; i++) {
        if (linha + i >= linhas || (tabuleiro[linha + i].casas[coluna] !== posicaoAtual && tabuleiro[linha + i].casas[coluna] !== 0)) {
            break;
        }
        if (i === 3) {
            return true;
        }
    }

    // Verificar na diagonal (superior esquerda para inferior direita)
    for (let i = 0; i < 4; i++) {
        if (linha + i >= linhas || coluna + i >= colunas || (tabuleiro[linha + i].casas[coluna + i] !== posicaoAtual && tabuleiro[linha + i].casas[coluna + i] != 0)) {
            break;
        }
        if (i === 3) {
            return true;
        }
    }

    // Verificar na diagonal (superior direita para inferior esquerda)
    for (let i = 0; i < 4; i++) {
        if (linha + i >= linhas || coluna - i < 0 || (tabuleiro[linha + i].casas[coluna - i] !== posicaoAtual && tabuleiro[linha + i].casas[coluna - i] !== 0)) {
            break;
        }
        if (i === 3) {
            return true;
        }
    }

    return false; // Não é possível vencer a partir dessa posição
}