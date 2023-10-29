import { CardContent, Grid, Typography } from "@mui/material";
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

    const [open, setOpen] = useState(false)

    return (
        <CardContent sx={{height: '80px', pl: 5}}>
            <Grid container columnSpacing={5} sx={{width: '400px'}}>
                <Grid xs={0} md={3} ml={5} sx={{width: '300px'}}>
                    <Button alignContent='center' onClick={() => setOpen(true)}>
                        <MonetizationOnIcon fontSize='large' sx={{color: '#FADB37', display: 'inline'}}/>
                        <Typography sx={{display: 'inline', ml: 1, color: '#B8B2B8'}}>
                            {carteira}
                        </Typography>
                    </Button>
                </Grid>
                <Grid xs={0} md={3} ml={5} sx={{width: '300px'}}>
                    <Button alignContent='center'>
                        <WorkspacePremiumIcon fontSize='large' sx={{color: '#FFFFFF'}}/>
                        <Typography sx={{display: 'inline', ml: 1, color: '#B8B2B8'}}>
                            Ranking 
                        </Typography>
                    </Button>
                </Grid>
            </Grid>
            <ModalCarteira mostrar={open} setMostrar={setOpen} />
        </CardContent>
    )
}