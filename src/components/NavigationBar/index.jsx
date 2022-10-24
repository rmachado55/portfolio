import {IoMenu , IoClose} from 'react-icons/io5';
import { useState } from 'react';
import Grafite from 'assets/img/tinta.png';
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import { PaddingHorizontal, PaddingVertical, PrimaryColor } from 'style/_variables'
import NavTitle from './NavTitle';


export default function NavigationBar (props) {
    const [menu, setMenu] = useState(false)

    const NavBar = styled.nav `
    position: fixed;
    width: 100%;
    display: flex;
    background-color: ${PrimaryColor};
    padding:  calc(0.2*${PaddingHorizontal}) ${PaddingVertical};
    z-index: 90;
    `
    const Filling = styled.div`
    height: 80px;
    `


     return(<>
        <NavBar>
           <NavTitle />
          
            <div onClick={() => setMenu(!menu)}>
                {menu ? <IoClose size={64}/> : <IoMenu size={64}/>}
            </div>
            <div style={{ display:( menu ? "grid" : "none" ) }}>
                <img src={Grafite} alt={'mancha de tinta cinza'} />
                <h1><Link to={'/'}>HOME</Link></h1>
                <h1><Link to={'carreira'}>CARREIRA</Link></h1>
                <h1><Link to={'projects'}>projects REALIZADOS</Link></h1>
                <h1><Link to={'certificados'}>CERTIFICADOS OBTIDOS</Link></h1>
                <h1><Link to={'contato'}>CONTATO / DÊ SEU FEEDBACK</Link></h1>
            </div>
            </NavBar>
            <Filling/>
            </>
            )
}