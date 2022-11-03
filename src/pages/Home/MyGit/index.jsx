import { Container } from 'components/Container'
import { useLocation } from 'react-router-dom'
import Repository from './Repository'
import {ShowCase} from './Repository/showcase'
import {Texts} from './MyGit.texts'
import styled from 'styled-components'
import { Vertical } from 'style/_variables'
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react'

gsap.registerPlugin(ScrollTrigger);

export const MyGit = () => {

    const location = useLocation();

    const MyGitArea = styled.div`
    position: relative;    
    `

    const Heading = styled.div`
    text-align: center;
    `

    const Repositorys= styled.div`
    display: flexbox;
    justify-content: space-between;
    flex-wrap: nowrap;
    overflow: auto;
    white-space: nowrap:
    padding: ${Vertical} 0;
    width:92vw;
        
    `

    const Box = styled.div`
    display: grid;
    width: 300px;
    text-align: center;
    padding: 16px 16px;
    margin: ${Vertical} 16px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 30px;
    
    @media screen and (max-width: 690px)
        {        
        width:140px;        
        }
    `
    
    useEffect(() => {
        gsap.from('#skewBox', {
            scrollTrigger: {
                trigger: "#skewBox",
                start: "top 90%",
                end: "top 0%",
                scrub: true,
            },
            scale: 2,
            y: '-40vh',
            duration: 1,
            opacity:0.1
            
        })    
        
        gsap.to('#skewBox', {
            scrollTrigger: {
                trigger: "#skewBox",
                start: "bottom 140%",
                end: "bottom 50%",
                scrub: true,
            },
            y: '-20vh',
            duration: 1,
            opacity:0.1
            
        })  
        
        },[]) 


    return(<MyGitArea id={'skewBox'}>
        <Container dark={false} id={"myGit"} top={true} bottom={true} >        
            <Heading >
                <h1>{Texts.title[`${location.pathname}`]}</h1>
                <h2>{Texts.subTitle[`${location.pathname}`]}</h2> 
            </Heading>
            <Repositorys>
                {ShowCase.map((repositorio) => {return(
                <Box key={repositorio.api}>
                <Repository
                    action={Texts.action[`${location.pathname}`]}
                    api={repositorio.api}
                    title={repositorio.title[`${location.pathname}`]}
                    description={repositorio.description[`${location.pathname}`]}
                />
                </Box>          
                
                )})}
            </Repositorys>
        </Container>
        </MyGitArea>
        )
}