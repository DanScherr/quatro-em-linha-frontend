import { Button, Card, Container, Grid } from "@mui/material";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { useEffect, useState } from "react";


export default function Tabuleiro(  ) {
    const [ gameState, setGameState ] = useState(arrayTabuleiro);
    const [ colunaState, setColunaState ] = useState(0);
    const [ temaState, setTemaState ] = useState('red');

    // Roda quando o evento do botão é gerado
    useEffect(() => {
        console.log(gameState)
        // Elaborar a logica para gerar novo array do tabuleiro
        // adicioando o valor 1 ao final da coluna do botao selecionado
        // let novoArray = ...;
        
        // Setar o novo array ao gameState
        // setGameState(novoArray);
    }, [colunaState]);

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
                p: 2
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
        </Container>
    );
};

const casaBackgroundVazia = 'radial-gradient(50% 50% at 50% 50%, rgba(39, 39, 39, 0) 0%, rgba(29, 28, 28, 0.72) 100%)';

const arrayTabuleiro = [
    {
        casas: [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
        ]
    },
    {
        casas: [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
        ]
    },
    {
        casas: [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
        ]
    },
    {
        casas: [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
        ]
    },
    {
        casas: [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
        ]
    },
    {
        casas: [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
        ]
    },
]