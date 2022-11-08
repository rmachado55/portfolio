import styled from 'styled-components'
import Button from "components/Button";
import { FaSearch, FaSortAmountDown, FaSortAmountUp } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { Texts } from './Selectors.texts.js'
import Search from './Search/index.jsx';

export const Selectors = ({search, sortOrder, setSortOrder, setSearch}) => {

    const location = useLocation()
    
    const Box = styled.div`
    display: flex;
    justify-content: center;
    padding: 0 0 20px 0;
    gap: 12px;
    `

return(
    <Box>
        <Search search={search}/>
        <Button active={true}>
            <h4 onClick={() => setSearch(document.getElementById('search').value) }>{Texts.search[`${location.pathname}`] + " "}         
            <FaSearch color={"black"} /></h4>
        </Button>
        
        <Button active={true}>
                <h4 onClick={() => setSortOrder(!sortOrder)}>
                    {Texts.sortBy[`${location.pathname}`]}
                    {sortOrder ? <FaSortAmountUp/> : <FaSortAmountDown/>}                    
                </h4>
        </Button>           
    
    </Box>
)}