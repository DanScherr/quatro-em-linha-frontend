import { Avatar, Box, Button, Grid, Tooltip, Typography } from "@mui/material";

export default function ModalFichasClassicas( {setMostrar, setTemaState, disableButton, vsChosenTheme} ) {
    return (
        <div key={`modalSelecaoDeTema-Categoria-Classicos`}>
            <Typography
                sx={{
                    borderRadius: 60,
                    color: 'font.emphasis',
                    mt: 2,
                    backgroundColor: 'background.accordionHeader'
                }}
            >
                {'CLÁSSICOS'}
            </Typography>
            <Grid container justifyContent={'center'} spacing={1} sx={{mt: 1}}>
                {['red','yellow'].map((tema, index) => {
                    return (
                        <Grid item key={`modalSelecaoDeTema-Tema-${index}`} xs={3}>
                            <Box sx={{mb: 1}}>
                                <Tooltip followCursor arrow title={`${tema.charAt(0).toUpperCase() + tema.slice(1)}`} placement="top">
                                    <Button
                                        disabled={!disableButton || (vsChosenTheme === tema)}
                                        sx={{borderRadius: 60}}
                                        onClick={() => {setMostrar(false); setTemaState(tema)} }
                                    >
                                        <Avatar alt="tema.titulo"
                                            sx={{border: '1px solid white',
                                            backgroundColor: tema,
                                            color: tema
                                            }}
                                        />
                                    </Button>
                                </Tooltip>
                                <Typography>
                                    {tema}
                                </Typography>
                            </Box>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}