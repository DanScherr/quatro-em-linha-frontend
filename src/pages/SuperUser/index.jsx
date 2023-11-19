import { Box, Button, Stack } from "@mui/material";
import CadastroFicha from "./CadastroFicha";
import CadastroPropaganda from "./CadastroPropaganda";
import Cotacao from "./Cotacao";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext";
import './SuperUser.css';

export default function SuperUser() {
    const {
        opcao,
        setOpcao,
        RealizaLogout,
        isAdmin
    } = useContext(AuthContext);

    const [redirected, setRedirected] = useState(false);

    useEffect(() => {
        // Se o usuário não for um super user, redireciona para a página inicial
        if (!isAdmin && !redirected) {
            setRedirected(true);
            window.location.href = '/';
        }
    }, [redirected]);

    if (isAdmin && !redirected) {
        return (
            <>
            {
            opcao === `ficha`?
                // Ficha
                <CadastroFicha />
            : opcao === `propaganda`?
                // Propaganda
                <CadastroPropaganda />
            : opcao === `cotacao`?
            // cotacao
                <Cotacao />
            :
                // Escolha entre as opçoes
                <>
                    <Box 
                        className='superuser-background'
                    >
                        <Stack container 
                            spacing={4} 
                            direction='column'
                            justifyContent="center"
                            alignItems="center"
                            className='superuser-card'
                        >
                            <Button
                                onClick={() => setOpcao(`ficha`)}
                                variant="outlined" 
                                sx={{
                                    color: `black`, width: '250px', mx: 'auto', borderColor: `black`,
                                    '&:hover': {
                                        color: 'primary.main',
                                    }
                                }}>
                                CADASTRAR FICHAS
                            </Button>
                            <Button
                                onClick={() => setOpcao(`propaganda`)}
                                variant="outlined"
                                sx={{
                                    color: `black`, width: '250px', mx: 'auto', borderColor: `black`,
                                    '&:hover': {
                                        color: 'primary.main',
                                    }
                                }}>
                                CADASTRAR PROPAGANDA
                            </Button>
                            <Button
                                onClick={() => setOpcao(`cotacao`)}
                                variant="outlined"
                                sx={{
                                    color: `black`, width: '250px', mx: 'auto', borderColor: `black`,
                                    '&:hover': {
                                        color: 'primary.main',
                                    }
                                }}>
                                ALTERAR COTAÇÃO
                            </Button>
                            <Button
                                onClick={() => {RealizaLogout()}}
                                variant="outlined"
                                sx={{
                                    color: `black`, width: '250px', mx: 'auto', borderColor: `black`,
                                    '&:hover': {
                                        color: 'primary.main',
                                    }
                                }}>
                                LOGOUT
                            </Button>
                        </Stack>
                    </Box>           
                </>
                }
            </>  
        )
    }
}