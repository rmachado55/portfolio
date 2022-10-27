import Container from "components/Container";
import { Texts } from './Projects.texts.js'
import { useLocation } from "react-router-dom";
import Project from "./Project/index.jsx";
import styled from 'styled-components'
import { Vertical } from "style/_variables.js";

export default function Projects () {

    const Title = styled.h1`
    text-align: center;
    padding-top: ${Vertical};
    ` 

    const location = useLocation();

    return(
        <Container id={'projects'} dark={true}>
        <Title >{Texts.title[`${location.pathname}`]}</Title>
        <Project />
        </Container>
    )
}