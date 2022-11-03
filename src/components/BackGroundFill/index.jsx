import styled from 'styled-components'
import { DarkColor } from "style/_variables.js";

export const BackGroundFill = ({height, children}) => {
    

    const BackGround = styled.div`   
    width: 100%;
    height: ${height};
    z-index: 0;
    background-color: ${DarkColor};
    
    @media screen and (max-width: 780px)
    {
        height: 90vh;
    } 

`

    return(
        <BackGround>
            {children}
        </BackGround>

    )

}
