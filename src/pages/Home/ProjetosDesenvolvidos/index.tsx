import ComponenteCorNegativa from 'components/ComponenteCorNegativa';
import style from './ProjetosDesenvolvidos.module.scss';
import {Badges} from 'db/badges.js';
import Projetos from 'db/projetos.json';
import Setas from 'assets/img/setas.png';

export default function ProjetosDesenvolvidos (){

    return(<ComponenteCorNegativa title={'Projetos'}>
            <>
                <img className={style.projetosDesenvolvidos__bge} id={"setaEsquerda"} src={Setas} alt={'imagem de fundo com setas em Neon amarelas'}/>
                <img className={style.projetosDesenvolvidos__bgd} id={"setaDireita"} src={Setas} alt={'imagem de fundo com setas em Neon amarelas'}/>
                <div className={style.projetosDesenvolvidos__superior}>
                    <h1>Projetos Desenvolvidos</h1>
                    
                </div>
                
                {Projetos.map(({titulo, linha1, linha2, linha3, linha4, call, ativo, key}) => {
                    return(<div id={'revela'} key={key} className={style.projetosDesenvolvidos__box}>
                            <h2>{titulo}</h2>
                            <h4><li>{linha1}</li></h4>
                            <h4><li>{linha2}</li></h4>
                            <h4><li>{linha4}</li></h4>
                            <h4><li>{linha3}</li></h4>
                            {ativo ? <button className={style.ativo}><h4>{call}</h4></button> : <button className={style.inativo}><h4>{call}</h4></button>}                         
                            
                            </div>)
                })}
            {Badges.map(({icon, nome , from}) => {
                                return(<span id={'surpresa'} key ={nome} title={nome} className={style.projetosDesenvolvidos__icons}>{icon}</span>)})}
            </>
            </ComponenteCorNegativa>
            
        )
}