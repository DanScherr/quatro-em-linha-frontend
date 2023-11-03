import React from "react";
import { Card, CardContent, List, ListItem, ListItemText, Typography } from "@mui/material";
import LabelIcon from '@mui/icons-material/Label';

export default function Sobre(  ) {
    
    return (
        <Card sx={{
            height: '605px', m: 2, 
            backgroundColor: 'background.card',
            borderRadius: 5,
            mt: 11.6,
        }}>
            <CardContent>
                <Typography variant="span" sx={{
                    textAlign: 'center', fontSize: '25px',
                    color: 'primary.lightMain', fontWeight: '700'
                }}>
                    Regras
                </Typography>

                <Card sx={{
                    height: '100%', m: 2, display: 'block', 
                    borderRadius: 5
                }}>
                    <CardContent sx={{p: 2}}>
                        <List
                            sx={{
                                width: '100%',
                                // maxWidth: 360,
                                position: 'relative',
                                overflow: 'auto',
                                maxHeight: 450,
                                '& ul': { padding: 0 },
                                my: 'auto'
                            }}
                        >
                            {regrasDoJogo.map((item, i) => {
                                return (
                                    <ListItem key={`RegraTextoLista-${i}`}>
                                        <ListItemText
                                            primary={
                                                <React.Fragment>
                                                    <LabelIcon sx={{display: 'inline', mr: 1, fontWeight: 700}} />
                                                    {`nº ${i + 1}`}
                                                </React.Fragment>
                                            }
                                            secondary={
                                                <React.Fragment>
                                                    <Typography variant="span" sx={{textAlign: 'justify'}}>
                                                        {item}
                                                    </Typography>
                                                    
                                                </React.Fragment>
                                            }
                                        />
                                    </ListItem>
                                )
                            })}
                        </List>
                    </CardContent>
                </Card>
            </CardContent>
        </Card>
    )
}

const regrasDoJogo = [
    ' Joga-se sempre entre 2 jogadores e sobre um tabuleiro de 7x6 espaços.',
    'Em cada turno cada jogador coloca uma ficha da sua cor numa coluna e esta se posiciona na primeira casa disponível.',
    'Cada turno tem 15 segundos.',
    'O que conseguir colocar 4 fichas da mesma cor seguidas na horizontal, vertical ou diagonal ganha.',
    'Se ninguém conseguir a partida termina em empate.'
];