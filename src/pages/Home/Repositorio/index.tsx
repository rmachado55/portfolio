import ComponenteCorPositiva from 'components/ComponenteCorPositiva'
import style from './Repositorio.module.scss'

export default function Repositorio () {

    return(
        <ComponenteCorPositiva title={'Repositório'}>
        <>
            <div className={style.Repositorio__superior}>
                <h1>Quer ver Mais?</h1>
                <h2>Meu respositório |</h2>   
            </div>
            <div className={style.Repositorio__box}>
                <h3>Nome do Repo</h3>
                <h4>Descrição do Repo</h4>
                <h4>tag /tag /tag</h4>
                <button className={style.ativo}><h4>Veja Mais</h4></button>
            </div>
        </>
        </ComponenteCorPositiva>
    )
}