//@ts-check
/** State */
import React, { useContext } from 'react';
/** MUI */
import { 
    Box,
    Paper
} from '@mui/material';
import MultiplayerContext from '../../../../context/MultiplayerContext';


export default function SharedLayoutFooter( ) {
    const {
        timer
    } = useContext(MultiplayerContext)

    return(
        <>
            <Box sx={{
                color: 'primary.lightMain', 
                bgcolor: 'background.footBox', 
                boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
                height: '40px',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            >
                <Paper sx={{
                    display: 'block', width: '70px',
                    height: '35px', lineHeight: '35px',
                    mx: '48.3%', mt: '5px',
                    textAlign: 'center', fontSize: '18px'
                }}> {timer} </Paper>
            </Box>
        </>
    );
};