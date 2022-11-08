import styled from 'styled-components'
import { PrimaryColor, ThickFont } from 'style/_variables.js'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { Texts } from '../Selectors.texts'


export default function Search(search) {
    return(<Box search={search} />)
}
    
    const Box = (search) => {

    const location = useLocation()

    const [typing, setTyping] = useState()
        
    const Input = styled.input`
       {
        background-color: $grey;
        border: 1px solid ${PrimaryColor};
        font-family: ${ThickFont};
        font-size: medium;
        outline: none;
        height: 30px;
        width: 160px;
        margin: 14px 0;
        border-radius: 12px;
    
        &::placeholder {
        color: #4c4d5e;
        text-align: center;
        }
        `
        function typeAndDontMoveForChristSake (e) {
            const inputFix = document.getElementById('search')
            inputFix.setAttribute.autoFocus(true)
            setTyping(e.target.value)

        }

        return(
            <Input              
                preventScroll={true}    
                id={"search"}                
                type="text"
                value={typing}                                                              
                onChange={e => typeAndDontMoveForChristSake(e)}                
                placeholder={Texts.keywords[location.pathname]}          
            />)
}