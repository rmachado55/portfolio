import style from './BarraNavegacao.module.scss'
import {IoMenu} from 'react-icons/io5'

export default function BarraNavegacao () {

    return(
        <nav className={style.barraNavegacao}>
            <div className={style.barraNavegacao__titulo}>
                <h3>Ricardo Machado</h3>
                <h5>Portfólio</h5>
            </div>
            <div  className={style.barraNavegacao__hamburguer}>
                <IoMenu size={50}/>
            </div>
            </nav>
    )
}