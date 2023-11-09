import { CardContent, Grid, Tooltip, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../../../../context/AuthContext";
import { ModalCarteira } from "./components/ModalCarteira";
import AddIcon from '@mui/icons-material/Add';

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
        <CardContent sx={{height: '50px', pl: 0, pt: 0, pb: 2}}>
            <Grid container columnSpacing={5} sx={{width: '400px'}}>
                <Grid item xs={0} md={3} ml={0} sx={{width: '300px'}}>
                    <ModalCarteira mostrar={openFicha} setMostrar={setOpenFicha} />
                    <Tooltip followCursor arrow title={`Comprar moedas`} placement="top">
                        <Button alignContent='center' onClick={() => setOpenFicha(true)}>
                            <MonetizationOnIcon fontSize='large' sx={{color: '#FADB37', display: 'inline'}}/>
                            <Typography variant="span" sx={{display: 'inline', ml: 1, color: '#B8B2B8'}}>
                                {`${carteira},00`}
                            </Typography>
                            <AddIcon fontSize='large' sx={{
                                    color: 'primary.main', display: 'inline',
                                    border: '1px solid #d500f9',
                                    borderRadius: 2,
                                    ml: 2
                                }} />
                        </Button>
                    </Tooltip>
                </Grid>
            </Grid>
        </CardContent>
    )
}