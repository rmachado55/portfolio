import { Container } from "components/Container";
import Ricardo from 'assets/img/ricardo_desenho.png';
import {Texts} from './Highlights.texts';
import { useLocation } from 'react-router-dom';
import Button from "components/Button";
import styled from 'styled-components'
import { Horizontal, Vertical } from "style/_variables";
import { useEffect} from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

export const Highlights = () => {

    const location = useLocation();
        
    const Wrapper = styled.div`
    display: flex; 
    padding: 0 0 0 0;
    height: 100vh;

    @media screen and (max-width: 690px)
        {        
        display:block;
        padding: ${Vertical} 0 ${Vertical} 0;         
        }
    `

    const Bg = styled.img`
    position: absolute;   
    width: 96vw;
    height: 96vh;        
    filter: opacity(30%);
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
    padding: 30vh ${Horizontal};
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
    padding: 15vh ${Horizontal};
    
 


    @media screen and (max-width: 690px) {
        margin: ${Vertical} 0;
        text-align: center;
        width: 100%;
        height: 21vh;          
    }                
    `
    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
      
    gsap.from('#face', {
        x: '40vw',
        duration: 2
        })
    
    gsap.from('#highlights', {
        opacity: '0',
        duration: 3,
        delay: 1,        
        })        
    
    gsap.to('#home', {
        scrollTrigger: {
            trigger: "#home",
            start: "bottom 110%",
            end: "bottom 0%",
            scrub: true
            
        },
        y: '-140vh',
        duration: 3,
        opacity: 0,
        })          
    
    },[])           

        return (<>
            <Container dark={false} id={"home"} bottom={true} top={false}>
                <Wrapper>
                <Bg src={Ricardo} id={'face'} alt={'efeito de fundo'}/>
                    <Name>
                        <h1>Ricardo Machado</h1>
                        <h2>| Front-End</h2>
                    </Name>
                    <ShowCase id={'highlights'}>
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
                
            </Container>
            
                    
            </>
        )
        }