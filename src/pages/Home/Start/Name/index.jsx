import Ricardo from 'assets/img/ricardo_desenho.png';
import styled from 'styled-components'
import { Horizontal, } from "style/_variables";

export const Name = () => {

    const Box = styled.div`
    padding: 5vh ${Horizontal};
    display: block;
    text-align: center;
    width: 32vw;
    height:70vh;
    
    
    @media screen and (max-width: 690px)
        {
        padding: 0 ${Horizontal};
        height: 25vh;
        width: 90vw;           
        }    
    `

    const Bg = styled.img`
    position: absolute;
    left: 12vw;
    top: 34vh; 
    width: 300px;        
    filter: opacity(60%) sepia(60%);   
    transition: width 5s;
    
    @media screen and (max-width: 690px)
        {                     
            
            left:28vw;
            top: 26vh;
            width: 190px;            

        }
    `

    return(
        <Box>
            <h1>Ricardo Machado</h1>
            <h2>| Front-End</h2>
            <Bg src={Ricardo} id={'face'} alt={'efeito de fundo'}/>
        </Box>


    )
}

