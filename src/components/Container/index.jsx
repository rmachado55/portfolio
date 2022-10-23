import styled from 'styled-components';
import {DarkColor, SecondaryColor, PrimaryColor,  PaddingHorizontal, PaddingVertical, ThickFont, NarrowFont, ContrastColor} from 'style/_variables.js';

export default function Container ({children, title, dark }) {
    
    const Theme = dark

    const Container = styled.section`

        background-color: ${Theme ? DarkColor : SecondaryColor};
        padding: ${PaddingVertical} ${PaddingHorizontal};
        color: ${Theme ? ContrastColor : DarkColor};
        font-family: ${Theme ? NarrowFont : ThickFont};
    `
    const Title = styled.h1`
        font-family: ${Theme ? ThickFont : NarrowFont};
        color: ${Theme ? PrimaryColor : DarkColor} ;
        text-shadow: ${Theme ? `1px 0 2px rgba(255, 255, 255, 0.3)`: 'none'};

    `

    return(
        <Container>
            <Title>{title}</Title>
            {children}
        </Container>
    )
}