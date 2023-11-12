import batman from './../../../static/images/gifs/dc/batman.gif';
import superman from './../../../static/images/gifs/dc/superman.gif';
import flash from './../../../static/images/gifs/dc/flash.gif';
import dc from './../../../static/images/gifs/dc/dc.gif';
import digimon from './../../../static/images/gifs/digimon/digimon.gif';
import halloween from './../../../static/images/gifs/diversos/halloween.gif';
import natalatt from './../../../static/images/gifs/diversos/natalatt.gif';
import pascoa from './../../../static/images/gifs/diversos/pascoa.gif';
import verao from './../../../static/images/gifs/diversos/verao.gif';
import dragonball from './../../../static/images/gifs/dragon-ball/dragon-ball.gif';
import futebol from './../../../static/images/gifs/futebol/futebol.gif';
import lufalufa from './../../../static/images/gifs/harrypotter/lufa.gif';
import corvinal from './../../../static/images/gifs/harrypotter/corvinal.gif';
import sonserina from './../../../static/images/gifs/harrypotter/sonserina.gif';
import grifinoria from './../../../static/images/gifs/harrypotter/grifinoria.gif';
import homemdeferro from './../../../static/images/gifs/marvel/homemdeferro.gif';
import homemaranha from './../../../static/images/gifs/marvel/homemaranha.gif';
import capitaoamericaatt from './../../../static/images/gifs/marvel/capitaoamericaatt.gif';
import marvel from './../../../static/images/gifs/marvel/marvel.gif';
import naruto from './../../../static/images/gifs/naruto/naruto.gif';
import vaporeon from './../../../static/images/gifs/pokemon/vaporeon.gif';
import pokemon from './../../../static/images/gifs/pokemon/pokemon.gif';
import pikachu from './../../../static/images/gifs/pokemon/pikachu.gif';
import charizard from './../../../static/images/gifs/pokemon/charizard.gif';
import startrek from './../../../static/images/gifs/star-trek/star-trek.gif';
import rey from './../../../static/images/gifs/star-wars/rey.gif';
import jangofett from './../../../static/images/gifs/star-wars/jangofett.gif';
import luke from './../../../static/images/gifs/star-wars/luke.gif';
import grogu from './../../../static/images/gifs/star-wars/grogu.gif';
import darthvader from './../../../static/images/gifs/star-wars/darthvader.gif';
import chewbaca from './../../../static/images/gifs/star-wars/chewbaca.gif';
import starwars from './../../../static/images/gifs/star-wars/star-wars.gif';

export const retornaGif= (nome) => {
    switch (nome) {
        case 'batman':
            return  batman;
        case 'superman':
            return  superman;
        case 'flash':
            return  flash;
        case 'dc':
            return  dc;
        case 'digimon':
            return digimon;
        case 'natalatt':
            return  natalatt;
        case 'verao':
            return  verao;
        case 'pascoa':
            return  pascoa;
        case 'halloween':
            return  halloween;
        case 'dragon-ball-z':
            return dragonball;
        case 'futebol':
            return futebol;
        case 'lufalufa':
            return  lufalufa;
        case 'corvinal':
            return  corvinal;
        case 'sonserina':
            return  sonserina;
        case 'grifinoria':
            return  grifinoria;
        case 'homemdeferro':
            return  homemdeferro;
        case 'homemaranha':
            return  homemaranha;
        case 'capitaoamericaatt':
            return  capitaoamericaatt;
        case 'marvel':
            return  marvel;
        case 'naruto':
            return  naruto;
        case 'vaporeon':
            return  vaporeon;
        case 'pokemon':
            return  pokemon;
        case 'pikachu':
            return  pikachu;
        case 'charizard':
            return  charizard;
        case 'star-trek':
            return  startrek;
        case 'rey':
            return rey;
        case 'jangofett':
            return jangofett;
        case 'luke':
            return luke; 
        case 'grogu':
            return  grogu;
        case 'darthvader':
            return  darthvader;
        case 'chewbaca':
            return  chewbaca;
        case 'star-wars':
            return  starwars;
            
        default:
            break;
    }
}