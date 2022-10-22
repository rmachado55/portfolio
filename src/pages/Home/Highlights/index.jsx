/* eslint-disable no-unused-expressions */
import ComponenteCorPositiva from "components/ComponenteCorPositiva";
import style from './Highlights.module.scss';
import Ricardo from 'assets/img/ricardo_desenho.png';
import Texts from 'db/translation.json'

export default function Highlights({language, setLanguage}){
    
return(<ComponenteCorPositiva title={'Carreira'}>
        <div className={style.destaquesCv}>
        <img src={Ricardo} className={style.destaquesCv__bg} alt={'efeito de fundo'}/>
        <div className={style.destaquesCv__esquerda}>
            <h1>Ricardo Machado</h1><br/>
            <h2 id={'maquinaDeEscrever'}>| Front-End</h2>
            
        </div>
        <div className={style.destaquesCv__direita}>
          <h3 id={'aparece'}>{Texts['a'][language]}</h3>
          <h3 id={'aparece'}>{Texts['b'][language]}</h3>
            
            <button id={'aparece'} className={style.active}><h3></h3></button>
        </div>
        </div>
    </ComponenteCorPositiva>)
}