import React, { useContext, useState } from "react";
import { Box, Button } from "@mui/material";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import Game from "../Game";
// import { useNavigate } from "react-router-dom";
// import {Modal} from "@mui/material";
import MultiplayerContext from "../../context/MultiplayerContext";
import icon from './../../static/images/icon/logo192.png'


export default function Home(  ) {
    const [open, setOpen] = useState(true)

    const {
        iniciandoSocket
    } = useContext(MultiplayerContext)

    const onClickFunction = () => {
        setOpen(false);
        iniciandoSocket();
    }

    return (
        <>
        { 
        open ?
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
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
                <Button 
                    onClick={() => onClickFunction()}
                    sx={{
                        borderRadius: 50,
                        position: 'absolute',
                        top: '25%',
                        left: '27%',
                    }}
                >
                    <PlayCircleIcon sx={{fontSize: 200,
                        '&:hover': {
                            color: 'font.emphasis',
                            opacity: '80%',
                    }}} />
                </Button>
            </Box>
        :
            <Game />
        }   
        </>
        
    );
};