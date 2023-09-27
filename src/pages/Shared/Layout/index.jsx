import * as React from 'react';
import { Grid } from "@mui/material";
import SharedLayoutFooter from "./components/Footer";
import SharedLayoutHeader from "./components/Header";
import { Outlet } from "react-router-dom";
import "./index.css"
import Regras from "./components/Regras";
import Monetizacao from "./components/Monetizacao";
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SharedLayout(  ) {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }
        setOpen(false);
    };


    return (
        <div className="container">
            <SharedLayoutHeader />
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    This is a success message!
                </Alert>
            </Snackbar>
            <Grid container columnSpacing={{sm: 2}}
                sx={{justifyContent: 'center', alignContent: 'center'}}
            >
                <Grid xs={0} md={3} className="ShareLayoutGrid">
                    <Regras />
                </Grid>
                <Grid xs={6} md={6} minWidth={'600px'} className="ShareLayoutGrid">
                    <Outlet />
                </Grid>
                <Grid xs={0} md={3} className="ShareLayoutGrid">
                    <Monetizacao />
                </Grid>
            </Grid>
            <div className="fixed-bottom">
                <SharedLayoutFooter />
            </div>
        </div>
    );
};