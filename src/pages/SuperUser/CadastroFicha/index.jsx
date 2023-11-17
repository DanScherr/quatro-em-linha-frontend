import { Box, Button, FormControl, FormHelperText, Input, InputLabel, Stack, Typography } from '@mui/material'
import React from 'react';
import '../SuperUser.css';
import { useContext } from "react";
import AuthContext from "../../../context/AuthContext";

export default function CadastroFicha() {
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
                {/* // FORMULARIO DE CADASTRO DE FICHA*/}
                <Stack 
                    sx={{marginLeft: '35px', marginRight: '35px', spacing:'4' }}>
                    {/* TITULO */}
                    <Typography className='superuser-title' >
                        CADASTRO DE FICHA
                    </Typography>

                    {/* NOME TEMA INPUT */}
                    <FormControl sx={{mb: 3, marginTop: '5px'}}> 
                        <InputLabel sx={{color:'#000'}} htmlFor='input-nome-tema'>Nome do Tema:</InputLabel>
                        <Input 
                            className='superuser'
                            // onChange={handleInputs}
                            // onBlur={handleBlur}
                            id="input-nome-tema" 
                            aria-describedby="input-your-name" 
                        />
                        <FormHelperText id='my-helper-input-nome-tema'></FormHelperText>
                    </FormControl>

                    {/* DESCRIÇÃO TEMA INPUT */}
                    <FormControl sx={{mb: 3}}>
                        <InputLabel sx={{color:'#000'}} htmlFor='input-descricao-tema'>Descrição do Tema:</InputLabel>
                        <Input
                            className='superuser'
                            // onChange={handleInputs}
                            // onBlur={handleBlur} 
                            id="input-descricao-tema" 
                            aria-describedby="input-your-name" 
                        />
                        <FormHelperText id='my-helper-descricao-tema'></FormHelperText>
                    </FormControl>

                    {/* CATEGORIA TEMA INPUT */}
                    <FormControl className='superuser'/*error={formComponents.senha.error} required={true}*/ sx={{mb: 3}}>
                        <InputLabel sx={{color:'#000'}} htmlFor='input-categoria-tema'>Categoria do Tema:</InputLabel>
                        <Input
                            className='superuser MuiInput-root'
                            // onChange={handleInputs}
                            // onBlur={handleBlur}
                            id="input-categoria-tema" 
                            aria-describedby="input-your-name" 
                        />
                        <FormHelperText id='my-helper-input-senha'></FormHelperText>
                    </FormControl>

                    {/* IMAGEM TEMA INPUT */}
                    <FormControl /*error={formComponents.senha.error} required={true}*/ sx={{mb: 3}}>
                        <InputLabel sx={{color:'#000'}} htmlFor='input-imagem-tema'>Imagem do Tema:</InputLabel>
                        <Input 
                            className='superuser'
                            // onChange={handleInputs}
                            // onBlur={handleBlur}
                            id="input-imagem-tema" 
                            aria-describedby="input-your-name" 
                        />
                        <FormHelperText id='my-helper-input-senha'></FormHelperText>
                    </FormControl>

                    {/* VALOR TEMA INPUT */}
                    <FormControl /*error={formComponents.senha.error} required={true}*/ sx={{mb: 3}}>
                        <InputLabel sx={{color:'#000'}} htmlFor='input-valor-tema'>Valor do Tema em moedas do jogo:</InputLabel>
                        <Input
                            className='superuser'
                            type="number"
                            // onChange={handleInputs}
                            // onBlur={handleBlur}
                            id="input-valor-tema" 
                            aria-describedby="input-your-name" 
                        />
                        <FormHelperText id='my-helper-input-senha'></FormHelperText>
                    </FormControl>
                    
                    {/* BOTAO SUBMIT */}
                    <Button /*onClick={handleSubmit}*/ variant="contained" className='superuser-button-primary'>
                        Confirmar
                    </Button>

                    {/* BOTAO VOLTAR */}
                    <Button onClick={() => setOpcao('')} 
                        variant="contained" 
                        className='superuser-button-secondary'>
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