import { useLocation } from 'react-router-dom';
import { Texts } from '../Projects.texts';
import styled from 'styled-components';
import { Vertical } from 'style/_variables.js';
export const Title = () => {

    const location = useLocation();

    const Box = styled.div`
    background-image: url('assets/img/YellowNeonBoard.png');
    background-size: 90% 90%;
    background-position: center;
    background-repeat: no-repeat;
    width: 50%;
    margin: auto;    

    @media screen and (max-width: 780px)
        {
            background-size: 90% 74%;
            margin-top: 40vh;
            padding: 12px 40px;
                    }
        
    `

    const Heading = styled.h1`
    text-align: center;
    padding: ${Vertical} 0;
    ` 


    return(
        <Box id={'ProjectsNeon'}>
            <Heading >{Texts.title[`${location.pathname}`]}</Heading>
        </Box>
    )
}