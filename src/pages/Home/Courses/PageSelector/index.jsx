import { ContrastColor, DarkColor, PrimaryColor, Vertical } from 'style/_variables';
import styled from 'styled-components';



export default function PageSelector ({activePage, setActivePage, list}) {

    const totalPages = Math.ceil(list.length/10)
    const pages = []

    for( let i = 1; i <= totalPages ; i++){
        pages.push(i)
    }

    const Box = styled.div`
    justify-content: space-around;
    margin: ${Vertical} 22%;
    display: flex;        

    @media screen and (max-width: 690px){
        margin: ${Vertical} 0;
    }  
    
    div{
        cursor: pointer;
        text-align: center;
        border-radius: 12px;
        padding: 8px 12px;
        border: 1px solid ${PrimaryColor}
    }
    `


    return(
        <Box>
        {pages.map( number => 
            <div onClick={() => setActivePage(number)}
                style={{backgroundColor: ( number === activePage ? PrimaryColor : 'none')}} >
                    <h4 style={{color :( number === activePage ? DarkColor : ContrastColor )}}>{number}</h4></div>
        )}
        </Box>)




}