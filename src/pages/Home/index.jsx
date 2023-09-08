import React from "react";
import { Button } from "@mui/material";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import Game from "../Game";
import { useNavigate } from "react-router-dom";

export default function Home(  ) {
    const navigate = useNavigate();

    const navegarPara = () => navigate('/jogar');

    return (
        <>

                <Button onClick={navegarPara}
                sx={{
                    position: 'absolute',
                    top: '57%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 500,
                    height: 500,
                    bgcolor: 'background.paper',
                    border: '2px solid #000',
                    boxShadow: 24,
                    p: 4,
                    borderRadius: 40,
                    '&:hover': {
                        color: 'font.main',
                        opacity: '80%',
                    }
                }}
                >
                    <PlayCircleIcon sx={{fontSize: 200,
                        '&:hover': {
                            color: 'font.main',
                            opacity: '80%',
                    }}} />
                </Button>

            <Game />
        </>
        
    );
};