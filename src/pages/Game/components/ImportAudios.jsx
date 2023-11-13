import derrota from './../../../static/audios/derrota.mp3';
import ficha from './../../../static/audios/ficha.mp3';
import empate from './../../../static/audios/empate.mp3';
import vitoria from './../../../static/audios/vitoria.mp3';

export const retornaAudio= (nome) => {
    switch (nome) {
        case 'ficha':
            return  ficha;
        case 'vitoria':
            return  vitoria;
        case 'empate':
            return  empate;    
        case 'derrota':
            return  derrota;  
            
        default:
            break;
    }
}