import { useEffect, useState } from 'react';
import styled from 'styled-components'
import { Horizontal, PrimaryColor } from 'style/_variables'
import { NavSelectors } from './NavSelectors';
import { Hamburguer } from './Hamburguer';
import { Menu } from './Menu';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEventCallback } from '@mui/material';

gsap.registerPlugin(ScrollTrigger);

export default function NavigationBar () {
  
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
    
    return(
    <>
        <NavBar>
            <NavSelectors/>
            <Hamburguer menu={menu} setMenu={setMenu}/>
        </NavBar>
        <Menu menu={menu} setMenu={setMenu} />
    </>
    )
}