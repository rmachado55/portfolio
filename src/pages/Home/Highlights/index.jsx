/* eslint-disable no-unused-expressions */
import Container from "components/Container";
import Ricardo from 'assets/img/ricardo_desenho.png';
import {Texts} from './Highlights.texts';
import { useLocation } from 'react-router-dom';
import Button from "components/Button";
import styled from 'styled-components'

export default function Highlights(){

    const location = useLocation();   
    

    const Wrapper = styled.div`
    display: flex;
    height: 70vh;
    `

    const Bg = styled.img`
    position:absolute;
    
    height:70vh;
    left:20vw;
    filter: opacity(40%);
    `

    const Name = styled.div`
    width: 50%;
    display: grid;
    padding-top:15vh;
    text-align: center;    
    `
    const ShowCase = styled.div`
    width: 50%;
    padding-top:15vh;
    display: grid;
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

        <Button active={true}><h3>{Texts.button01[`${location.pathname}`]}</h3></Button>
        </ShowCase>
        
        </Wrapper>
    </Container>)
}