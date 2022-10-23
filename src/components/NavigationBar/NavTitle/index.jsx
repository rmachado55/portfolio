import { NarrowFont } from 'style/_variables'
import styled from 'styled-components'


export default function NavTitle () {

    const Title = styled.div`
    font-family: ${NarrowFont};    
    `

    return(
        <Title>
            <h1>Ricardo Machado</h1>
            <p>Portfolio</p>
        </Title>
    )
}