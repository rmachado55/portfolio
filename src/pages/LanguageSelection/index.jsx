import { Link } from "react-router-dom"
import { Horizontal, NarrowFont, PrimaryColor, SecondaryColor, ThickFont, Vertical } from "style/_variables"
import styled from 'styled-components'
import Splash from 'assets/img/splash.png'
import { useEffect, useState } from "react";



export const LanguageSelection = ({setLanguage}) => {

        const [number, setNumber] = useState(0);
        
        useEffect(() => {
          const interval = setInterval(
            () => setNumber(Math.floor(Math.random() * 90 + 1)),
            3900
          );
      
          return () => {
            clearInterval(interval);
          };
        });
      
    
    const Wrapper = styled.section`
    background-color: ${PrimaryColor};    
    z-index: -1;
    width: 100%;
    height: 100%;
    position:absolute;

    @media screen and (max-width: 690px)
        {
        height: 94vh;
        padding: 3vh 0;
        }   
    `
    
    const Content = styled.div`
    position: fixed;
    height: 40vh;
    width:100%;
    text-align: center;
    display: block;
    padding: 30vh 0;
    justify-content: space-around;

    @media screen and (max-width: 690px)
        {
        height: 94vh;
        padding: 3vh 0;
        }    
    `
    
    

    const Img = styled.div`
    animation-name: splash;
    animation-duration: 4s;
    animation-timing-function: ease-out;
    position: absolute;
    z-index: -1;
    
    img{
    margin: ${number*0.4}vh 2vw 2vh ${number*0.3}vw ;
    width: 50vw;
    transform: rotate(${number*1.5}deg);
    }

    @media screen and (max-width: 690px)
    
    img{
    height:30vh;
    }

    @keyframes splash {
    0% {
        scale: 1.0;
        opacity: 1;
    }
    100% {
        scale: 0.9;
        opacity :0}
    }

    

    `

    const Greeting = styled.div`
    z-index: 2;
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
    z-index: 2;

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
    z-index: 2;
    display: flex;    
    justify-content: space-around;

    @media screen and (max-width: 690px)
        {
        display: grid;
        }    

    `

    const Option = styled.div`
          
        z-index: 2;
        font-family: ${NarrowFont};
        width: 160px;
        border-radius: 20px;
        padding: calc(0.5*${Vertical}) ${Horizontal};
        margin-top: 10px;
        background-color: ${SecondaryColor};

        :hover{
            scale: 1.1;             
        }
        
    `


    return(<>
        <Wrapper>

        </Wrapper>
        
        <Img>
                <img src={Splash} />
        </Img>  
            <Content> 
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
             
        </Content>
        
        </>
    )
}