import { Box, Button, FormControl, FormHelperText, Input, InputLabel, Stack, Typography } from '@mui/material'
import React from 'react';
import '../SuperUser.css';
import { useContext } from "react";
import AuthContext from "../../../context/AuthContext";

export default function CadastroPropaganda() {
    const {
        setOpcao
    } = useContext(AuthContext);

    return (
        <Box className='superuser-background'
            component='form'
            autoComplete="off"
            noValidate
        >
            <div className='superuser-card'>
                {/* // FORMULARIO DE CADASTRO DE PROPAGANDA*/}
                <Stack 
                    sx={{marginTop: '10px', marginLeft: '35px', marginRight: '35px', spacing:'6' }}>
                    {/* TITULO */}
                    <Typography className='superuser-title' >
                        ALTERAR COTAÇÃO
                    </Typography>

                    {/* VALOR DE 100 MOEDAS INPUT */}
                    <FormControl /*error={formComponents.senha.error} required={true}*/ sx={{mb: 3, marginTop: '80px'}}>
                        <InputLabel sx={{color:'#000'}} htmlFor='input-valor-cotacao'>Valor de 100 moedas do jogo em R$:</InputLabel>
                        <Input
                            className='superuser MuiInput-underline-root'
                            type="number"
                            // onChange={handleInputs}
                            // onBlur={handleBlur}
                            id="input-valor-cotacao" 
                            aria-describedby="input-your-name" 
                        />
                        <FormHelperText id='my-helper-input-cotacao'></FormHelperText>
                    </FormControl>
                    
                    {/* BOTAO SUBMIT */}
                    <Button /*onClick={handleSubmit}*/ variant="contained" className='superuser-button-primary' sx={{marginTop: '220px'}}>
                        Confirmar
                    </Button>

                    {/* BOTAO VOLTAR */}
                    <Button onClick={() => setOpcao('')}
                        variant="contained" className='superuser-button-secondary' >
                        Voltar
                </Button>

            </Stack>
        </div>
    </Box>

    );
};