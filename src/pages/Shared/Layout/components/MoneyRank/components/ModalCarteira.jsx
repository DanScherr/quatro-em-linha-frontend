import { Button, Grid, Modal } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { Stack, Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import AuthContext from '../../../../../../context/AuthContext';

const BACKGROUND_STYLE = {
  position: 'fixed',
  top: '0',
  bottom: '0',
  left: '0',
  right: '0',
  backgroundColor: 'rgb(0, 0, 0, 0.7)',
  zIndex: '1002'
};

const MODAL_STYLE = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'rgba(139, 139, 139, 0.6)',
  width: '500px',
  height: '500px',
  borderRadius: '21px'
};

const TITLE_STYLE = {
  textAlign: 'center',
  marginTop: '30px',
  color: 'rgba(0, 0, 0, 1)'
};

export function ModalCarteira({ mostrar, setMostrar }) {

    const {
        carteira,
        AlteraCarteira,
        ConsultaCarteira, 
        setOpenNotificacao,
    } = useContext(AuthContext);

    // VARIAVEIS DO FORMULARIO
    const [moedas, setMoedas] = useState(0);
    const [real, setReal] = useState(0);

    const handleInputs = (e) => {
        e.preventDefault();
        let varMoedas = e.target.value;
        let soma = parseInt(carteira) + parseInt(varMoedas);
        setMoedas(soma);
        setReal(varMoedas/50);
    };

    const resolveClick = () => {
        AlteraCarteira(moedas);
        ConsultaCarteira();
        setOpenNotificacao({
            msg: 'Compra realizada com sucesso!',
            open: true,
            severity: 'success'
        });
    };

    return (
      <Modal open={mostrar} style={BACKGROUND_STYLE} onClose={() => setMostrar(false)}>
        <div style={MODAL_STYLE}>
            <div style={TITLE_STYLE}>
                {/* Titulo */}
                <Typography variant='span'
                sx={{
                    color: 'font.emphasis',
                    fontSize: 23,
                    fontWeight: 550,
                    letterSpacing: 2,
                    mb: 5
                }}>
                    {'COMPRAR CRÉDITOS:'}
                </Typography>
                {/* Subtitulo */}
                <Typography variant='span'
                sx={{
                    ml: 5,
                    mt: 3,
                    fontFamily: 'Play',
                    fontSize: '20px',
                    fontWeight: 700,
                    LineWeight: '23px',
                    textAlign: 'left',
                    color: 'font.emphasis',
                    display: 'block'
                }}>
                    {'Cotação'}
                </Typography>
                <Typography variant='span'
                sx={{
                    mt: 5,
                    ml: 5,
                    fontFamily: 'Play',
                    fontSize: '20px',
                    LineWeight: '23px',
                    textAlign: 'left',
                    color: 'font.main',
                    display: 'inline'
                }}>
                    {'R$ 2,00'}
                </Typography>
                <Typography variant='span'
                sx={{
                    mt: 5,
                    ml: 5,
                    fontFamily: 'Play',
                    fontSize: '20px',
                    LineWeight: '23px',
                    textAlign: 'left',
                    color: 'font.main',
                    display: 'inline'
                }}>
                    {'='}
                </Typography>
                <MonetizationOnIcon fontSize='large' sx={{
                    color: '#FADB37', 
                    display: 'inline', 
                    ml: 5
                }}/>
                <Typography variant='span'
                sx={{
                    mt: 5,
                    ml: 5,
                    fontFamily: 'Play',
                    fontSize: '20px',
                    LineWeight: '23px',
                    textAlign: 'left',
                    color: 'font.main',
                    display: 'inline'
                }}>
                    {'100,00'}
                </Typography>
            </div>

            {/* INPUTS DO USUARIO */}
            <Grid container>
                <Grid item xs={6} sx={{p: 5}}>
                <Stack>
                    {/* TITULO */}
                    <Typography variant='span'
                    sx={{my: 2, mx: "auto", fontSize: `17px`, color: 'font.emphasis'}}>
                        MOEDAS
                    </Typography>

                    {/* NUMERO DE MOEDAS */}
                    <TextField
                        id="outlined-number"
                        label=""
                        type="number"
                        InputLabelProps={{
                            shrink: true
                        }}
                        onChange={handleInputs}
                    />
                </Stack>
                </Grid>
                <Grid item xs={6} sx={{p: 5}}>
                    <Stack>
                        {/* TITULO */}
                        <Typography variant='span'
                        sx={{my: 2, mx: "auto", fontSize: `17px`, color: 'font.emphasis'}}>
                            VALOR A PAGAR R$
                        </Typography>

                        {/* QUANTIDADE REAL */}
                        <TextField
                            disabled
                            id="outlined-number"
                            label="Real"
                            value={real}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Stack>
                </Grid>
            </Grid>

            {/* Button */}
            <Grid container justifyContent={'center'}>
                <Grid item xs={2}>
                    <Button 
                        onClick={resolveClick}
                        variant='contained' 
                        sx={{
                            mx: 'auto', 
                            mt: 10, 
                            color: 'font.emphasis'
                        }}
                    >
                        COMPRAR
                    </Button>
                </Grid>
            </Grid>
        </div>
      </Modal>
    );
};