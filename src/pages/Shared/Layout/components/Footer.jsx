//@ts-check
/** State */
import React, { useContext } from 'react';
/** MUI */
import { 
    Box,
    Grid,
    Paper
} from '@mui/material';
import MultiplayerContext from '../../../../context/MultiplayerContext';
import TimerIcon from '@mui/icons-material/Timer';
import './Footer.css'


export default function SharedLayoutFooter( ) {
    const {
        stopWatch,
        myTurn,
        myChosenTheme,
        vsChosenTheme,
        vencedorState,
        empateState,
        loserState
    } = useContext(MultiplayerContext);

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
                <Grid container justifyContent={'center'} alignContent={'center'}>
                    <Grid item xs={0.15} alignContent={'flex-end'}>
                        &#32;
                    </Grid>
                    <Grid item xs={0.3} alignContent={'flex-end'}>
                        <TimerIcon className={myTurn 
                        &&(myChosenTheme !== 'grey' && myChosenTheme !== '')&&vsChosenTheme!==''
                        &&!vencedorState&&!empateState&&!loserState
                        ? 'blink' : ''} sx={{mt: 1, display: {xs: 'none', md: 'none', lg: 'flex'}}}
                        />
                    </Grid>
                    <Grid item xs={0.9}>
                        <Paper sx={{
                            display: 'inline-block', width: '100px',
                            height: '35px', lineHeight: '35px',
                            mt: '1px',
                            textAlign: 'center', fontSize: '18px'
                        }}> {stopWatch} </Paper>
                    </Grid>
                    <Grid item xs={0.001} alignContent={'flex-end'}>
                        &#32;
                    </Grid>
                    <Grid item xs={0.3} alignContent={'flex-end'}>
                        <TimerIcon className={myTurn 
                        &&(myChosenTheme !== 'grey' && myChosenTheme !== '')&&vsChosenTheme!==''
                        &&!vencedorState&&!empateState&&!loserState
                        ? 'blink' : ''} sx={{mt: 1, display: {xs: 'none', md: 'none', lg: 'flex'}}}
                        />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};