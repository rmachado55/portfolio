/* eslint-disable react-hooks/exhaustive-deps */
import { Container } from "components/Container";
import { useLocation } from "react-router-dom";
import Table from "./Table";
import { useEffect, useState } from "react";
import { CertificatesList } from "./Table/CertificatesList";
import PageSelector from "./PageSelector";
import { Selectors } from "./Selectors";
import Heading from "./Heading";
import { BackGroundFill } from "components/BackGroundFill";
import NeonBilboard from 'assets/img/neon.png'
import styled from 'styled-components'

export const Courses = () => {

    const [search, setSearch] = useState("")
    const [sortOrder, setSortOrder] = useState(true)
    const [list, setList] = useState(CertificatesList);
    const [activePage, setActivePage] = useState(1);
    
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
        const newTable =
        CertificatesList.filter(item =>
            searchButton(item.area) ||
            searchButton(item[`${location.pathname}`]))
            setList(sortList(newTable));
            setActivePage(1);
    },[search, sortOrder])

    
    const NeonSign = styled.img`       
    width: 30%;
    margin: 101vh 0 0 35%;
    animation-name: flash;
    animation-duration: 6s;
    animation-iteration-count: infinite;


    @media screen and (max-width: 780px)
    {
        width: 60%;
        margin: 100vh 20% 0 20%;
    }
    
    @keyframes flash{
        0%{ opacity: 0.2 }
        40%{ opacity: 1 }
        70%{ opacity: 0.4 }
        97%{ opacity: 1 }
        98%{ opacity: 0.4 }
        100%{ opacity: 1 }
    }
    `

    return(<>
        <BackGroundFill height={'124vh'}>
            <NeonSign id={'NeonSign'} src={NeonBilboard}/>
        </BackGroundFill>
            
        <Container dark={true} id={"certificates"}>

            <Heading />
            
            <Selectors
                search={search}
                setSearch={setSearch}   
                sortOrder={sortOrder}
                setSortOrder={setSortOrder}                               
            />                
            
            <Table list={list} activePage={activePage}/>

            <PageSelector list={list} activePage={activePage} setActivePage={setActivePage}/>

        </Container>
        </>
    )
}