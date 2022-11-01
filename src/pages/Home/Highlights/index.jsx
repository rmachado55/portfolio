/* eslint-disable no-unused-expressions */
import Container from "components/Container";
import Ricardo from 'assets/img/ricardo_desenho.png';
import {Texts} from './Highlights.texts';
import { useLocation } from 'react-router-dom';
import Button from "components/Button";
import styled from 'styled-components'
import { Horizontal, Vertical } from "style/_variables";

export default function Highlights(){

    const location = useLocation();
    
    
    const Wrapper = styled.div`
    display: flex;    
    padding: 40px 0 0 0;
    height: 60vh;

    @media screen and (max-width: 690px)
        {        
        display:block;
        padding: ${Vertical} 0 ${Vertical} 0;         
        }
    `

    const Bg = styled.img`
    position: absolute;    
    top: 40px;
    height: 70vh;    
    filter: opacity(20%);
    object-fit: cover;
    transition: width 5s;
    
    @media screen and (max-width: 690px)
        {        
            height: 68vh;
            width:100vw;
            top: 0;     
        }
    `
    

    const Name = styled.div`
    padding: 15vh ${Horizontal};
    display: block;
    text-align: center;
    
    
    @media screen and (max-width: 690px)
        {
        width: 100%;
        height:17vh;             
        }    
    `
    const ShowCase = styled.div`
    display: grid;
    z-index: 100;    
    padding: 0 ${Horizontal};
    
    h3{
        padding: 20px 0;     
    
    }


    @media screen and (max-width: 690px) {
        margin: ${Vertical} 0;
        text-align: center;
        width: 100%;
        height: 21vh;          
    }                
    `

return(<Container dark={false} id={"home"}>
        <Wrapper>
        <Bg src={Ricardo} alt={'efeito de fundo'}/>
            <Name>
                <h1>Ricardo Machado</h1>
                <h2>| Front-End</h2>
            </Name>
            <ShowCase>
            <h3 >{Texts.high01[`${location.pathname}`]}</h3>
            <h3 >{Texts.high02[`${location.pathname}`]}</h3>
            <h3 >{Texts.high03[`${location.pathname}`]}</h3>             

            
                <a target="_blank" rel="noreferrer" href={"https://www.linkedin.com/in/ricardomachado7/"} >
                <Button active={true}>
                
                    <h4>{Texts.button01[`${location.pathname}`]}</h4>
                
                </Button>
                </a>
            
            
            </ShowCase>        
        </Wrapper>
    </Container>)
}