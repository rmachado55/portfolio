import axios from 'axios'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import Button from 'components/Button'
import { BadgesList } from 'components/Bagdes/badgesList'

export default function Repository ({api, title, action, description}) {

const Details = styled.div`
    padding: 24px;
    height : 100px;
    warp: warp;
    overflow-wrap: normal;

    h3{
        padding-bottom: 16px;
    }

    @media screen and (max-width: 690px)
    {        
    padding: 10px;
    height: 110px;        
    }
`

const [dataRepository, setDataRepository] = useState([])

useEffect(() => {
    axios.get(`https://api.github.com/repos/rmachado55/${api}`).then(answer => setDataRepository(answer.data))

    },[api])
   
    return(
    
    <>
        <Details>
            <h3>{title}</h3>
            <p>{description}</p>
        </Details>
        <h3>{BadgesList.icons[`${dataRepository.language}`]}</h3>
        <p>{BadgesList.description[`${dataRepository.language}`]}</p>      
            
                       
             <a href={dataRepository.html_url}>
             <Button active={true}><h4>{action}</h4></Button></a>
 
    </>)
}