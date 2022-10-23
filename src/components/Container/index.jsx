import styled from 'styled-components';
import {DarkColor, SecondaryColor, PrimaryColor,  PaddingHorizontal, PaddingVertical, ThickFont, NarrowFont} from 'style/_variables.js';

export default function Container ({ title, children, dark }) {


    const Container = styled.section`
        background-color: ${props => props.dark ? DarkColor : SecondaryColor};
        padding: ${PaddingVertical} ${PaddingHorizontal};
        color: ${props => props.dark ? SecondaryColor : DarkColor};
    `
    const Title = styled.h1`
        font-family: ${props => props.dark ? ThickFont : NarrowFont};
        color: ${props => props.dark ? PrimaryColor : DarkColor} ;
        text-shadow: ${props => props.dark? `1px 0 2px rgba(255, 255, 255, 0.3)`: 'none'};

    `

    return(
        <Container>
            <Title>{title}</Title>
            {children}
        </Container>
    )
}