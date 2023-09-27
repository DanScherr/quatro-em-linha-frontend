import * as React from 'react';
import { createContext } from "react";
import axios from 'axios';
import Cookies from 'js-cookie';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [opcao, setOpcao] = React.useState('');
    const [cookieAuth, setCookieAuth] = React.useState(false);

    const ValidaCookie = () => {
        const authToken = Cookies.get('authToken');

        if (authToken) setAuth(true);
        // else ValidateLogin(); // buscando dados do DB
    };

    const [cadastro, setCadastro] = React.useState({loading: false, cadastro: false});

    const RealizaCadastro = async (nome, email, senha) => {
        setCadastro(prev => {return {loading: true, cadastro: false}});
        console.log('Realizando cadastro')
        try {
            let data = [];
            const response = await axios.post(
                `/api/v1/usuario`,
                {
                    nome: nome,
                    email: email,
                    senha: senha
                },
                {mode: 'no-cors'}
            );
            if (response.status === 201 && response.data.status === true) {
                setOpcao('login');
                setCadastro(prev => {return {loading: false, cadastro: true}});
            };
            console.log(response)
            
        } catch (error) {
            console.error(error);
        };
    };

    const [auth, setAuth] = React.useState(false);

    

    return <AuthContext.Provider
        value={{
            auth: auth,
            setAuth,
            // ValidateLogin,
            opcao: opcao,
            setOpcao,
            cookieAuth,
            setCookieAuth,
            ValidaCookie,
            cadastro,
            RealizaCadastro
        }}
    >
        {children}
    </AuthContext.Provider>
};

export default AuthContext;