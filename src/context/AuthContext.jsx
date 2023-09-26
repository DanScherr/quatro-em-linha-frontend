import * as React from 'react';
import { createContext } from "react";
import axios from 'axios';
import Cookies from 'js-cookie';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [auth, setAuth] = React.useState(false);

    const ValidateLogin = async () => {
        const authToken = Cookies.get('authToken');
        console.log(`usario validado:`, authToken);

        try {
            let data = [];
            const response = await axios.get(
                `/api/v1/test`,
                {mode: 'no-cors'}
            );
            if (response.status === 200 && response.data.status === true) {
                data = response.data.dados;
            };
        } catch (error) {
            console.error(error);
        };
    };

    const [opcao, setOpcao] = React.useState('');

    return <AuthContext.Provider
        value={{
            auth: auth,
            setAuth,
            ValidateLogin,
            opcao: opcao,
            setOpcao
        }}
    >
        {children}
    </AuthContext.Provider>
};

export default AuthContext;