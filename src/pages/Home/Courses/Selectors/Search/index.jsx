import styled from 'styled-components'
import { ThickFont } from 'style/_variables.js'
import { useFormAction, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { render } from 'react-dom'


const Form = ({search, setSearch}) => {

    const location = useLocation()

        
    const Input = styled.input`
       {
        background-color: $grey;
        border: none;
        font-family: ${ThickFont};
        font-size: medium;
        outline: none;
    
        &::placeholder {
        color: #4c4d5e;
        text-align: center;
        }
        `
        
        return(
            <input                       
                id={"search"}                
                type="text"
                key="search1"                               
                value={search}                                             
                onChange={e => setSearch(e.target.value)}                
                placeholder={"example"}          
            />)
        }

export default function Search({search, setSearch}) {
    
    return [
    <Form search={search} setSearch={setSearch}/> 
    ]

}