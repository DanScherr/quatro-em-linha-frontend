import { useContext, useEffect } from "react"
import AuthContext from "../../context/AuthContext";
import PortaUsuario from "../PortaUsuario";
import SuperUser from "../SuperUser";

export default function Auth( {children} ) {
    const {
        ValidaCookie,
        auth,
        userId,
        isAdmin,
    } = useContext(AuthContext);

    useEffect(() => {
        ValidaCookie();
    }, [])

    return (
        <>
            {
                auth ? 
                    isAdmin ?
                    <SuperUser />
                    : children
                : <PortaUsuario />
            }
        </>
    )
}

// <Route path="/super-user" element={<SuperUser />} />