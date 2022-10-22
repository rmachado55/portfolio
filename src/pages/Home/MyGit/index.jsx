import ComponenteCorPositiva from 'components/ComponenteCorPositiva'
import style from './MyGit.module.scss'
import Repositorio from './Repositorio'
import { SiJavascript, SiTypescript, SiNodedotjs } from 'react-icons/si'
import { Badges } from 'db/badges'

export default function MyGit() {

const RepositoriosVitrine = [{
    url : "Armazenamento-no-Navegador",
    icon: "SiJavascript"
},{
    url : "restaurante-cardapio-online",
    icon: "SiTypescript"
},{
    url : "to-do-list-express",
    icon: "SiNodedotjs"
}]

    return(
        <ComponenteCorPositiva title={'Repositório'}>
        <>
            <div className={style.meuGit__superior}>
                <h1 id={'aparece'}>Quer ver Mais?</h1>
                <h2>Meu respositório |</h2> 
            </div>
            <div className={style.meuGit__board}>
                {RepositoriosVitrine.map((repositorio) => {return(
                <Repositorio url={'to-do-list-express'} />
                )})}
            </div>
        
        </>
        </ComponenteCorPositiva>
    )
}