import { Container } from "components/Container";
import Project from "./Project/index.jsx";
import styled from 'styled-components'
import NeonArrows from 'assets/img/setas.png'
import { Title } from "./Title/index.jsx";
import { BackGroundFill } from "components/BackGroundFill/index.jsx";

export default function Projects () {


    const ArrowLeft = styled.img`
    width: 20vw;
    top: 62vh;
    left: 25vw;
    position: absolute;
    transform: rotate(90deg);

    @media screen and (max-width: 780px)
    {
        left:5vw;
        width:180px;
        top: 71vh;
    } 
    `
    const ArrowRight = styled.img`
    width: 20vw;
    top: 62vh;
    right: 25vw;
    rotate: 90deg;
    position: absolute;
    
    @media screen and (max-width: 780px)
        {
            right: 5vw;
            width:180px;
            top: 71vh;
        }
        `

    return(<>
            <BackGroundFill height={'100vh'}>
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