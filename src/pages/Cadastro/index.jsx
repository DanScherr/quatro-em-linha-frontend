import { Box, Button, FormControl, FormHelperText, Input, InputLabel, Stack, Typography } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import AuthContext from "../../context/AuthContext";
import { useContext, useEffect, useState } from "react";
import { validaNome, validaEmail, validaSenha } from "../../bin/ValidaInputs";

export default function Cadastro( ) {
    // VARIAVEIS DE CONTEXTO GLOBAL DE AUTENTICACAO
    const {
        setOpcao,
        cadastro,
        RealizaCadastro,
    } = useContext(AuthContext);

    // VARIAVEIS DO FORMULARIO
    const [formComponents, setFormComponents] = useState({
        nome: {
            value: '',
            error: false,
            helperText: '',
            color: 'primary'
        },
        email: {
            value: '',
            error: false,
            helperText: '',
            color: 'primary'
        },
        senha: {
            value: '',
            error: false,
            helperText: '',
            color: 'primary'
        },
    });

    // LIDA COM OS INPUTS
    const handleInputs = (e) => {
        e.preventDefault();
        switch (e.target.id) {
            case 'input-nome':
                setFormComponents(prevVaules => {
                    return {
                        ...prevVaules, // atualiza apenas item abaixo
                        nome: {
                            value: e.target.value
                        }
                    }
                });
                break;

            case 'input-email':
                setFormComponents(prevVaules => {
                    return {
                        ...prevVaules, // atualiza apenas o item abaixo
                        email: {
                            value: e.target.value
                        }
                    }
                });
                break;

            case 'input-senha':
                setFormComponents(prevVaules => {
                    return {
                        ...prevVaules, // atualiza apenas o item abaixo
                        senha: {
                            value: e.target.value
                        }
                    }
                });
                break;
        
            default:
                break;
        }
    };

    // LIDA COM O SUBMIT
    const [tentouCadastrar, setTentouCadastrar] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formComponents.nome.error && !formComponents.email.error && !formComponents.senha.error ){
            RealizaCadastro(
                formComponents.nome.value,
                formComponents.email.value,
                formComponents.senha.value
            );
            setTentouCadastrar(true);
        }
    };

    
    // LIDA COM O BLUR
    const handleBlur = (e) => {
        e.preventDefault();
        
        switch (e.target.id) {
            case 'input-nome':
                let nomeError = validaNome(e.target.value);
                console.log(e.target.value);
                if (nomeError != null)
                {
                    setFormComponents(prevVaules => {
                        return {
                            ...prevVaules, // atualiza apenas item abaixo
                            nome: {
                                error: true,
                                helperText: nomeError,
                                color: 'danger'
                            }
                        }
                    });
                }
                break;

                case 'input-email':
                    let emailError = validaEmail(e.target.value);
                    console.log(e.target.value);
                    if (emailError != null)
                    {
                        setFormComponents(prevVaules => {
                            return {
                                ...prevVaules, // atualiza apenas o item abaixo
                                email: {
                                    error: true,
                                    helperText: emailError,
                                    color: 'danger'
                                }
                            }
                        });
                    }
                    break;
    
                case 'input-senha':
                    let senhaError = validaSenha(e.target.value);
                    console.log(e.target.value);
                    if (senhaError != null)
                    {
                        setFormComponents(prevVaules => {
                            return {
                                ...prevVaules, // atualiza apenas o item abaixo
                                senha: {
                                    error: true,
                                    helperText: senhaError,
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


    // EFEITO QUE RODA NO MOMENTO QUE AS VARIAVEIS MUDAM
    useEffect(() => {
        console.log('Input de nome: ', formComponents.nome.value)
    }, [formComponents.nome.value])
    useEffect(() => {
        console.log('Input de email: ', formComponents.email.value)
    }, [formComponents.email.value])
    useEffect(() => {
        console.log('Input de senha: ', formComponents.senha.value)
    }, [formComponents.senha.value])

    // GERA MSG SE LOGIN FOR SUCESSO OU FALHA
    const [msgCadastro, setMsgCadastro] = useState(false);

    useEffect(() => {
        if (!cadastro.loading && !cadastro.cadastro && tentouCadastrar)
            setMsgCadastro(true);
    }, [cadastro]);

    return (
        <Box
            component='form'
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
            autoComplete="off"
            noValidate
        >
            {
                cadastro.loading // se o submit estiver carregando..
                ?
                // CARREGAMENTO
                <CircularProgress sx={{position: 'fixed', top: '46%', left: '46%'}}/>
                
                :
                // FORMULARIO DE CADASTRO
                <Stack>
                    {/* TITULO */}
                    <Typography sx={{my: 2, mx: "auto", fontSize: `23px`, color: 'primary.main'}}>
                        CADASTRO
                    </Typography>

                    {/* NOME INPUT */}
                    <FormControl error={formComponents.nome.error} required={true} sx={{mb: 3}}> 
                        <InputLabel htmlFor='input-nome'>Nome:</InputLabel>
                        <Input 
                            onChange={handleInputs}
                            onBlur={handleBlur}
                            id="input-nome" 
                            aria-describedby="input-your-name" 
                        />
                        <FormHelperText id='my-helper-input-nome'>{formComponents.nome.helperText}</FormHelperText>
                    </FormControl>

                    {/* EMAIL INPUT */}
                    <FormControl error={formComponents.email.error} required={true} sx={{mb: 3}}>
                        <InputLabel htmlFor='input-email'>Email:</InputLabel>
                        <Input
                            onChange={handleInputs}
                            onBlur={handleBlur} 
                            id="input-email" 
                            aria-describedby="input-your-name" 
                        />
                        <FormHelperText id='my-helper-input-email'>{formComponents.email.helperText}</FormHelperText>
                    </FormControl>

                    {/* SENHA INPUT */}
                    <FormControl error={formComponents.senha.error} required={true} sx={{mb: 3}}>
                        <InputLabel htmlFor='input-senha'>Senha:</InputLabel>
                        <Input 
                            type="password"
                            onChange={handleInputs}
                            onBlur={handleBlur}
                            id="input-senha" 
                            aria-describedby="input-your-name" 
                        />
                        <FormHelperText id='my-helper-input-senha'>{formComponents.senha.helperText}</FormHelperText>
                    </FormControl>
                    
                    {/* BOTAO SUBMIT */}
                    <Button onClick={handleSubmit} variant="outlined" sx={{my: 0.2}}>
                        Submit
                    </Button>

                    {/* BOTAO VOLTAR */}
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

                <Typography 
                    sx={{
                        display: msgCadastro ? 'block' : 'none',
                        mt: 3, mb: 8, mx: "auto", fontSize: `14px`, color: '#f44336'
                    }}
                >
                    {'Cadastro falhou! Tente novamente.'}
                </Typography>
            </Stack>
            }
        </Box>
    );
};