import { Box, Grid, Modal, Typography, Button } from '@mui/material'
import { retornaGif } from "./ImportGifs";
import React, { useState } from 'react';
import { retornaAudio } from "./ImportAudios";

const BACKGROUND_STYLE = {
  position: 'fixed',
  top: '0',
  bottom: '0',
  left: '0',
  right: '0',
  backgroundColor: 'rgb(0, 0, 0, 0.7)',
  zIndex: '1000'
}

const MODAL_STYLE = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'rgba(139, 139, 139, 0.6)',
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

const GIF_DIV_STYLE = {
  textAlign: 'center',
  paddingTop: '10px'
}

const GIF_STYLE = {
  maxWidth: '250px'
}

export function ModalResultado({ mostrar, setMostrar, isVencedor, isEmpate, temaUser, categoriaTemaUser }) {
  const [audioPlayed, setAudioPlayed] = useState(false);

 if (mostrar && !audioPlayed)
    playAudio(isVencedor, isEmpate);

  const resolveClick = () => {
    window.location.reload()
  };

  // GIFS
  let srcGif = "";
  if (retornaGif(temaUser) != null && retornaGif(temaUser) != '')
    srcGif = retornaGif(temaUser);
  else
    srcGif = retornaGif(categoriaTemaUser);

    return (
      <Modal onClose={() => setMostrar(false) } open={mostrar} style={BACKGROUND_STYLE}>
        <div style={MODAL_STYLE}>
          <div style={TITLE_STYLE}>
            <p>{isVencedor ? 'Você Venceu!' : isEmpate ? "Empate!" : 'Game Over!'}</p>
            <div style={{marginTop: '30px', fontSize: '40px'}}>{!isVencedor && 'Revanche?'}</div>
          </div>
          <div style={GIF_DIV_STYLE}>
            <img style={GIF_STYLE} src={isVencedor ? srcGif : ""} />
          </div>
          {/* Button */}
          <Grid container justifyContent={'center'}>
                <Grid item xs={4.3}>
                    <Button
                        onClick={resolveClick}
                        variant='contained' 
                        sx={{
                            mx: 'auto', 
                            mt: isVencedor ? 5 : 24, 
                            color: 'font.emphasis'
                        }}
                    >
                        JOGAR NOVAMENTE
                    </Button>
                </Grid>
            </Grid>
        </div>
      </Modal>
    );

    function playAudio(vencedor, empate) {
      console.log("VAI TOCAR AUDIO MODAL!");
      var audioFicha = new Audio();

      if (vencedor)
        audioFicha.src = retornaAudio('vitoria');
      else if (empate)
        audioFicha.src = retornaAudio('empate');
      else 
        audioFicha.src = retornaAudio('derrota');

      audioFicha.play();
      setAudioPlayed(true);
    }
};