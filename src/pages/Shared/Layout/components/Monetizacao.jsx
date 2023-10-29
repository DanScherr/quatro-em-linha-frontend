import { Card, CardContent, Grid, Typography, Button, Accordion, AccordionSummary, List, AccordionDetails, Avatar, Box } from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Monetizacao.css'
import imgDefault from './../../../../static/images/default-image-icon.png';
import AuthContext from "../../../../context/AuthContext";
import { useContext, useEffect, useState } from "react";
import { retornaImagemFicha } from "../../../Game/components/ImportFichas";
import {geraPathTema} from './../../../Game/components/ModalSelecaoDeTema'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { ModalCompraFicha } from "./MoneyRank/components/ModalCompraFicha";


export default function Monetizacao(  ) {
    const {todosTemas, BuscaTemas} = useContext(AuthContext);
    const [open, setOpen] = useState(false);
    const [itemFicha, setitemFicha] = useState({});
    const [temaFicha, settemaFicha] = useState('');

    useEffect(() => {
        BuscaTemas();
    }, []);

    let basePathImages = './../../../static/images/fichas/';
    return (
        <Card sx={{
            height: '605px', m: 2, 
            backgroundColor: 'background.card',
            borderRadius: 5,
            mt: 1.5
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
                    { !todosTemas.loading ?
                        todosTemas.data.map((item, i) => {
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
                                            <Grid container spacing={2} sx={{pl: 2}}>
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
                                                                            {tema.nome}
                                                                        </Typography>
                                                                    </Box>
                                                                :
                                                                    <Box sx={{mb: 1}}>
                                                                        <ModalCompraFicha item={itemFicha} tema={temaFicha} setMostrar={setOpen} mostrar={open}/>
                                                                        <Button sx={{borderRadius: 5}} onClick={() => {setOpen(true); setitemFicha(item); settemaFicha(tema)}}>
                                                                            <Grid container justifyContent={'center'}>
                                                                                <Grid xs={12}>
                                                                                    <Avatar alt="tema.titulo" src={retornaImagemFicha(geraPathTema(item, tema, basePathImages))}
                                                                                        sx={{
                                                                                            border: '1px solid white',
                                                                                            color: 'font.main',
                                                                                            mx: 'auto'
                                                                                        }}
                                                                                    />
                                                                                </Grid>
                                                                                <Grid xs={12}>
                                                                                    <Typography sx={{
                                                                                        color: 'font.emphasis', 
                                                                                        maxWidth: '110px', 
                                                                                        wordBreak: 'break-all'
                                                                                    }}>
                                                                                        {tema.nome}
                                                                                    </Typography>
                                                                                </Grid>
                                                                                <Grid xs={12}>
                                                                                    <MonetizationOnIcon fontSize='small' sx={{
                                                                                        color: '#FADB37', 
                                                                                        display: 'inline', 
                                                                                        ml: 0
                                                                                    }}/>
                                                                                    <Typography sx={{
                                                                                        color: 'font.emphasis', 
                                                                                        maxWidth: '110px', 
                                                                                        wordBreak: 'break-all',
                                                                                        display: 'inline',
                                                                                        ml: 0.2,
                                                                                        my: 'auto'
                                                                                    }}>
                                                                                        {tema.valor}
                                                                                    </Typography>
                                                                                </Grid>
                                                                            </Grid>
                                                                        </Button>
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
                    :
                    'Carregando...'
                    }
                </List>
            </CardContent>            
        </Card>
    );
};