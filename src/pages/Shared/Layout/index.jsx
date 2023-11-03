import * as React from 'react';
import { AlertTitle, Grid } from "@mui/material";
import SharedLayoutFooter from "./components/Footer";
import SharedLayoutHeader from "./components/Header";
import { Outlet } from "react-router-dom";
import "./index.css"
import Regras from "./components/Regras";
import Monetizacao from "./components/Monetizacao";
// import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import MoneyRanking from './components/MoneyRank/MoneyRanking';
import AuthContext from '../../../context/AuthContext';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SharedLayout(  ) {
    const {openNotificacao, setOpenNotificacao} = React.useContext(AuthContext);

    const handleClick = () => {
        setOpenNotificacao(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }
        setOpenNotificacao(false);
    };


    return (
        <div className="container">
            {/* Header */}
            <SharedLayoutHeader />
            
            {/* Notificacao */}
            <Snackbar 
                open={openNotificacao.open} 
                autoHideDuration={3000} 
                onClose={() => setOpenNotificacao((prev)=>({...prev, open:false}))}
                sx={{
                    position: "absolute",
                    top: -600,
                    left: '100%',
                    display: 'flex'
                }}
            >
                <Alert 
                    onClose={() => setOpenNotificacao(false)} 
                    severity={openNotificacao.severity} 
                    sx={{ width: '100%' }}
                >
                    {openNotificacao.msg}
                </Alert>
            </Snackbar>

            {/* Conteudo */}
            <Grid container columnSpacing={{sm: 2}}
                sx={{justifyContent: 'center', alignContent: 'center'}}
            >
                <Grid item xs={0} md={3} className="ShareLayoutGrid">
                    <Regras />
                </Grid>
                <Grid item xs={6} md={6} minWidth={'600px'} className="ShareLayoutGrid">
                    <Outlet />
                </Grid>
                <Grid item xs={0} md={3} className="ShareLayoutGrid">
                    <MoneyRanking />
                    <Monetizacao />
                </Grid>
            </Grid>

            {/* Footer */}
            <div className="fixed-bottom">
                <SharedLayoutFooter />
            </div>
        </div>
    );
};