import { useLocation } from 'react-router-dom';
import { Texts } from '../Projects.texts';
import styled from 'styled-components';
import { Vertical } from 'style/_variables.js';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";


export const Title = () => {

    const location = useLocation();

    const Box = styled.div`
    background-image: url('assets/img/YellowNeonBoard.png');
    background-size: 50% 90%;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    `

    const Heading = styled.h1`
    text-align: center;
    padding: ${Vertical} 0;
    ` 

    useEffect(() => {     
    
        gsap.from('#ProjectsNeon', {
            scrollTrigger: {
                trigger: '#home',
                start: "bottom 85%",
                end: "bottom -10%",
                scrub: true,                
            },
            opacity: '0.5',
            y: '-5vw',
            scale: 1.5,                    
           
            })
        
    },[])

    return(
        <Box id={'ProjectsNeon'}>
            <Heading >{Texts.title[`${location.pathname}`]}</Heading>
        </Box>
    )
}