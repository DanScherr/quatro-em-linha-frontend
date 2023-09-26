import { Box, Button, Stack, Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import AuthContext from "../../context/AuthContext";
import { useContext } from "react";


export default function Cadastro( ) {
    const {
        setOpcao
    } = useContext(AuthContext);

    return (
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
            <Stack>
                <Typography sx={{my: 3, mx: "auto", fontSize: `23px`, color: 'primary.main'}}>
                    CADASTRO
                </Typography>
                <TextField
                    required
                    id="outlined-required"
                    label="Nome"
                    defaultValue=""
                    sx={{my: 0.7, color: 'font.main'}}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Email"
                    defaultValue=""
                    sx={{my: 0.7, color: 'font.main'}}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Senha"
                    type="password"
                    defaultValue=""
                    sx={{my: 0.7, color: 'font.main'}}
                />
                <Button variant="outlined" sx={{my: 0.2}}>
                    Submit
                </Button>
                <Button onClick={() => setOpcao('')}
                    variant="outlined" sx={{my: 0.2, color: `secondary.main`, borderColor: `secondary.main`, 
                    '&:hover': {
                        backgroundColor: 'secondary.veryLightMain',
                        borderColor: 'white',
                        boxShadow: 'none',
                        color: `white`,
                        opacity: `75%`
                }}}>
                    Voltar
                </Button>
            </Stack>
        </Box>
    )
};