import { Button, Container, Grid } from "@mui/material";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';


export default function Tabuleiro(  ) {
    return (
        <Container sx={{mx: 'auto'}}>
            <Grid container spacing={2} sx={{my: 1, mx: 6}}>
                {arrayTabuleiro[0].casas.map((botao, i) => {
                    return (
                        <Grid key={`JogarTabuleiroArrayBotao-${i}`} xs={1} sx={{my: 2, mx: 1}}>
                            <Button sx={{mr: 5, 
                                '&:hover': {
                                    backgroundColor: 'none',
                                    opacity: '70%',
                                }
                            }}>
                                <KeyboardDoubleArrowDownIcon sx={{
                                    fontSize: "40px",
                                    color: '#5C92FF',
                                    
                                }} />
                            </Button>
                        </Grid>
                    )
                })}
            </Grid>
            {arrayTabuleiro.map((item, i) => {
                return (
                    // LINHA DO TABULEIRO
                    <Grid key={`JogarTabuleiroArrayItem-${i}`} container spacing={2} sx={{my: 1, mx: 6}}>
                        {item.casas.map((casa, j) => {
                        return (
                            <Grid key={`JogarTabuleiroArrayCasa-${i}`} xs={1} sx={{my: 2, mx: 1}}>
                                {/* CASA DO TABULEIRO */}
                                <Container
                                    sx={{
                                        background: 'radial-gradient(50% 50% at 50% 50%, rgba(39, 39, 39, 0) 0%, rgba(29, 28, 28, 0.72) 100%)',
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
        </Container>
        
    );
};

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