import styled from 'styled-components'
import Button from "components/Button";
import { FaSearch, FaSortAmountDown, FaSortAmountUp } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { PrimaryColor, ThickFont } from "style/_variables";
import { Texts } from './Filters.texts.js'
import { useEffect } from 'react';


export default function Filters ({search, sortOrder, setSortOrder, setSearch, setTermSelected}) {

    const location = useLocation()

    
    const Filters = styled.div`
    display: flex;
    justify-content: center;
    padding: 0 0 20px 0;
    gap: 12px;
    `

    const SearchBox = styled.div`

    background-color: ${PrimaryColor};
    border-radius: 12px;
    display: flex;
    margin: 12px 0;
    gap: 9px;
    height: 2.1vh;
    padding: 9px 9px;
    border: 1px solid grey;
    cursor: pointer;


    input{
    background-color: $grey;
    border: none;
    font-family: ${ThickFont};
    font-size: medium;
    outline: none;
    width: 140px;

    &::placeholder {
    color: #4c4d5e;
    text-align: center;

    &::placeholder {
        color: #4c4d5e;
    }
    }
    `

    useEffect(() => {
        const input = document.querySelector("input")
        input.focus();
    },search)

return(
    <Filters >
        
        <SearchBox>
            <input
                value={search}
                                        
                onChange={ (event) => setSearch(event.target.value) }                    
                
                placeholder={Texts.keywords[`${location.pathname}`]} />
            <FaSearch size={22} color={"black"} onClick={() => setTermSelected(search)} />
        </SearchBox>
        
        <Button active={true}>
                <h4 onClick={() =>
                    setSortOrder(!sortOrder)}>{}
                    {Texts.sortBy[`${location.pathname}`]}
                    {sortOrder ? <FaSortAmountUp /> : <FaSortAmountDown />}                    
                </h4>
        </Button>           
    
    </Filters>

)


}