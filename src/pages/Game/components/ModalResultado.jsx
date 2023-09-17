import React from 'react'

export default function ModalResultado({ show, isWinner }) {
  if (!show) {
    return null;
  }

  console.log("Modal aberto");

  return (
    // <div className="modal">
    //   <div className="modal-content">
    //     <h2>{isWinner ? 'Você Venceu!' : 'Game Over!'}</h2>
    //     <p>{!isWinner ?? 'Revanche?'}</p>
    //   </div>
    //   <div>
    //     <p>ESPAÇO PARA O GIF / BOTÃO DE REVANCHE</p>
    //   </div>
    // </div>
    <p>Teste</p>
  );
}