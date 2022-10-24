import Container from "components/Container";
import { Texts } from './Projects.texts.js'
import { useLocation } from "react-router-dom";
import Project from "./Project/index.jsx";
import { ProjectLIst } from "./Project/ProjectList.js";

export default function Projects () {

    const location = useLocation();

    return(
        <Container dark={true}>
        <h1>{Texts.title[`${location.pathname}`]}</h1>
        <Project />
        </Container>
    )
}