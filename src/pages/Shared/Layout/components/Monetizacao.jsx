import { Card, CardContent, Grid, Typography, Button, Accordion, AccordionSummary, List, AccordionDetails } from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Monetizacao.css'

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
                            <Button>
                                <CircleIcon sx={{fontSize: 60, color: 'yellow'}}/>
                            </Button>
                        </Typography>
                    </Grid>
                    <Grid xs={6}>
                        <Typography textAlign={'center'}>
                            <Button>
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
                                                                <Button>
                                                                    <CircleIcon sx={{fontSize: 60, color: 'primary.lightestMain'}}/>
                                                                </Button>
                                                                <Typography>
                                                                    {tema.titulo}
                                                                </Typography>
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
                imagem: ''
            },
            {
                titulo: 'Hallowen',
                imagem: ''
            },
            {
                titulo: 'Food',
                imagem: ''
            },
            {
                titulo: 'Beach',
                imagem: ''
            },
        ]
    },
    {
        categoria: 'Marvel',
        liberado: false,
        temas: [
            {
                titulo: 'Natal',
                imagem: ''
            },
            {
                titulo: 'Hallowen',
                imagem: ''
            },
            {
                titulo: 'Food',
                imagem: ''
            },
            {
                titulo: 'Beach',
                imagem: ''
            },
        ]
    },
    {
        categoria: 'Star wars',
        liberado: false,
        temas: [
            {
                titulo: 'Natal',
                imagem: ''
            },
            {
                titulo: 'Hallowen',
                imagem: ''
            },
            {
                titulo: 'Food',
                imagem: ''
            },
            {
                titulo: 'Beach',
                imagem: ''
            },
        ]
    },
    {
        categoria: 'Dragon Ball',
        liberado: false,
        temas: [
            {
                titulo: 'Natal',
                imagem: ''
            },
            {
                titulo: 'Hallowen',
                imagem: ''
            },
            {
                titulo: 'Food',
                imagem: ''
            },
            {
                titulo: 'Beach',
                imagem: ''
            },
        ]
    },
    {
        categoria: 'Naruto',
        liberado: false,
        temas: [
            {
                titulo: 'Natal',
                imagem: ''
            },
            {
                titulo: 'Hallowen',
                imagem: ''
            },
            {
                titulo: 'Food',
                imagem: ''
            },
            {
                titulo: 'Beach',
                imagem: ''
            },
        ]
    },

]