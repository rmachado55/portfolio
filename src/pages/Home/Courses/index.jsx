import Container from "components/Container";
import { useLocation } from "react-router-dom";
import styled from 'styled-components';
import {Texts} from './Courses.texts'
import{FaSearch, FaSortAmountDown,FaSortAmountUp} from 'react-icons/fa';
import { ContrastColor, DarkColor, PrimaryColor, SecondaryColor, ThickFont, Vertical } from "style/_variables";
import Table from "./Table";
import Button from "components/Button";
import { useEffect, useState } from "react";
import { CertificatesList } from "./Table/CertificatesList";

export default function Courses() {

    const [search, setSearch] = useState("")
    const [sortOrder, setSortOrder] = useState(true)
    const [list, setList] = useState(CertificatesList);

    const location = useLocation()


    
    function searchButton(title) {
        const regex = new RegExp(search, 'i');
        return regex.test(title)
    }

    function sortList(newTable){
     
    return newTable.sort(
            
            (sortOrder ?
                (a,b) => a.date > b.date ? 1 : -1 :
                (a,b) => a.date > b.date ? -1 : 1)            
            )    
          
    }

    useEffect(() => {
        const newTable = CertificatesList.filter(item => searchButton(item.area) || searchButton(item[`${location.pathname}`]));
        setList(sortList(newTable));
    },[search, sortOrder])

    const count = CertificatesList.filter(item => item).length
    const sum = CertificatesList.reduce((acc, o) => acc + parseInt(o.hours), 0)

    const Heading = styled.div`
        text-align: center;
        padding-bottom: ${Vertical};
    `
    const Filters = styled.div`
        display: flex;
        justify-content: space-around;
        padding: 20px 0;
    `

    const SearchBox = styled.div`
        align-items: center;
        background-color: ${PrimaryColor};
        border-radius: 15px;
        
        display: flex;
        gap: 8px;
        height: 42px;
        justify-content: space-between;
        padding: 0 15px;
        width: 180px;
        margin-top: 13px;
    
    
    input{
        background-color: $grey;
        border: none;
        font-family: ${ThickFont};
        font-size: large;
        opacity: 90%;
        outline: none;
        width: 200px;
        &::placeholder {
        color: #4c4d5e;
        
        &::placeholder {
            color: #4c4d5e;
          }
        }
    `
    return(
        <Container dark={true} id={"certificates"}>

            <Heading>
                <h1>{count} {Texts.certifications[`${location.pathname}`]}</h1>
                <h2>{sum} {Texts.hoursOf[`${location.pathname}`]}</h2>
            
            </Heading>

            <Filters >
            <SearchBox>
                <input
                    value={search}
                    autoFocus="autofocus"
                    onChange={(event) => { event.preventDefault(); setSearch(event.target.value); } }
                    placeholder={Texts.keywords[`${location.pathname}`]} />
                <FaSearch size={28} color={"black"} />
            </SearchBox>
            <Button active={true}>
                    <h4 onClick={() =>
                        setSortOrder(!sortOrder)}>{}
                        {Texts.sortBy[`${location.pathname}`]}
                        {sortOrder ? <FaSortAmountUp /> : <FaSortAmountDown />}
                        
                    </h4>
            </Button>           
            </Filters>
            

        <Table list={list} />
                
        </Container>
    )
}