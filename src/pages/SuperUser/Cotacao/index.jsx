import { Box, Button, FormControl, FormHelperText, Input, InputLabel, Stack, Typography } from '@mui/material'
import React from 'react';
import '../SuperUser.css';
import { useContext, useState } from "react";
import AuthContext from "../../../context/AuthContext";
import { validaValor } from "../../../bin/ValidaInputs";


export default function CadastroPropaganda() {
    const {
        setOpcao,
        atualizaCotacao
    } = useContext(AuthContext);

    // VARIAVEIS DO FORMULARIO
    const [formComponents, setFormComponents] = useState({
        cotacao: {
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
            case 'input-valor-cotacao':
                setFormComponents(prevVaules => {
                    return {
                        ...prevVaules, // atualiza apenas o item abaixo
                        cotacao: {
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
            case 'input-valor-cotacao':
                let cotacaoError = validaValor(e.target.value);
                
                if (cotacaoError != null)
                {
                    setFormComponents(prevVaules => {
                        return {
                            ...prevVaules,
                            cotacao: {
                                error: true,
                                helperText: cotacaoError,
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
        if (!formComponents.cotacao.error) {
            let cotacaoSucesso = atualizaCotacao(formComponents.cotacao.value);

            if (cotacaoSucesso){
                setMsgCadastro({
                    msg: 'Cotação atualizada com sucesso!',
                    mostrar: true,
                    cor: 'green'
                })
            }
            else {
                setMsgCadastro({
                    msg: 'Erro ao atualizar cotação!',
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
                {/* // FORMULARIO DE CADASTRO DE PROPAGANDA*/}
                <Stack 
                    sx={{marginTop: '10px', marginLeft: '35px', marginRight: '35px', spacing:'6' }}>
                    {/* TITULO */}
                    <Typography className='superuser-title' >
                        ALTERAR COTAÇÃO
                    </Typography>

                    {/* VALOR DE 100 MOEDAS INPUT */}
                    <FormControl error={formComponents.cotacao.error} required={true} sx={{mb: 3, marginTop: '80px'}}>
                        <InputLabel sx={{color:'#000'}} htmlFor='input-valor-cotacao'>Valor de 100 moedas do jogo em R$:</InputLabel>
                        <Input 
                            className='superuser'
                            type="number"
                            step="1"
                            onChange={handleInputs}
                            onBlur={handleBlur}
                            id="input-valor-cotacao" 
                            aria-describedby="input-your-name" 
                        />
                        <FormHelperText id='my-helper-input-cotacao'>{formComponents.cotacao.helperText}</FormHelperText>
                    </FormControl>
                    
                    {/* BOTAO SUBMIT */}
                    <Button onClick={handleSubmit} variant="contained" className='superuser-button-primary' sx={{marginTop: '220px'}}>
                        Confirmar
                    </Button>

                    {/* BOTAO VOLTAR */}
                    <Button onClick={() => setOpcao('')}
                        variant="contained" className='superuser-button-secondary' >
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