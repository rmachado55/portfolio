import {IoMenu , IoClose} from 'react-icons/io5';

import { useState } from 'react';
import Grafite from 'assets/img/tinta.png';
import {Link, useLocation} from 'react-router-dom'
import styled from 'styled-components'
import { Horizontal, PrimaryColor, ThickFont, Vertical } from 'style/_variables'
import NavTitle from './NavTitle';
import { Texts } from './NavigationBar.texts'

export default function NavigationBar () {
  
    const location = useLocation();

    const [menu, setMenu] = useState(false)

    const NavBar = styled.nav `
        position: fixed;
        width: 80vw;
        margin: 0 12vw 0 8vw;
        display: flex;
        background-color: ${PrimaryColor};    
        z-index: 95;
        padding: 4px 0 4px ${Horizontal};
        border-radius: 0 0 30px 30px;
        height:36px;

        @media screen and (max-width: 690px)
        {
            margin: 0 0;
            width:94vw;
            
        }  
    `
    const Hamburguer =styled.div`
        position: absolute;
        right: 24px;
        top: 0;
        z-index: 100;

    `
    const Menu = styled.div`
        position:fixed;
        top: 0;
        padding-top: 80px;
        padding-right:32px;
        background-color: ${PrimaryColor};   
        display: ${ menu ? "grid" : "none"};        
        height: 480px;
        right: 8%;
        width: 300px;
        z-index: 90;        
        border-radius: 0 0 30px 30px;
    h1{
        text-align: right;
        font-family: ${ThickFont};
        font-size: xx-large;
        z-index: 100;
       
    }

    @media screen and (max-width: 690px)
        {
            padding: 0;
            width: 100vw;
            
        }  
    `

    const Bg = styled.img`
        position: absolute;
        width: 100%;
        padding-top: 30px;
    `

    
    return(
        <>
            <NavBar>
                <NavTitle/>

                <Hamburguer onClick={() => setMenu(!menu)}>
                    {menu ? <IoClose size={44}/> : <IoMenu size={44}/>}
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