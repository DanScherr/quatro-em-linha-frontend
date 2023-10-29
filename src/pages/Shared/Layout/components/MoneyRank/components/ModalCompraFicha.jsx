import { Avatar, Button, Grid, Modal } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react';
import { Typography } from "@mui/material";
import AuthContext from '../../../../../../context/AuthContext';
import { retornaImagemFicha } from '../../../../../Game/components/ImportFichas';
import { geraPathTema } from '../../../../../Game/components/ModalSelecaoDeTema';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';


const BACKGROUND_STYLE = {
  position: 'fixed',
  top: '0',
  bottom: '0',
  left: '0',
  right: '0',
  backgroundColor: 'rgb(0, 0, 0, 0.7)',
  zIndex: '1000'
}

const MODAL_STYLE = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'rgba(139, 139, 139, 0.6)',
  width: '500px',
  height: '500px',
  borderRadius: '21px'
}

const TITLE_STYLE = {
  textAlign: 'center',
  marginTop: '30px',
  color: 'rgba(0, 0, 0, 1)'
}

export function ModalCompraFicha({ mostrar, setMostrar, item, tema }) {
    const {
        AlteraCarteira,
        openNotificacao, setOpenNotificacao,
        carteira,
    } = useContext(AuthContext);

    let basePathImages = './../../../static/images/fichas/';

    // VARIAVEIS DO FORMULARIO
    const resolveClick = () => {
        if (carteira - tema.valor >= 0){
            AlteraCarteira(carteira - tema.valor);
            setOpenNotificacao({
                msg: 'Compra realizada com sucesso!',
                open: true,
                severity: 'success'
            });
        }
        else
            setOpenNotificacao({
                msg: 'Sua carteira precisa ter saldo suficiente.',
                open: true,
                severity: 'error'
            });
    };

    return (
      <Modal open={mostrar} style={BACKGROUND_STYLE} onClose={() => setMostrar(false)}>
        <div style={MODAL_STYLE}>
          <div style={TITLE_STYLE}>
            {/* Titulo */}
            <Typography sx={{
                color: 'font.emphasis',
                fontSize: 23,
                fontWeight: 550,
                letterSpacing: 2,
                mb: 5
            }}>
                {'COMPRAR FICHA:'}
            </Typography>
            {/* Subtitulo */}
            <Grid container justifyContent={'center'}>
                <Grid xs={12}>
                    <Avatar
                        alt="tema.titulo" 
                        src={retornaImagemFicha(geraPathTema(item, tema, basePathImages))}
                        sx={{
                            border: '1px solid white',
                            color: 'font.main',
                            mx: 'auto',
                            height: '150px',
                            width: '150px'
                        }}
                    />
                </Grid>
                <Grid xs={12} sx={{mt: 2}}>
                    <Typography sx={{
                        mt: 5,
                        fontFamily: 'Play',
                        fontSize: '20px',
                        LineWeight: '23px',
                        textAlign: 'left',
                        color: 'font.main',
                        display: 'inline',
                        maxHeight: '300px',
                        wordBreak: 'break-all'
                    }}>
                        {tema.descricao}
                    </Typography>
                </Grid>
                <Grid xs={12} sx={{mt: 2}}>
                    <MonetizationOnIcon fontSize='large' sx={{
                        color: '#FADB37', 
                        display: 'inline', 
                        ml: 0
                    }}/>
                    <Typography sx={{
                        mt: 5,
                        ml: 1,
                        fontFamily: 'Play',
                        fontSize: '20px',
                        LineWeight: '23px',
                        textAlign: 'left',
                        color: 'font.main',
                        display: 'inline'
                    }}>
                        {tema.valor?.toString() + ',00'}
                    </Typography>
                </Grid>
            </Grid>
          </div>
          <Grid container>
            <Button 
                onClick={resolveClick}
                variant='contained' 
                sx={{
                    mx: 'auto', 
                    mt: 10, 
                    color: 'font.emphasis'
                }}
            >
                EFETUAR COMPRA
            </Button>
          </Grid>
        </div>
      </Modal>
    );
};