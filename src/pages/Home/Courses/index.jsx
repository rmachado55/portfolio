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
    width:74%;
    margin: 0 13%;
    `

    return(<>
        <BackGroundFill height={'90vh'}>
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