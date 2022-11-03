import { ContrastColor, NarrowFont, ThickFont,} from 'style/_variables';
import styled from 'styled-components';
import {} from 'style/_variables';
import { Texts } from '../NavBar.texts';
import {Link, useLocation} from 'react-router-dom';
import { IoIosGlobe } from 'react-icons/io'

export const NavSelectors = () => {

    const location = useLocation()

    const Title = styled.div`
    font-family: ${NarrowFont};
    justify-content: left;
    display:flex;         

    h1{
        font-size:larger;        
    }
    h2{
        padding: 8px 24px 6px 0;
        font-size: x-large;
        font-family: ${ThickFont};
    }
    
    @media screen and (max-width: 780px)
        {
            display:block;
            padding: 4px;
            line-height: 10%;     
        h1{
            font-size: x-small;
        
        }        
    }
    `

    const Language =styled.div`
    padding: 4px;
    line-height: 140%;
    display: flex;
    border: 1px solid black;
    border-radius: 8px;
    right: 90px;
    top: 6px;
    font-family: ${NarrowFont};    

    :hover{
        color: ${ContrastColor};
        border: 1px solid ${ContrastColor};
    
    }
    `

    const Display = styled.div`
    @media screen and (max-width: 780px)
    {
            display: none;
    }
    `

return(<>
        <Title>
            <h2>{Texts.portfolio[`${location.pathname}`]}</h2>
            <h1>Ricardo Machado</h1>            
        </Title>
        <Link to={'/'}>
        <Language>
            <IoIosGlobe size={21}/>
            <Display><span>{Texts.language[`${location.pathname}`]}</span></Display>
        </Language>
        </Link>
            
        </>)
}