import { Link } from "react-router-dom"
import { ContrastColor, Horizontal, NarrowFont, PrimaryColor, ThickFont, Vertical } from "style/_variables"
import styled from 'styled-components'


export default function LanguageSelection ({setLanguage}){

    const Full = styled.div`
    background-color: ${PrimaryColor};
    height: 52vh;
    text-align: center;
    display: grid;
    padding: 24vh ${Horizontal};

    h1{
        font-family: ${ThickFont};
    }
    h4{
        font-family: ${NarrowFont};
    }
    `

    const Options = styled.div`
        display: flex;
        margin: auto;
    `

    const Option = styled.div`
        font-family: ${NarrowFont};
        border: 2px solid ${ContrastColor};
        width: 200px;
        border-radius: 10px;
        padding: ${Vertical} ${Horizontal};
        margin: 20px;        
    `


    return(
        <Full>
            <h1>Welcome! Bem-Vindo ! Beinvenido !</h1>
            <h4>Choose a language to begin : | Escolha um idioma para começar: | Elije un idioma para empezar</h4>
            <Options>    
                <Link to="/portfolio/en" >
                    <Option onClick={() => {setLanguage('/portfolio/en')}}>
                        <h2>English</h2>
                        </Option>
                        </Link>
                <Link to="/portfolio/pt" >
                    <Option onClick={() => {setLanguage('/portfolio/pt')}}>
                        <h2>Português</h2>
                        </Option>
                        </Link>
                <Link to="/portfolio/es" >
                    <Option onClick={() => {setLanguage('/portfolio/es')}}>
                        <h2>Español</h2>
                        </Option>
                        </Link>
            </Options>
        </Full>
    )
}