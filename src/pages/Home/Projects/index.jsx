import ComponenteCorNegativa from 'components/ComponenteCorNegativa';
import style from './Projects.module.scss';
import MyProjects from 'db/projects.json';
import Setas from 'assets/img/setas.png';

export default function Projects (){

    return(<ComponenteCorNegativa title={'projects'}>
            <>
                <img className={style.projects__bge} id={"setaEsquerda"} src={Setas} alt={'imagem de fundo com setas em Neon amarelas'}/>
                <img className={style.projects__bgd} id={"setaDireita"} src={Setas} alt={'imagem de fundo com setas em Neon amarelas'}/>
                <div className={style.projects__superior}>
                    <h1>Projetos Desenvolvidos</h1>
                    
                </div>
                
                {MyProjects.map(({titulo, linha1, linha2, linha3, linha4, call, ativo, key}) => {
                    return(<div id={'revela'} key={key} className={style.projects__box}>
                        <img src={`assets/img/projects/${key}.png`} className={style.projects__imagem}/>
                        <div className={style.projects__detalhes}>    <h2>{titulo}</h2>
                            <h4><li>{linha1}</li></h4>
                            <h4><li>{linha2}</li></h4>
                            <h4><li>{linha4}</li></h4>
                            <h4><li>{linha3}</li></h4>
                            {ativo ? <button className={style.active}><h4>{call}</h4></button> : <button className={style.inactive}><h4>{call}</h4></button>}                         
                            </div>    
                            </div>)
                })}
        
            </>
            </ComponenteCorNegativa>
            
        )
}