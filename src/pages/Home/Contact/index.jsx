import Container from "components/Container";
import { Texts } from './Contact.texts'
import { useLocation } from "react-router-dom";
import {SiGithub, SiLinkedin, SiWhatsapp, SiHouse} from 'react-icons/si'
import {BsFillHouseDoorFill} from 'react-icons/bs'
import styled from 'styled-components'
import {FiMail} from 'react-icons/fi'

export default function Contact () {

    const location = useLocation()

    const Wrapper = styled.div`
    display: flex;

    @media screen and (max-width: 690px)
        {        
        display:block;
        text-align: center;       
        }
    `

    const Title = styled.div`    
    width:40vw;
    text-align: center;
    
    @media screen and (max-width: 690px)
        {        
        width:90vw;
        }
    `
    

    const Links = styled.div`
    display: block;
    width: 50vw;
    line-height: 340%;

    }
    @media screen and (max-width: 690px)
        {        
        width:90vw;
        line-height: 200%;     
        }
    `

    return(
        <Container id="contact" dark={false}>
            <Wrapper>
                <Title>
                    <h1>{Texts.title[`${location.pathname}`]}</h1>
                </Title>
                <Links>
                <h3><FiMail/>ricardo.machado7@hotmail.com</h3>
                <a href="https://api.whatsapp.com/send?phone=5519981732744" ><h3><SiWhatsapp/> +55 19 98173-2744</h3></a>
                <a href="https://www.linkedin.com/in/ricardomachado7/"><h3><SiLinkedin/> /ricardomachado7/</h3></a>
                <a href="https://www.github.com/rmachado55/"><h3><SiGithub/> /rmachado55</h3></a>
                <h3><BsFillHouseDoorFill/> Campinas - SP</h3>
                </Links>
            </Wrapper>
        </Container>
    )
}