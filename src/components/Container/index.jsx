import styled from 'styled-components';
import {DarkColor, SecondaryColor, PrimaryColor, Vertical, Horizontal, ThickFont, NarrowFont, ContrastColor} from 'style/_variables.js';

export default function Container ({children, dark, id}) {
    
    const Theme = dark

    const Container = styled.section`

        background-color: ${Theme ? DarkColor : SecondaryColor};
        padding:  ${Vertical} ${Horizontal};
        color: ${Theme ? ContrastColor : DarkColor};
        font-family: ${Theme ? NarrowFont : ThickFont};

        h1 {
            color: ${PrimaryColor};
            font-family: ${Theme ? ThickFont : NarrowFont};
            text-shadow: ${Theme ? '1px 0 2px rgba(255, 255, 255, 0.3)': 'none'};
        }
        h2 {
            color: ${Theme ? SecondaryColor : DarkColor };
            font-family: ${Theme ? ThickFont : NarrowFont};
            text-shadow: ${Theme ? '1px 0 2px rgba(255, 255, 255, 0.3)': 'none'};
        }

    `

    return(
        <Container id={id}>
            {children}
        </Container>
    )
}