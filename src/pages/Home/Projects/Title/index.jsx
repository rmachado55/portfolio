import { useLocation } from 'react-router-dom';
import { Texts } from '../Projects.texts';
import styled from 'styled-components';
import { Vertical } from 'style/_variables.js';
export const Title = () => {

    const location = useLocation();

    const Box = styled.div`
    background-image: url('assets/img/YellowNeonBoard.png');
    background-size: 50% 90%;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;

    @media screen and (max-width: 780px)
        {
            background-size: 92% 52%;
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