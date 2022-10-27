import Container from "components/Container";
import { Texts } from './Contact.texts'
import { useLocation } from "react-router-dom";
import {SiGithub, SiLinkedin, SiWhatsapp} from 'react-icons/si'
import styled from 'styled-components'

export default function Contact () {

    const location = useLocation()

    const Wrapper = styled.div`
    display: flex;
    `

    const Title = styled.div`
    display: block;
    width: 50vw;
    text-align: center;
 
    `

    const Links = styled.div`
    display: block
    
    `

    return(
        <Container id="contact" dark={false}>
            <Wrapper>
                <Title>
                    <h1>{Texts.title[`${location.pathname}`]}</h1>
                </Title>
                <Links>
                <h3>ricardo.machado7@hotmail.com</h3>
                <a href="https://api.whatsapp.com/send?phone=5519981732744" ><h3><SiWhatsapp/>+55 19 98173-2744</h3></a>
                <a href="https://www.linkedin.com/in/ricardomachado7/"><h3><SiLinkedin/>/ricardomachado7/</h3></a>
                <a href="https://www.github.com/rmachado55/"><h3><SiGithub/>/rmachado55</h3></a>
                </Links>
            </Wrapper>
        </Container>
    )
}