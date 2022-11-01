import { Link } from "react-router-dom"
import { Break, ContrastColor, Horizontal, NarrowFont, PrimaryColor, SecondaryColor, ThickFont, Vertical } from "style/_variables"
import styled from 'styled-components'



export default function LanguageSelection ({setLanguage}){

    const Full = styled.div`
    background-color: ${PrimaryColor};
    height: 80vh;
    text-align: center;
    display: block;
    padding: 10vh ${Horizontal};

    
    @media screen and (max-width: 690px)
        {
        height: 94vh;
        padding: 3vh 0;
        }    

    `

    const Greeting = styled.div`
    display: flex;    
    justify-content: space-around;
    font-family: ${ThickFont};
    
    @media screen and (max-width: 690px)
        {
        display: grid;
        }    

    ` 
    
    const CallToAction = styled.div`
    display: flex;
    font-family: ${NarrowFont};
    justify-content: space-around;
    font-style: italic;

    p{
        padding: 10px 0;
    }
   

    @media screen and (max-width: 690px)
        {
        margin: 4vh ${Horizontal};
        display: grid;
        }  
    
    `

    const Options = styled.div`
    display: flex;    
    justify-content: space-around;

    @media screen and (max-width: 690px)
        {
        display: grid;
        }    

    `

    const Option = styled.div`
        font-family: ${NarrowFont};
        width: 160px;
        border-radius: 20px;
        padding: calc(0.5*${Vertical}) ${Horizontal};
        margin-top: 10px;
        background-color: ${SecondaryColor};
        
    `


    return(
        <Full>            
            <Greeting>
            <h1>Welcome!</h1><h1>Bem-Vindo!</h1><h1>¡Beinvenido!</h1>
            </Greeting>
            <CallToAction>
            <p>Choose a language to begin:</p><p>Escolha um idioma para começar:</p><p>Elije un idioma para empezar</p>
            </CallToAction>
            <Options>    
                <Link to="/en#home" >
                    <Option onClick={() => {setLanguage('/en')}}>
                        <h3>English</h3>
                        </Option>
                        </Link>
                <Link to="/pt#home" >
                    <Option onClick={() => {setLanguage('/pt')}}>
                        <h3>Português</h3>
                        </Option>
                        </Link>
                <Link to="/es#home" >
                    <Option onClick={() => {setLanguage('/es')}}>
                        <h3>Español</h3>
                        </Option>
                        </Link>
            </Options>
        </Full>
    )
}