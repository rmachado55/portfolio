import Container from 'components/Container'

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
        <Container dark={true} title={'Repositório'}>
        <>
            <div >
                <h1 id={'aparece'}>Quer ver Mais?</h1>
                <h2>Meu respositório |</h2> 
            </div>
            <div >
                {RepositoriosVitrine.map((repositorio) => {return(
                <Repositorio url={'to-do-list-express'} />
                )})}
            </div>
        
        </>
        </Container>
    )
}