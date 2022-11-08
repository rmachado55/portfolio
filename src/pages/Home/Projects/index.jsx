import { Container } from "components/Container";
import Project from "./Project/index.jsx";
import styled from 'styled-components'
import NeonArrows from 'assets/img/setas.png'
import { Title } from "./Title/index.jsx";
import { BackGroundFill } from "components/BackGroundFill/index.jsx";

export default function Projects () {


    const ArrowLeft = styled.img`
    width: 20vw;
    top: 64vh;
    left: 20vw;
    position: absolute;
    transform: rotate(90deg);

    @media screen and (max-width: 780px)
    {
        left:8vw;
        width:160px;
        top: 73vh;
    } 
    `
    const ArrowRight = styled.img`
    width: 20vw;
    top: 64vh;
    right: 20vw;
    rotate: 90deg;
    position: absolute;
    
    @media screen and (max-width: 780px)
        {
            right: 6vw;
            width:160px;
            top: 74vh;
        }
        `

    return(<>
            <BackGroundFill height={'100vh'}>
                <ArrowLeft src={NeonArrows} id={'ArrowLeft'}/>
                <ArrowRight src={NeonArrows} id={'ArrowRight'} />
            </BackGroundFill>
            <Container id={'projects'} dark={true} >
                <Title/>
                <Project />
            </Container>
            </>
    )
}