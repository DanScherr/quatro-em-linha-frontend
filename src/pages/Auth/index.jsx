import { useContext, useEffect } from "react"
import AuthContext from "../../context/AuthContext";
import Cookies from "js-cookie";
import PortaUsuario from "../PortaUsuario";

export default function Auth( {children} ) {
    const {
        ValidateLogin,
        auth,
        setAuth
    } = useContext(AuthContext);

    useEffect(() => {
        Cookies.set('authToken', true, {expires: 7}) // setando cookie
        ValidateLogin(); // buscando dados do DB
        setAuth(false) // funçao de validaçao de usuario
    }, [])

    return (
        <>
            {
            auth ? 
                children
            : <PortaUsuario />
            }
        </>
    )
}