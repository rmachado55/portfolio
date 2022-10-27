import { IoSwapHorizontalOutline } from "react-icons/io5"
import { Horizontal, NarrowFont, PrimaryColor, ThickFont, Vertical } from "style/_variables"
import styled from 'styled-components'


export default function FooterBar () {

    const Footer = styled.footer`
    background-color: ${PrimaryColor};
    font-family: ${NarrowFont};
    padding: ${Vertical} ${Horizontal};
    text-align: center;
    `

    return(

        <Footer><p>Copyrighted Ricardo Machado - 2022</p></Footer>

    )
}