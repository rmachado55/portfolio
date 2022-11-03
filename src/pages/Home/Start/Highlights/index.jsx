import {Texts} from './Highlights.texts';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components'
import { Horizontal, Vertical } from "style/_variables";

export const Highlights = () => {
    
    const location = useLocation();
    
    const Box = styled.div`
    animation-name: smooth;
    animation-duration: 3s;
    animation-timing-function: ease-in-out;  
    display: block;
    z-index: 100;    
    padding: 90px 0;
    width: 55vw;
    text-align: justify;

    h3{
        padding: 30px 0;
    }

    @media screen and (max-width: 690px) {
        margin: ${Vertical} ${Horizontal};
        text-align: center;
        width: 90vw;
        height: 50vh;
        
        h3{
            padding: 14px 0;
        }
        
    }

    @keyframes smooth {
        from {
            opacity: 0;
            scale:1.5;        
        }
        to {
            opacity: 100%;
            scale:1;
            
        }
        `

return(
    <Box id={'highlights'}>
        <h3 >{Texts.high01[`${location.pathname}`]}</h3>
        <h3 >{Texts.high02[`${location.pathname}`]}</h3>
        <h3 >{Texts.high03[`${location.pathname}`]}</h3>            
    </Box>    
)

}
       