import React from 'react'

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
  color: 'rgba(0, 0, 0, 1)'
}

const GIF_STYLE = {
  textAlign: 'center',
  paddingTop: '10px'
}

export function ModalResultado({ mostrar, isVencedor, isEmpate }) {
  if (mostrar) {
    console.log("Modal aberto");

    return (
      <div style={BACKGROUND_STYLE}>
        <div style={MODAL_STYLE}>
          <div style={TITLE_STYLE}>
            <h2>{isVencedor ? 'Você Venceu!' : isEmpate ? "Empate!" : 'Game Over!'}</h2>
            <p>{!isVencedor ?? 'Revanche?'}</p>
          </div>
          <div style={GIF_STYLE}>
            <p>ESPAÇO PARA O GIF / BOTÃO DE JOGAR NOVAMENTE</p>
          </div>
        </div>
      </div>
    );
  }
  else {
    return <></>
  }
}