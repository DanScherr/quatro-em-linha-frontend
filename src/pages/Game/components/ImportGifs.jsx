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
import padrao from './../../../static/images/gifs/padrao.gif';

export const retornaGif= (nome) => {
    if (nome.includes('batman')) {
        return batman;
    } else if (nome.includes('superman')) {
        return superman;
    } else if (nome.includes('flash')) {
        return flash;
    } else if (nome.includes('dc')) {
        return dc;
    } else if (nome.includes('digimon')) {
        return digimon;
    } else if (nome.includes('natalatt')) {
        return natalatt;
    } else if (nome.includes('verao')) {
        return verao;
    } else if (nome.includes('pascoa')) {
        return pascoa;
    } else if (nome.includes('halloween')) {
        return halloween;
    } else if (nome.includes('dragon-ball-z')) {
        return dragonball;
    } else if (nome.includes('futebol')) {
        return futebol;
    } else if (nome.includes('lufalufa')) {
        return lufalufa;
    } else if (nome.includes('corvinal')) {
        return corvinal;
    } else if (nome.includes('sonserina')) {
        return sonserina;
    } else if (nome.includes('grifinoria')) {
        return grifinoria;
    } else if (nome.includes('homemdeferro')) {
        return homemdeferro;
    } else if (nome.includes('homemaranha')) {
        return homemaranha;
    } else if (nome.includes('capitaoamericaatt')) {
        return capitaoamericaatt;
    } else if (nome.includes('marvel')) {
        return marvel;
    } else if (nome.includes('naruto')) {
        return naruto;
    } else if (nome.includes('vaporeon')) {
        return vaporeon;
    } else if (nome.includes('pokemon')) {
        return pokemon;
    } else if (nome.includes('pikachu')) {
        return pikachu;
    } else if (nome.includes('charizard')) {
        return charizard;
    } else if (nome.includes('star-trek')) {
        return startrek;
    } else if (nome.includes('rey')) {
        return rey;
    } else if (nome.includes('jangofett')) {
        return jangofett;
    } else if (nome.includes('luke')) {
        return luke;
    } else if (nome.includes('grogu')) {
        return grogu;
    } else if (nome.includes('darthvader')) {
        return darthvader;
    } else if (nome.includes('chewbaca')) {
        return chewbaca;
    } else if (nome.includes('star-wars')) {
        return starwars;
    } else if (nome.includes('padrao')){
        return padrao;
    }
    else{
        return "";
    }
}