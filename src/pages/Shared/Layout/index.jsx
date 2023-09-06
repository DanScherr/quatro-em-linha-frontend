import { Grid } from "@mui/material";
import SharedLayoutFooter from "./components/Footer";
import SharedLayoutHeader from "./components/Header";
import { Outlet } from "react-router-dom";
import "./index.css"

export default function SharedLayout(  ) {
    return (
        <div className="container">
            <SharedLayoutHeader />
            <Grid container columnSpacing={{sm: 2}}
                sx={{justifyContent: 'center', alignContent: 'center'}}
            >
                <Grid xs={0} md={3} className="ShareLayoutGrid SharedLayoutGridRegras">
                    Regras
                </Grid>
                <Grid xs={6} md={6} className="ShareLayoutGrid SharedLayoutGridMain">
                    <Outlet />
                </Grid>
                <Grid xs={0} md={3} className="ShareLayoutGrid SharedLayoutGridBuy">
                    Buy
                </Grid>
            </Grid>
            <div className="fixed-bottom">
                <SharedLayoutFooter />
            </div>
        </div>
    )
}