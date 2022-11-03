import styled from 'styled-components'
import Button from "components/Button";
import { FaSearch, FaSortAmountDown, FaSortAmountUp } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { PrimaryColor} from "style/_variables";
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

    const SearchBox = styled.div`
    background-color: ${PrimaryColor};
    width: 190px;
    border-radius: 12px;
    display: flex;
    margin: 12px 0;
    gap: 9px;
    height: 2.1vh;
    padding: 9px 9px;
    border: 1px solid grey;    
    `

return(
    <Box>
        <SearchBox>            
            <Search search={search} setSearch={setSearch}/>           
            <FaSearch size={28} color={"black"}/>
        </SearchBox>                   
        <Button active={true}>
                <h4 onClick={() => setSortOrder(!sortOrder)}>
                    {Texts.sortBy[`${location.pathname}`]}
                    {sortOrder ? <FaSortAmountUp/> : <FaSortAmountDown/>}                    
                </h4>
        </Button>           
    
    </Box>
)}