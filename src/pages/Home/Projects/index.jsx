import { Container } from "components/Container";
import Project from "./Project/index.jsx";
import styled from 'styled-components'
import NeonArrows from 'assets/img/setas.png'
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { Title } from "./Title/index.jsx";
import { BackGroundFill } from "components/BackGroundFill/index.jsx";


gsap.registerPlugin(ScrollTrigger);


export default function Projects () {


    const ArrowLeft = styled.img`
    width: 20vw;
    top: 60vh;
    left: 25vw;
    position: absolute;
    transform: rotate(90deg);
    `
    const ArrowRight = styled.img`
    width: 20vw;
    top: 60vh;
    right: 25vw;
    rotate: 90deg;
    position: absolute;
    `

    useEffect(() => {     
    
        gsap.to('#ArrowLeft', {
            scrollTrigger: {
                trigger: '#ProjectsBackground',
                start: "top -20%",
                end: "top -110%",
                scrub: true
                
            },
            y: '50vh',
            x:'-20vw',
            scale: ('0.6'),     
            rotation: '0'     
            })

        gsap.to('#ArrowRight', {
            scrollTrigger: {
                trigger: '#ProjectsBackground',
                start: "top -20%",
                end: "top -110%",
                scrub: true
                
            },
            y: '50vh',
            x:'20vw',
            scale: ('0.6'),             
            rotation: '180'     
            })
    },[])



    return(<>
            <BackGroundFill height={'110vh'}>
                <ArrowLeft src={NeonArrows} id={'ArrowLeft'}/>
                <ArrowRight src={NeonArrows} id={'ArrowRight'} />
            </BackGroundFill>
            <Container id={'projects'} dark={true} top={false} bottom={false}>
                <Title/>
                <Project />
            </Container>
            </>
    )
}