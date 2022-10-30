import { Horizontal, NarrowFont, ThickFont, Vertical } from 'style/_variables';
import styled from 'styled-components';
import {} from 'style/_variables';
import { Texts } from './NavTitle.texts';
import {Link, useLocation} from 'react-router-dom';
import { GrLanguage } from 'react-icons/gr'

export default function NavTitle () {

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
    
    @media screen and (max-width: 690px)
        {
            display:block;
            padding: 4px 16px;
            line-height: 12%;     
        h1{
            font-size: x-small;
        
        }
        
    }

    `

    const Language =styled.div`
    position: absolute;
    padding: 6px;
    display: flex;
    border: 2px solid black;
    border-radius: 8px;
    right: 100px;
    top: 6px;
    font-family: ${NarrowFont};
    font-size: medium;
    `

    const Display = styled.div`
    @media screen and (max-width: 690px)
    {
            display: none;
    }
    `

return(<>
        <Title>
            <h2>{Texts.portfolio[`${location.pathname}`]}</h2>
            <h1>Ricardo Machado</h1>            
        </Title>
        <Link to={'/portfolio'}>
        <Language>
            <GrLanguage size={16}/>
            <Display>{Texts.language[`${location.pathname}`]}</Display>
        </Language>
        </Link>
            
        </>)
}