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
                    sx={{marginTop: '10px', marginLeft: '35px', marginRight: '35px', spacing:'4' }}>
                    {/* TITULO */}
                    <Typography className='superuser-title'>
                        CADASTRO DE PROPAGANDA
                    </Typography>

                    {/* NOME DO ANUNCIO INPUT */}
                    <FormControl sx={{mb: 3, marginTop: '20px'}}> 
                        <InputLabel sx={{color:'#000'}} htmlFor='input-nome-anuncio'>Nome do anúncio:</InputLabel>
                        <Input 
                            className='superuser'
                            // onChange={handleInputs}
                            // onBlur={handleBlur}
                            id="input-nome-anuncio" 
                            aria-describedby="input-your-name" 
                        />
                        <FormHelperText id='my-helper-input-nome-anuncio'></FormHelperText>
                    </FormControl>

                    {/* EMPRESA DO ANUNCIO INPUT */}
                    <FormControl sx={{mb: 3}}>
                        <InputLabel sx={{color:'#000'}} htmlFor='input-empresa-anuncio'>Empresa do Anúncio:</InputLabel>
                        <Input
                            className='superuser'
                            // onChange={handleInputs}
                            // onBlur={handleBlur} 
                            id="input-empresa-anuncio" 
                            aria-describedby="input-your-name" 
                        />
                        <FormHelperText id='my-helper-empresa-anuncio'></FormHelperText>
                    </FormControl>

                    {/* IMAGEM ANUNCIO INPUT */}
                    <FormControl /*error={formComponents.senha.error} required={true}*/ sx={{mb: 3}}>
                        <InputLabel sx={{color:'#000'}} htmlFor='input-imagem-anuncio'>Imagem do Anúncio:</InputLabel>
                        <Input 
                            className='superuser'
                            // onChange={handleInputs}
                            // onBlur={handleBlur}
                            id="input-imagem-anuncio" 
                            aria-describedby="input-your-name" 
                        />
                        <FormHelperText id='my-helper-input-anuncio'></FormHelperText>
                    </FormControl>

                    {/* BOTAO SUBMIT */}
                    <Button /*onClick={handleSubmit}*/ variant="contained" className='superuser-button-primary' sx={{marginTop: '130px'}}>
                        Confirmar
                    </Button>

                    {/* BOTAO VOLTAR */}
                    <Button onClick={() => setOpcao('')}
                        variant="contained" className='superuser-button-secondary'>
                        Voltar
                </Button>

                {/* <Typography 
                    sx={{
                        display: msgCadastro ? 'block' : 'none',
                        mt: 3, mb: 8, mx: "auto", fontSize: `14px`, color: '#f44336'
                    }}
                >
                    {'Cadastro falhou! Tente novamente.'}
                </Typography> */}
            </Stack>
        </div>
    </Box>

    );
};