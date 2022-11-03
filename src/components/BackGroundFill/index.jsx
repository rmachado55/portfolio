import styled from 'styled-components'
import { DarkColor } from "style/_variables.js";

export const BackGroundFill = ({height, children}) => {
    

    const BackGround = styled.div`   
    width: 100%;
    padding: ${height} 0 0 0;
    z-index: 0;
    background-color: ${DarkColor};
     `

    return(
        <BackGround>
            {children}
        </BackGround>

    )

}
