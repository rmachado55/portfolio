import {IoMenu , IoClose} from 'react-icons/io5';

import { useState } from 'react';
import Grafite from 'assets/img/tinta.png';
import {Link, useLocation} from 'react-router-dom'
import styled from 'styled-components'
import { Horizontal, NarrowFont, PrimaryColor, ThickFont, Vertical } from 'style/_variables'
import NavTitle from './NavTitle';
import { Texts } from './NavigationBar.texts'

export default function NavigationBar () {
  
    const location = useLocation();

    const [menu, setMenu] = useState(false)

    const NavBar = styled.nav `
        position: fixed;
        margin-left: 12vw;
        width:70vw;    
        display: flex;
        background-color: ${PrimaryColor};    
        z-index: 125;
        padding: 4px ${Horizontal} 4px ${Horizontal};
        border-radius: 0 0 30px 30px;
        height:36px;
        justify-content: space-between;
    `
    const Hamburguer =styled.div`                
        z-index: 100;
        display: flex;
        flex-wrap: no-wrap;
        cursor: pointer;

        p{
            padding: 10px 4px 0 10px;
            font-size: medium;
            font-family: ${NarrowFont};
        }
    `
    const Menu = styled.div`
        position:fixed;
        top: 0;
        padding: 80px ${Horizontal} 0 ${Horizontal};
        margin-left: 58vw;
        background-color: ${PrimaryColor};   
        display: ${ menu ? "grid" : "none"};    
        height: 480px;
        width: 24vw;
        z-index: 110;        
        border-radius: 0 0 30px 30px;
        text-align: right;
    h1{
        font-family: ${ThickFont};
        font-size: xx-large;
        z-index: 110;       
    }

    @media screen and (max-width: 780px)
        {
        width: 70vw;  
        margin-left: 12vw;
        text-align: center;
        }        
    }
    `

    const Bg = styled.img`
        position: absolute;
        width: 100%;
        height: 100%;
        top: 4vh;
    `

    
    return(
        <>
            <NavBar>
                <NavTitle/>

                <Hamburguer onClick={() => setMenu(!menu)}>
                    {menu ? <><p>{Texts.close[`${location.pathname}`]}</p><IoClose size={32}/></> : <><p>Menu</p><IoMenu size={32}/></>}
                </Hamburguer>
                </NavBar>
                <Menu>
                    <Bg src={Grafite} alt={Texts.altBG[`${location.pathname}`]}/>
                    <h1 onClick={() => setMenu(!menu)}>
                        <a href="#home">{Texts.home[`${location.pathname}`]}</a>
                    </h1>
                    <h1 onClick={() => setMenu(!menu)}>
                        <Link to={'carrer'}>{Texts.carrer[`${location.pathname}`]}</Link>
                    </h1>
                    <h1 onClick={() => setMenu(!menu)}>
                        <a href="#projects">{Texts.projects[`${location.pathname}`]}</a>
                    </h1>
                    <h1 onClick={() => setMenu(!menu)}>
                        <a href="#certificates">{Texts.certificates[`${location.pathname}`]}</a>
                    </h1>
                    <h1 onClick={() => setMenu(!menu)}>
                        <a href="#repository">{Texts.repository[`${location.pathname}`]}</a>
                    </h1>
                    <h1 onClick={() => setMenu(!menu)}>
                        <a href="#contact">{Texts.contact[`${location.pathname}`]}</a>
                    </h1>
                </Menu>
            
        </>
        )
}