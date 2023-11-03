import { Box, Button, Grid } from "@mui/material";
import { useContext } from "react";
import Cadastro from "../Cadastro";
import Login from "../Login";
import AuthContext from "../../context/AuthContext";


export default function PortaUsuario(  ) {
    const {
        opcao,
        setOpcao
    } = useContext(AuthContext);

    return (
        <>
        {
        opcao === `login`?
            // Cadastro
            <Login />
        : opcao === `cadastro`?
            // Login
            <Cadastro />
        :
            // Escolha entre Login ou Cadastro
            <>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 500,
                        height: 500,
                        bgcolor: 'background.paper',
                        border: '2px solid #000',
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 40,
                        '&:hover': {
                            color: 'font.main',
                        }
                    }}
                >
                    <Grid container 
                        spacing={0} 
                        direction='row'
                        justifyContent="center"
                        alignItems="center"
                        sx={{height: '100%', width: '100%'}}
                    >
                        <Grid item xs={3}>
                            <Button
                                onClick={() => setOpcao(`login`)}
                                variant="outlined" 
                                sx={{
                                    color: `font.main`, mx: 'auto',
                                    '&:hover': {
                                        color: 'primary.main',
                                    }
                                }}>
                                Logar
                            </Button>
                        </Grid>
                        <Grid item xs={3}>
                            <Button
                                onClick={() => setOpcao(`cadastro`)}
                                variant="outlined"
                                sx={{
                                    color: `font.main`, mx: 'auto',
                                    '&:hover': {
                                        color: 'primary.main',
                                    }
                                }}>
                                Cadastrar
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </>                
            }
        </>
    )
}