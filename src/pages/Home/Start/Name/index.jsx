import Ricardo from 'assets/img/ricardo_desenho.png';
import styled from 'styled-components'
import { Horizontal, } from "style/_variables";

export const Name = () => {

    const Box = styled.div`
    padding: 5vh ${Horizontal};
    display: block;
    text-align: center;
    width: 31vw;
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
    left: 9vw;
    top: 34vh; 
    width: 290px;        
    filter: opacity(40%);   
    transition: width 5s;
    z-index: -1;
    
    @media screen and (max-width: 690px)
        {                     
            
            left:24vw;
            top: 26vh;
            width: 200px;            

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

