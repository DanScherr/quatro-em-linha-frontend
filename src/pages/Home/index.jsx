import { Card } from "@mui/material";
import Tabuleiro from "./components/Tabuleiro";

export default function Home(  ) {
    return (
        <Card sx={{
            height: '98%', m: 2, 
            backgroundColor: 'background.card',
            borderRadius: 5,
            p: 2
        }}>
            <Tabuleiro />
        </Card>
    );
};