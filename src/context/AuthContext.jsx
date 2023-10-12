import * as React from 'react';
import { createContext } from "react";
import axios from 'axios';
import Cookies from 'js-cookie';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [auth, setAuth] = React.useState(false);
    const [opcao, setOpcao] = React.useState('');
    const [cookieAuth, setCookieAuth] = React.useState(false);

    const ValidaCookie = () => {
        const authToken = Cookies.get('authToken');
        const loginId = Cookies.get('userId');

        if (authToken) {
            setAuth(true);
            setUserId(loginId);
        }
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
            }
            
        } catch (error) {
            setCadastro(prev => {return {loading: false, cadastro: false}});
            console.error(error);
        };
    };

    const [login, setLogin] = React.useState({loading: false, login: false});
    const [userId, setUserId] = React.useState(null);

    const RealizaLogin = async (email, senha) => {
        setLogin(prev => {return {loading: true, login: false}});
        console.log('Realizando login..')
        try {
            const response = await axios.post(
                `/api/v1/login`,
                {
                    email: email,
                    senha: senha
                },
                {mode: 'no-cors'}
            );
            if (response.status === 200 && response.data.status === true) {
                setLogin(prev => {return {loading: false, login: true}});
                setUserId(response.data.id);
                console.log(response)
                Cookies.set('authToken', true, { expires: 7 });
                Cookies.set('userId', response.data.id, { expires: 7 });
                ValidaCookie();
            };
            console.log(response)
            
        } catch (error) {
            console.error(error);
        };
    };

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
            RealizaCadastro,
            RealizaLogin,
            userId,
        }}
    >
        {children}
    </AuthContext.Provider>
};

export default AuthContext;