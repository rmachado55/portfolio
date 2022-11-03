import Grafite from 'assets/img/tinta.png';
import {useLocation} from 'react-router-dom'
import styled from 'styled-components'
import { ContrastColor, Horizontal, PrimaryColor, ThickFont } from 'style/_variables'
import { NavigationOptions } from '../NavigationOptions'


export const Menu = ({menu, setMenu }) => {

    const location = useLocation();

    const Box = styled.div`
        animation-name: popMenu;
        animation-duration: 0.5s;
        animation-timing-function: ease-in-out;   
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
    
        @media screen and (max-width: 780px)
        {
            width: 70vw;  
            margin-left: 12vw;
            text-align: center;
        }        
    }
    
        h1{
        font-family: ${ThickFont};
        font-size: xx-large;
        z-index: 110;       
    }
    
    h1 :hover{
        color: ${ContrastColor};
    }

    @keyframes popMenu {
        from {
            opacity: 0;
            transform: translate3d(0, -100%, 3em);
        }
        to {
            opacity: 100%;
            transform: translate3d(1, 1, 1);
    }

    
    `

    const Bg = styled.img`
        position: absolute;
        width: 100%;
        height: 100%;
        top: 4vh;      
    `



    return(
        <Box id={'menuBox'}>
                <Bg src={Grafite} />
                {NavigationOptions.map( o => 
                    <h1 onClick={() => setMenu(false) }>
                        <a href={`#${o.id}`}>
                            {o[`${location.pathname}`]}
                        </a>
                    </h1>
                )}                
        </Box> 
    )
}