import { CardContent, Grid, Tooltip, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../../../../context/AuthContext";
import { ModalCarteira } from "./components/ModalCarteira";

export default function MoneyRanking( {} ) {
    const {
        ConsultaCarteira,
        carteira
    } = useContext(AuthContext);

    useEffect(() => {
        ConsultaCarteira();
    }, []);

    useEffect(() => {
        console.log('Carteira no componente:', carteira)
    }, [carteira]);

    const [openFicha, setOpenFicha] = useState(false)

    return (
        <CardContent sx={{height: '80px', pl: 5}}>
            <Grid container columnSpacing={5} sx={{width: '400px'}}>
                <Grid item xs={0} md={3} ml={0} sx={{width: '300px'}}>
                    <ModalCarteira mostrar={openFicha} setMostrar={setOpenFicha} />
                    <Tooltip followCursor arrow title={`Moedas`} placement="top">
                        <Button alignContent='center' onClick={() => setOpenFicha(true)}>
                            <MonetizationOnIcon fontSize='large' sx={{color: '#FADB37', display: 'inline'}}/>
                            <Typography variant="span" sx={{display: 'inline', ml: 1, color: '#B8B2B8'}}>
                                {carteira}
                            </Typography>
                        </Button>
                    </Tooltip>
                </Grid>
            </Grid>
            
        </CardContent>
    )
}