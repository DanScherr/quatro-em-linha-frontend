import { Box, Button, FormControl, FormHelperText, Input, InputLabel, Stack, Typography } from '@mui/material'
import React from 'react';
import '../SuperUser.css';
import { useContext, useState } from "react";
import AuthContext from "../../../context/AuthContext";

export default function CadastroPropaganda() {
    const {
        setOpcao,
        CadastraPropaganda
    } = useContext(AuthContext);

    // VARIAVEIS DO FORMULARIO
    const [formComponents, setFormComponents] = useState({
        nome: {
            value: ''
        },
        empresa: {
            value: ''
        },
        imagem: {
            value: ''
        }
    });

    // LIDA COM OS INPUTS
    const handleInputs = (e) => {
        e.preventDefault();
        switch (e.target.id) {
            case 'input-nome-anuncio':
                setFormComponents(prevVaules => {
                    return {
                        ...prevVaules, // atualiza apenas o item abaixo
                        nome: {
                            value: e.target.value
                        }
                    }
                });
                break;

            case 'input-empresa-anuncio':
                setFormComponents(prevVaules => {
                    return {
                        ...prevVaules, // atualiza apenas o item abaixo
                        empresa: {
                            value: e.target.value
                        }
                    }
                });
                break;

            case 'input-imagem-anuncio':
                setFormComponents(prevVaules => {
                    return {
                        ...prevVaules, // atualiza apenas o item abaixo
                        imagem: {
                            value: e.target.value
                        }
                    }
                });
                break;
        
            default:
                break;
        };
    };

    const [msgCadastro, setMsgCadastro] = React.useState({
        msg: '',
        mostrar: false,
        cor: 'white'
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        let cadastroSucesso = CadastraPropaganda(formComponents.nome, formComponents.empresa, formComponents.imagem);
        
        if (cadastroSucesso){
            setMsgCadastro({
                msg: 'Propaganda cadastrada com sucesso!',
                mostrar: true,
                cor: 'green'
            })
        }
        else {
            setMsgCadastro({
                msg: 'Erro ao cadastrar propaganda!',
                mostrar: true,
                cor: 'red'
            })
        }  

        setTimeout(function() { 
            Array.from(document.querySelectorAll("input")).forEach(
                input => (input.value = "")
            );
        }, 2000);
    };

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
                    <FormControl required={true} sx={{mb: 3, marginTop: '20px'}}> 
                        <InputLabel sx={{color:'#000'}} htmlFor='input-nome-anuncio'>Nome do anúncio:</InputLabel>
                        <Input
                            className='superuser'
                            onChange={handleInputs}
                            // onBlur={handleBlur}
                            id="input-nome-anuncio" 
                            aria-describedby="input-your-name" 
                        />
                        <FormHelperText id='my-helper-input-nome-anuncio'></FormHelperText>
                    </FormControl>

                    {/* EMPRESA DO ANUNCIO INPUT */}
                    <FormControl required={true} sx={{mb: 3}}>
                        <InputLabel sx={{color:'#000'}} htmlFor='input-empresa-anuncio'>Empresa do Anúncio:</InputLabel>
                        <Input
                            className='superuser'
                            onChange={handleInputs}
                            // onBlur={handleBlur} 
                            id="input-empresa-anuncio" 
                            aria-describedby="input-your-name" 
                        />
                        <FormHelperText id='my-helper-empresa-anuncio'></FormHelperText>
                    </FormControl>

                    {/* IMAGEM ANUNCIO INPUT */}
                    <FormControl required={true} sx={{mb: 3}}>
                        <InputLabel sx={{color:'#000'}} htmlFor='input-imagem-anuncio'>Imagem do Anúncio:</InputLabel>
                        <Input
                            className='superuser'
                            onChange={handleInputs}
                            // onBlur={handleBlur}
                            id="input-imagem-anuncio" 
                            aria-describedby="input-your-name" 
                        />
                        <FormHelperText id='my-helper-input-anuncio'></FormHelperText>
                    </FormControl>

                    {/* BOTAO SUBMIT */}
                    <Button onClick={handleSubmit} variant="contained" className='superuser-button-primary' sx={{marginTop: '130px'}}>
                        Confirmar
                    </Button>

                    {/* BOTAO VOLTAR */}
                    <Button onClick={() => setOpcao('')}
                        variant="contained" className='superuser-button-secondary'>
                        Voltar
                </Button>

                <Typography 
                    sx={{
                        display: msgCadastro.mostrar !== '' ? 'block' : 'none',
                        mt: 3, mb: 8, mx: "auto", fontSize: `14px`, color: msgCadastro.cor
                    }}
                >
                    {msgCadastro.msg}
                </Typography>
            </Stack>
        </div>
    </Box>

    );
};