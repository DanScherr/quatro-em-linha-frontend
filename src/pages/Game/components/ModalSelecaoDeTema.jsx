import { Avatar, Box, Button, Grid, List, Modal, Typography } from '@mui/material'
import React from 'react'
import { arrayMonetizacao } from '../../Shared/Layout/components/Monetizacao'
import imgDefault from './../../../static/images/default-lock-icon.png'

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

const GIF_STYLE = {
  textAlign: 'center',
  paddingTop: '10px'
}

export function ModalSelecaoDeTema({ mostrar, setMostrar, setTemaState }) {

    return (
      <Modal open={mostrar} style={BACKGROUND_STYLE}>
        <div style={MODAL_STYLE}>
          <div style={TITLE_STYLE}>
            <Typography sx={{
                color: 'font.emphasis',
                fontSize: 23,
                fontWeight: 550,
                letterSpacing: 2
            }}>
                {'SELECIONE SEU TEMA'}
            </Typography>
            {/* <p>{!isVencedor ?? 'Revanche?'}</p> */}
          </div>
          <div style={GIF_STYLE} className='mt-4'>
                <List
                    sx={{
                        borderRadius: 7,
                        width: '100%',
                        maxWidth: 480,
                        position: 'relative',
                        overflow: 'auto',
                        maxHeight: 350,
                        padding: 0,
                        '& ul': { padding: 0 },
                        mt: 0,
                        backgroundColor: 'background.card',
                        pb: 2,
                        px: 2,
                        mx: 'auto',
                        boxShadow: 'rgba(255, 255, 255, 0.25) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;'
                    }}
                >
                    {arrayMonetizacao.map((item, index) => {
                        return (
                            <div key={`modalSelecaoDeTema-Categoria-${index}`}>
                                <Typography
                                    sx={{
                                        borderRadius: 60,
                                        color: 'font.emphasis',
                                        mt: 2,
                                        backgroundColor: 'background.accordionHeader'
                                    }}
                                >
                                    {item.categoria}
                                </Typography>
                                <Grid container spacing={1} sx={{mt: 1}}>
                                    {item.temas.map((tema, index) => {
                                        return (
                                            <Grid key={`modalSelecaoDeTema-Tema-${index}`} xs={3}>
                                                <Box sx={{mb: 1}}>
                                                    <Button 
                                                        sx={{borderRadius: 60}}
                                                        onClick={() => {setMostrar(false); setTemaState(tema.titulo)} }
                                                    >
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
                                            </Grid>
                                        )
                                    })}
                                </Grid>
                            </div>
                        )
                    })}
                </List>
            {/* <p>ESPAÇO PARA O GIF / BOTÃO DE JOGAR NOVAMENTE</p> */}
          </div>
        </div>
      </Modal>
    );
};