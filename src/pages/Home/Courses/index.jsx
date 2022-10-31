import Container from "components/Container";
import { useLocation } from "react-router-dom";
import Table from "./Table";
import { useEffect, useState } from "react";
import { CertificatesList } from "./Table/CertificatesList";
import ShowCertificate from "./ShowCertificate";
import PageSelector from "./PageSelector";
import Filters from "./Filters";
import Heading from "./Heading";

export default function Courses() {

    const [search, setSearch] = useState("")
    const [sortOrder, setSortOrder] = useState(true)
    const [list, setList] = useState(CertificatesList);
    const [activePage, setActivePage] = useState(1);
    const [showCertificate, setShowCertificate] = useState(false);

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
    
    return(
        <Container dark={true} id={"certificates"}>

            <Heading />

            <Filters
                search={search}
                sortOrder={sortOrder}
                setSortOrder={setSortOrder}
                setSearch={setSearch}
            />
          
            <ShowCertificate showCertificate={showCertificate} setShowCertificate={setShowCertificate} />

            <Table list={list} activePage={activePage} />

            <PageSelector list={list} activePage={activePage} setActivePage={setActivePage}/>

        </Container>
    )
}