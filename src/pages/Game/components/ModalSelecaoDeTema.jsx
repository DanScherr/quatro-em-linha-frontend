import { Avatar, Box, Button, Grid, List, Modal, Skeleton, Tooltip, Typography } from '@mui/material'
import React, { useContext, useEffect } from 'react';
import ModalFichasClassicas from './ModalFichasClassicas';
import AuthContext from '../../../context/AuthContext';
import { retornaImagemFicha } from './ImportFichas';
import MultiplayerContext from '../../../context/MultiplayerContext';

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

export function ModalSelecaoDeTema({ mostrar, setMostrar, setChosenState, setTemaState, vsChosenTheme, setCategoriaTemaState}) {
    let basePathImages = './../../../static/images/fichas/';

    const {
        ConsultaUsuarioTemas, 
        usuarioTemas,
        setOpenNotificacao
    } = useContext(AuthContext);

    const {
        multiplayerEstabelecido
    } = useContext(MultiplayerContext);

    useEffect(() => {
        ConsultaUsuarioTemas();
    }, [])

    useEffect(() => {
        if (mostrar && !multiplayerEstabelecido) {
            setOpenNotificacao({
                msg: 'Esperando jogador entrar na sala...',
                open: true,
                severity: 'warning'
            });
        };
    }, [mostrar]);

    useEffect(() => {
        if (multiplayerEstabelecido) {
            setOpenNotificacao({
                msg: 'Escolha sua ficha e jogue!',
                open: true,
                severity: 'success'
            });
        };
    }, [multiplayerEstabelecido]);

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
                    <ModalFichasClassicas setMostrar={setMostrar} setTemaState={setTemaState} disableButton={multiplayerEstabelecido} vsChosenTheme={vsChosenTheme} />
                    { !usuarioTemas.loading ?
                        usuarioTemas.data.map((item, index) => {
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
                                                <Grid item key={`modalSelecaoDeTema-Tema-${index}`} xs={3}>
                                                    <Box sx={{mb: 1}}>
                                                        <Tooltip followCursor arrow title={`${tema.nome.charAt(0).toUpperCase() + tema.nome.slice(1)}`} placement="top">
                                                            <Button 
                                                                    disabled={!multiplayerEstabelecido || (vsChosenTheme === tema.nome.toLowerCase())}
                                                                    sx={{borderRadius: 60}}
                                                                    onClick={() => {setMostrar(false); setTemaState(geraPathTema(item, tema, basePathImages)); setCategoriaTemaState(item.categoria);} }
                                                                >
                                                                    <Avatar alt="" src={retornaImagemFicha(geraPathTema(item, tema, basePathImages))}
                                                                        sx={{border: '1px solid white',
                                                                        color: 'font.main',
                                                                        }}
                                                                    />
                                                                </Button>
                                                                <Typography>
                                                                    {tema.titulo}
                                                                </Typography>
                                                        </Tooltip>
                                                    </Box>
                                                </Grid>
                                            );
                                        })}
                                    </Grid>
                                </div>
                            )
                        })
                        :
                        <div key={`modalSelecaoDeTema-Carregando-Categoria`}>
                            <Typography
                                sx={{
                                    borderRadius: 60,
                                    color: 'font.emphasis',
                                    mt: 2,
                                    backgroundColor: 'background.accordionHeader'
                                }}
                            >
                                {'Carregando...'}
                            </Typography>
                            <Grid container spacing={1} sx={{mt: 1, height: '150px'}}>
                            {
                                [0,1,2,3].map((i, j) => {return (
                                    <Grid item key={`modalSelecaoDeTema-Carregando-Tema-${j}`} xs={3}>
                                        <Box sx={{mb: 1}}>
                                            <Skeleton variant="circular" width={47} height={47} sx={{mx: 'auto'}} />
                                        </Box>
                                    </Grid>
                                )})
                            }
                            </Grid>
                        </div>
                }
                </List>
          </div>
        </div>
      </Modal>
    );
};

export const geraPathTema = (item, tema, basePathImages) => {
    let nome = tema.imagem?.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(' ').join('').split('-').join('').replace('.png', '')
    
    return nome
};