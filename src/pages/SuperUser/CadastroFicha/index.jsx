import { Box, Button, FormControl, FormHelperText, Input, InputLabel, Stack, Typography } from '@mui/material'
import React from 'react';
import '../SuperUser.css';
import { useContext, useState} from "react";
import AuthContext from "../../../context/AuthContext";
import { validaValor } from "../../../bin/ValidaInputs";

export default function CadastroFicha() {
    const {
        setOpcao,
        CadastraTema
    } = useContext(AuthContext);

// VARIAVEIS DO FORMULARIO
const [formComponents, setFormComponents] = useState({
    nome: {
        value: '',
        error: false,
        helperText: '',
        color: 'primary'
    },
    descricao: {
        value: '',
        error: false,
        helperText: '',
        color: 'primary'
    },
    categoria: {
        value: '',
        error: false,
        helperText: '',
        color: 'primary'
    },
    imagem: {
        value: '',
        error: false,
        helperText: '',
        color: 'primary'
    },
    valor: {
        value: '',
        error: false,
        helperText: '',
        color: 'primary'
    }
});

// LIDA COM OS INPUTS
const handleInputs = (e) => {
    e.preventDefault();
    switch (e.target.id) {
        case 'input-nome-tema':
            setFormComponents(prevVaules => {
                return {
                    ...prevVaules, // atualiza apenas o item abaixo
                    nome: {
                        value: e.target.value
                    }
                }
            });
            break;

        case 'input-descricao-tema':
            setFormComponents(prevVaules => {
                return {
                    ...prevVaules, // atualiza apenas o item abaixo
                    descricao: {
                        value: e.target.value
                    }
                }
            });
            break;

        case 'input-categoria-tema':
            setFormComponents(prevVaules => {
                return {
                    ...prevVaules, // atualiza apenas o item abaixo
                    categoria: {
                        value: e.target.value
                    }
                }
            });
            break;

        case 'input-imagem-tema':
            setFormComponents(prevVaules => {
                return {
                    ...prevVaules, // atualiza apenas o item abaixo
                    imagem: {
                        value: e.target.value
                    }
                }
            });
            break;
        
        case 'input-valor-tema':
            setFormComponents(prevVaules => {
                return {
                    ...prevVaules, // atualiza apenas o item abaixo
                    valor: {
                        value: e.target.value
                    }
                }
            });
            break;

        default:
            break;
    };
};

const handleBlur = (e) => {
    e.preventDefault();
    
    switch (e.target.id) {
        case 'input-valor-tema':
            let valorError = validaValor(e.target.value);
            
            if (valorError != null)
            {
                setFormComponents(prevVaules => {
                    return {
                        ...prevVaules,
                        valor: {
                            error: true,
                            helperText: valorError,
                            color: 'danger'
                        }
                    }
                });
            }
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
    if (!formComponents.valor.error) {
        let temaSucesso = CadastraTema(
            formComponents.nome.value,
            formComponents.descricao.value,
            formComponents.categoria.value,
            formComponents.imagem.value,
            formComponents.valor.value
            );

        if (temaSucesso){
            setMsgCadastro({
                msg: 'Tema cadastrado com sucesso!',
                mostrar: true,
                cor: 'green'
            })
        }
        else {
            setMsgCadastro({
                msg: 'Erro ao cadastrar tema!',
                mostrar: true,
                cor: 'red'
            })
        }  

        setTimeout(function() { 
            Array.from(document.querySelectorAll("input")).forEach(
                input => (input.value = "")
            );
        }, 2000);
    }
};

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
                    <FormControl sx={{mb: 3, marginTop: '5px'}} required={true}> 
                        <InputLabel sx={{color:'#000'}} htmlFor='input-nome-tema'>Nome do Tema:</InputLabel>
                        <Input sx={{color:'#000'}}
                            className='superuser'
                            onChange={handleInputs}
                            // onBlur={handleBlur}
                            id="input-nome-tema" 
                            aria-describedby="input-your-name" 
                        />
                        <FormHelperText id='my-helper-input-nome-tema'></FormHelperText>
                    </FormControl>

                    {/* DESCRIÇÃO TEMA INPUT */}
                    <FormControl sx={{mb: 3}} required={true}>
                        <InputLabel sx={{color:'#000'}} htmlFor='input-descricao-tema'>Descrição do Tema:</InputLabel>
                        <Input sx={{color:'#000'}}
                            className='superuser'
                            onChange={handleInputs}
                            // onBlur={handleBlur} 
                            id="input-descricao-tema" 
                            aria-describedby="input-your-name" 
                        />
                        <FormHelperText id='my-helper-descricao-tema'></FormHelperText>
                    </FormControl>

                    {/* CATEGORIA TEMA INPUT */}
                    <FormControl className='superuser' required={true} sx={{mb: 3}}>
                        <InputLabel sx={{color:'#000'}} htmlFor='input-categoria-tema'>Categoria do Tema:</InputLabel>
                        <Input sx={{color:'#000'}}
                            className='superuser MuiInput-root'
                            onChange={handleInputs}
                            // onBlur={handleBlur}
                            id="input-categoria-tema" 
                            aria-describedby="input-your-name" 
                        />
                        <FormHelperText id='my-helper-input-senha'></FormHelperText>
                    </FormControl>

                    {/* IMAGEM TEMA INPUT */}
                    <FormControl required={true} sx={{mb: 3}}>
                        <InputLabel sx={{color:'#000'}} htmlFor='input-imagem-tema'>Imagem do Tema:</InputLabel>
                        <Input sx={{color:'#000'}}
                            className='superuser'
                            onChange={handleInputs}
                            // onBlur={handleBlur}
                            id="input-imagem-tema" 
                            aria-describedby="input-your-name" 
                        />
                        <FormHelperText id='my-helper-input-senha'></FormHelperText>
                    </FormControl>

                    {/* VALOR TEMA INPUT */}
                    <FormControl error={formComponents.valor.error} required={true} sx={{mb: 3}}>
                        <InputLabel sx={{color:'#000'}} htmlFor='input-valor-tema'>Valor do Tema em moedas do jogo:</InputLabel>
                        <Input sx={{color:'#000'}}
                            className='superuser'
                            type="number"
                            onChange={handleInputs}
                            onBlur={handleBlur}
                            id="input-valor-tema" 
                            aria-describedby="input-your-name" 
                        />
                        <FormHelperText id='my-helper-input-cotacao'>{formComponents.valor.helperText}</FormHelperText>
                    </FormControl>
                    
                    {/* BOTAO SUBMIT */}
                    <Button onClick={handleSubmit} variant="contained" className='superuser-button-primary'>
                        Confirmar
                    </Button>

                    {/* BOTAO VOLTAR */}
                    <Button onClick={() => setOpcao('')} 
                        variant="contained" 
                        className='superuser-button-secondary'>
                        Voltar
                </Button>

                <Typography 
                    sx={{
                        display: msgCadastro.mostrar != '' ? 'block' : 'none',
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