/* eslint-disable no-unused-expressions */
import Container from "components/Container";
import Ricardo from 'assets/img/ricardo_desenho.png';
import Texts from 'db/translation.json'

export default function Highlights(){
    
return(<Container title={'Carreira'} dark={false}>
        <div >
        <img src={Ricardo} alt={'efeito de fundo'}/>
        <div >
            <h1>Ricardo Machado</h1><br/>
            <h2 id={'maquinaDeEscrever'}>| Front-End</h2>
            
        </div>
        <div >
          <h3 id={'aparece'}></h3>
          <h3 id={'aparece'}></h3>
            
            <button id={'aparece'}><h3></h3></button>
        </div>
        </div>
    </Container>)
}