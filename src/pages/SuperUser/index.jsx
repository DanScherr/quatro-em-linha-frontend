import { Grid, Modal, Button } from '@mui/material'
import React from 'react';

const BACKGROUND_STYLE = {
  position: 'fixed',
  top: '0',
  bottom: '0',
  left: '0',
  right: '0',
  backgroundColor: 'rgb(255, 255, 255, 0.7)',
  zIndex: '1005'
}

const MODAL_STYLE = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'rgba(255, 255, 255, 0.6)',
  width: '500px',
  height: '500px',
  borderRadius: '21px'
}

const TITLE_STYLE = {
  textAlign: 'center',
  marginTop: '30px',
  color: 'rgba(0, 0, 0, 1)',
  fontFamily: 'Roboto',
  fontSize: '55px',
  fontWeight: 700,
  lineHeight: '55px',
  letterSpacing: '0em',
  textAlign: 'center'
}

export default function ModalResultado() {
    const resolveClick = () => {
        console.log('botao')
    };

    return (
      <Modal open={true} style={BACKGROUND_STYLE}>
        <div style={MODAL_STYLE}>
          <div style={TITLE_STYLE}>
            UM TITULO
          </div>

          {/* Button */}
          <Grid container justifyContent={'center'}>
                <Grid item xs={4.3}>
                    <Button
                        onClick={resolveClick}
                        variant='contained' 
                        sx={{
                            mx: 'auto', 
                            color: 'font.emphasis'
                        }}
                    >
                        Botao
                    </Button>
                </Grid>
            </Grid>
        </div>
      </Modal>
    );
};