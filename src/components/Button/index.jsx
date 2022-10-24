import styled from 'styled-components';
import {ContrastColor, DarkColor, ThickFont, PrimaryColor} from 'style/_variables';

export default function Button ({active, children}){

    const Active = active

    const Button = styled.button`
    border-radius: 12px;
    padding: 0 8px;
    margin: 12px 0;
    width: fit-content;
    background-color: ${Active ? PrimaryColor : ContrastColor};
    color: ${DarkColor};
    font-family: ${ThickFont}
    `

    return(
        <Button>{children}</Button>
    )
}