import { useContext, useEffect } from "react"
import AuthContext from "../../context/AuthContext";
import PortaUsuario from "../PortaUsuario";

export default function Auth( {children} ) {
    const {
        ValidaCookie,
        auth,
    } = useContext(AuthContext);

    useEffect(() => {
        ValidaCookie();
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