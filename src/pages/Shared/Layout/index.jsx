import { Grid } from "@mui/material";
import SharedLayoutFooter from "./components/Footer";
import SharedLayoutHeader from "./components/Header";
import { Outlet } from "react-router-dom";
import "./index.css"
import Regras from "./components/Regras";
import Monetizacao from "./components/Monetizacao";

export default function SharedLayout(  ) {
    return (
        <div className="container">
            <SharedLayoutHeader />
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