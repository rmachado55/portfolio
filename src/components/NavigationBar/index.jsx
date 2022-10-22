import style from './NavigationBar.module.scss';
import {IoMenu , IoClose} from 'react-icons/io5';
import { useState } from 'react';
import Grafite from 'assets/img/tinta.png';
import {Link} from 'react-router-dom'


export default function NavigationBar (props) {


    const [menu, setMenu] = useState(false)

     return(
        <nav className={style.NavigationBar}>
            <div className={style.NavigationBar__titulo}>
                <h3>Ricardo Machado</h3>
                <h5>Portfólio</h5>
            </div>
            <div>
                {props.language}
                <button onClick={() => {props.setLanguage(0)}}>EN</button>
                <button onClick={() => {props.setLanguage(1)}}>PT</button>
                <button onClick={() => {props.setLanguage(2)}}>SP</button>
            </div>
            <div  className={style.NavigationBar__hamburguer} onClick={() => setMenu(!menu)}>
                {menu ? <IoClose size={64}/> : <IoMenu size={64}/>}
            </div>
            <div className={style.NavigationBar__opcoes} style={{ display:( menu ? "grid" : "none" ) }}>
                <img src={Grafite} alt={'mancha de tinta cinza'} />
                <h1><Link to={'/'}>HOME</Link></h1>
                <h1><Link to={'carreira'}>CARREIRA</Link></h1>
                <h1><Link to={'projects'}>projects REALIZADOS</Link></h1>
                <h1><Link to={'certificados'}>CERTIFICADOS OBTIDOS</Link></h1>
                <h1><Link to={'contato'}>CONTATO / DÊ SEU FEEDBACK</Link></h1>
            </div>
            </nav>
    )
}