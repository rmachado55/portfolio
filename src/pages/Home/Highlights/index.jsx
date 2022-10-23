/* eslint-disable no-unused-expressions */
import Container from "components/Container";
import Ricardo from 'assets/img/ricardo_desenho.png';
import {Texts} from './Highlights.texts';
import { Params, useLocation } from 'react-router-dom';


export default function Highlights(){

    let location = useLocation();    

return(<Container dark={false} title={"Carreira"}>
        <div >
        <img src={Ricardo} alt={'efeito de fundo'}/>
        <div >
            <h1>Ricardo Machado</h1><br/>
            <h2 id={'maquinaDeEscrever'}>| Front-End</h2>
            
        </div>
        <div >
          <h3 >{Texts.high01[`${location.pathname}`]}</h3>
          <h3 >{Texts.high02[`${location.pathname}`]}</h3>
          <h3 >{Texts.high03[`${location.pathname}`]}</h3>
          <h3 >{Texts.high04[`${location.pathname}`]}</h3>
          
            
            <button id={'aparece'}><h3>{Texts.button01[`${location.pathname}`]}</h3></button>
        </div>
        </div>
    </Container>)
}