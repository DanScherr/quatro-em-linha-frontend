import { Card, CardContent, Grid, Typography, Button, Accordion, AccordionSummary, List, AccordionDetails, Avatar, Box } from "@mui/material";
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
            height: '515px', 
            backgroundColor: 'background.card',
            borderRadius: 5,
            mt: 1
        }}>
            <CardContent>
                {/** PAGOS */}
                <Typography variant="span" sx={{
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
                        maxHeight: 550,
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
                                        <Typography variant="span" sx={{fontSize: 14, color: '#000000e4', fontWeight: '700'}}>
                                            {item.categoria}
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{paddingTop: 0}}>
                                        <Typography variant="span">
                                            <Grid container spacing={2} sx={{pl: 2}}>
                                                {item.temas.map((tema, j) => {
                                                    return (
                                                        <Grid item key={`MonetizacaoArrayAccordionTema-${j}`} xs={6}>
                                                            <Typography variant="span" textAlign={'center'}>

                                                                    <Box sx={{mb: 1}}>
                                                                        <ModalCompraFicha item={itemFicha} tema={temaFicha} setMostrar={setOpen} mostrar={open}/>
                                                                        <Button sx={{borderRadius: 5}} onClick={() => {setOpen(true); setitemFicha(item); settemaFicha(tema)}}>
                                                                            <Grid container justifyContent={'center'}>
                                                                                <Grid item xs={12}>
                                                                                    <Avatar alt="tema.titulo" src={retornaImagemFicha(geraPathTema(item, tema, basePathImages))}
                                                                                        sx={{
                                                                                            border: '1px solid white',
                                                                                            color: 'font.main',
                                                                                            mx: 'auto'
                                                                                        }}
                                                                                    />
                                                                                </Grid>
                                                                                <Grid item xs={12}>
                                                                                    <Typography variant="span" sx={{
                                                                                        color: 'font.emphasis', 
                                                                                        maxWidth: '110px', 
                                                                                        wordBreak: 'break-all',
                                                                                        fontSize: "12px"
                                                                                    }}>
                                                                                        {tema.nome}
                                                                                    </Typography>
                                                                                </Grid>
                                                                                <Grid item xs={12}>
                                                                                    <MonetizationOnIcon fontSize='small' sx={{
                                                                                        color: '#FADB37', 
                                                                                        display: 'inline', 
                                                                                        ml: 0
                                                                                    }}/>
                                                                                    <Typography variant="span" sx={{
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
                    
                    <div style={{height: '100px', display: 'block'}}>
                        {''}
                    </div>
                    
                </List>
            </CardContent>          
        </Card>
    );
};