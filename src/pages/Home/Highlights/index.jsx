/* eslint-disable no-unused-expressions */
import Container from "components/Container";
import Ricardo from 'assets/img/ricardo_desenho.png';
import {Texts} from './Highlights.texts';
import { useLocation } from 'react-router-dom';
import Button from "components/Button";
import styled from 'styled-components'
import { Vertical } from "style/_variables";

export default function Highlights(){

    const location = useLocation();   
    
    const Wrapper = styled.div`
    display: flex;    
    padding: 14vh 0 14vh 0;
    

    @media screen and (max-width: 690px)
        {        
        display:grid;        
        }
    `

    const Bg = styled.img`
    position: absolute;    
    top: 10vh;
    height: 62vh;    
    filter: opacity(30%);    
    
    @media screen and (max-width: 690px)
        {        
        height:80vw;        
        }
    `
    

    const Name = styled.div`
    width: 40vw;
    display: grid;
    text-align: center;
    height: 40vh;
    
    @media screen and (max-width: 690px)
        {
        width: 90vw;              
        }    
    `
    const ShowCase = styled.div`
    display: block;
    
    h3{
        padding: 20px 0;      
    }

    @media screen and (max-width: 690px) {
        margin: ${Vertical} 0;
        text-align: center;
        width:90vw;
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
          <h3 >{Texts.high04[`${location.pathname}`]}</h3>       

        <Button active={true}><h4>{Texts.button01[`${location.pathname}`]}</h4></Button>
        </ShowCase>
        
        </Wrapper>
    </Container>)
}