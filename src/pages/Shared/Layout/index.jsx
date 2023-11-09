import * as React from 'react';
import { Box, Grid } from "@mui/material";
import SharedLayoutFooter from "./components/Footer";
import SharedLayoutHeader from "./components/Header";
import { Outlet } from "react-router-dom";
import "./index.css"
import Regras from "./components/Regras";
import Monetizacao from "./components/Monetizacao";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import MoneyRanking from './components/MoneyRank/MoneyRanking';
import AuthContext from '../../../context/AuthContext';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SharedLayout(  ) {
    const {openNotificacao, setOpenNotificacao} = React.useContext(AuthContext);

    return (
        <Grid container alignItems={'center'} height={'100vh'}>
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

            {/* Conteudo tela X-Grande */}
            <Grid container columnSpacing={{sm: 2}}
                sx={{
                    justifyContent: 'center', alignContent: 'center', verticalAlign: 'center', my: 'auto',
                    display: {xs: 'none', md: 'none', lg: 'none', xl: 'flex'}, width: '100%'
                }}
            >
                <Grid item lg={3} className="ShareLayoutGrid">
                    <Regras />
                </Grid>
                <Grid item lg={4} minWidth={'600px'} className="ShareLayoutGrid">
                    <Outlet />
                </Grid>
                <Grid item lg={3} className="ShareLayoutGrid">
                    <MoneyRanking />
                    <Monetizacao />
                    <Box sx={{height: '60px'}}/>
                </Grid>
            </Grid>

            {/* Conteudo tela Grande */}
            <Grid container 
                sx={{
                    justifyContent: 'center', alignContent: 'center', verticalAlign: 'center',
                    display: {xs: 'none', md: 'none', lg: 'flex', xl: 'none'}, width: '100%'
                }}
            >
                <Grid item lg={2.5} className="ShareLayoutGrid">
                    <Regras />
                </Grid>
                <Grid item lg={3.5} minWidth={'600px'} className="ShareLayoutGrid">
                    <Outlet />
                </Grid>
                <Grid item lg={2.5} className="ShareLayoutGrid">
                    <MoneyRanking />
                    <Monetizacao />
                    <Box sx={{height: '60px'}}/>
                </Grid>
            </Grid>

            {/* Conteudo tela Média */}
            <Grid container columnSpacing={{sm: 2}}
                sx={{
                    justifyContent: 'center', alignContent: 'center', verticalAlign: 'center', my: 'auto',
                    display: {xs: 'none', md: 'flex', lg: 'none'}, width: '100%'
                }}
            >
                <Grid item md={12} minWidth={'600px'} className="ShareLayoutGrid">
                    <Outlet />
                </Grid>
                <Grid item md={5} className="ShareLayoutGrid">
                    <MoneyRanking />
                    <Monetizacao />
                    <Box sx={{height: '80px'}}/>
                </Grid>
            </Grid>

            {/* Conteudo tela pequena */}
            <Grid container columnSpacing={{sm: 2}}
                sx={{
                    justifyContent: 'center', alignContent: 'center', verticalAlign: 'center', my: 'auto',
                    display: {xs: 'flex', md: 'none', lg: 'none'}
                }}
            >
                <Grid item xs={4} minWidth={'600px'} className="ShareLayoutGrid">
                    <Outlet />
                </Grid>
            </Grid>

            {/* Footer */}
            {/* <Box height={'50px'}>

            </Box> */}
            <div className="fixed-bottom mt-0">
                <SharedLayoutFooter />
            </div>
        </Grid>
    );
};