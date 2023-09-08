import { Card, CardContent, Grid, Typography, Button, Accordion, AccordionSummary, List, AccordionDetails, Avatar, Box } from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Monetizacao.css'
import imgDefault from './../../../../static/images/default-image-icon.png';
import lockDefault from './../../../../static/images/default-lock-icon.png';

export default function Monetizacao(  ) {
    return (
        <Card sx={{
            height: '605px', m: 2, 
            backgroundColor: 'background.card',
            borderRadius: 5,
            mt: 11.5
        }}>
            {/** CLASSICOS */}
            <CardContent>
                <Typography sx={{
                    textAlign: 'start', fontSize: '25px',
                    color: 'primary.lightMain', fontWeight: '700'
                }}>
                    Clássico
                </Typography>
                <Grid container spacing={2} sx={{my: 1}}>
                    <Grid xs={6}>
                        <Typography textAlign={'center'}>
                            <Button sx={{borderRadius: 60}}>
                                <CircleIcon sx={{fontSize: 60, color: 'yellow'}}/>
                            </Button>
                        </Typography>
                    </Grid>
                    <Grid xs={6}>
                        <Typography textAlign={'center'}>
                            <Button sx={{borderRadius: 60}}>
                                <CircleIcon sx={{fontSize: 60, color: 'red'}}/>
                            </Button>
                        </Typography>
                    </Grid>
                </Grid>

                {/** PAGOS */}
                <Typography sx={{
                    textAlign: 'start', fontSize: '25px',
                    color: 'primary.lightMain', fontWeight: '700'
                }}>
                    Temas Pagos
                </Typography>
                <List
                    sx={{
                        width: '100%',
                        maxWidth: 360,
                        position: 'relative',
                        overflow: 'auto',
                        maxHeight: 500,
                        padding: 0,
                        '& ul': { padding: 0 },
                        mt: 0
                    }}
                >
                    {
                        arrayMonetizacao.map((item, i) => {
                            return (
                                <Accordion 
                                    key={`MonetizacaoArrayAccordionHeader-${i}`}
                                    className="MonetizacaoArrayAccordion"
                                    sx={{backgroundColor: 'background.accordionHeader'}}
                                >
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id={item.categoria}
                                        sx={{mt: 2}}
                                    >
                                        <Typography sx={{fontSize: '20px', color: '#000000e4', fontWeight: '700'}}>
                                            {item.categoria}
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{paddingTop: 0}}>
                                        <Typography>
                                            <Grid container spacing={2} sx={{mt: 1}}>
                                                {item.temas.map((tema, j) => {
                                                    return (
                                                        <Grid key={`MonetizacaoArrayAccordionTema-${j}`} xs={6}>
                                                            <Typography textAlign={'center'}>
                                                                {tema.liberado ?
                                                                    <Box sx={{mb: 1}}>
                                                                        <Button sx={{borderRadius: 60}}>
                                                                            <Avatar alt="tema.titulo" src={tema.imagem === '' ? imgDefault : tema.imagem}
                                                                                sx={{border: '1px solid white',
                                                                                color: 'font.main'
                                                                                }}
                                                                            />
                                                                        </Button>
                                                                        <Typography>
                                                                            {tema.titulo}
                                                                        </Typography>
                                                                    </Box>
                                                                :
                                                                    <Box sx={{mb: 1}}>
                                                                        <Button sx={{borderRadius: 60}}>
                                                                            <Avatar alt="tema.titulo" src={tema.imagem === '' ? lockDefault : tema.imagem}
                                                                                sx={{border: '1px solid white',
                                                                                color: 'font.main'
                                                                                }}
                                                                            />
                                                                        </Button>
                                                                        <Typography sx={{color: 'font.emphasis'}}>
                                                                            {tema.titulo}
                                                                        </Typography>
                                                                    </Box>
                                                                }
                                                            </Typography>
                                                        </Grid>
                                                    );
                                                })}
                                            </Grid>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            )
                        })
                    }
                </List>

            </CardContent>

            
        </Card>
    );
};

const arrayMonetizacao = [
    {
        categoria: 'Diversos',
        liberado: false,
        temas: [
            {
                titulo: 'Natal',
                imagem: '',
                liberado: false,
            },
            {
                titulo: 'Hallowen',
                imagem: '',
                liberado: true,
            },
            {
                titulo: 'Food',
                imagem: '',
                liberado: false,
            },
            {
                titulo: 'Beach',
                imagem: '',
                liberado: false,
            },
        ]
    },
    {
        categoria: 'Marvel',
        liberado: false,
        temas: [
            {
                titulo: 'Natal',
                imagem: '',
                liberado: false,
            },
            {
                titulo: 'Hallowen',
                imagem: '',
                liberado: false,
            },
            {
                titulo: 'Food',
                imagem: '',
                liberado: false,
            },
            {
                titulo: 'Beach',
                imagem: '',
                liberado: false,
            },
        ]
    },
    {
        categoria: 'Star wars',
        liberado: false,
        temas: [
            {
                titulo: 'Natal',
                imagem: '',
                liberado: false,
            },
            {
                titulo: 'Hallowen',
                imagem: '',
                liberado: false,
            },
            {
                titulo: 'Food',
                imagem: '',
                liberado: false,
            },
            {
                titulo: 'Beach',
                imagem: '',
                liberado: false,
            },
        ]
    },
    {
        categoria: 'Dragon Ball',
        liberado: false,
        temas: [
            {
                titulo: 'Natal',
                imagem: '',
                liberado: false,
            },
            {
                titulo: 'Hallowen',
                imagem: '',
                liberado: false,
            },
            {
                titulo: 'Food',
                imagem: '',
                liberado: false,
            },
            {
                titulo: 'Beach',
                imagem: '',
                liberado: false,
            },
        ]
    },
    {
        categoria: 'Naruto',
        liberado: false,
        temas: [
            {
                titulo: 'Natal',
                imagem: '',
                liberado: false,
            },
            {
                titulo: 'Hallowen',
                imagem: '',
                liberado: false,
            },
            {
                titulo: 'Food',
                imagem: '',
                liberado: false,
            },
            {
                titulo: 'Beach',
                imagem: '',
                liberado: false,
            },
        ]
    },

]