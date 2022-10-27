import axios from 'axios'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import Button from 'components/Button'
import Badges from 'components/Bagdes'
import { BadgesList } from 'components/Bagdes/badgesList'


export default function Repository ({api, title, action}) {

const Details = styled.div`
    height : 80px;
`

const [dataRepository, setDataRepository] = useState([])

useEffect(() => {
    axios.get(`https://api.github.com/repos/rmachado55/${api}`).then(answer => setDataRepository(answer.data))

    },[])
   
    return(
    
    <>
        <Details>
            <h3>{title}</h3>
            <p>{dataRepository.description}</p>
        </Details>
        <h2>{BadgesList.icons[`${dataRepository.language}`]}</h2>
        <p>{BadgesList.description[`${dataRepository.language}`]}</p>
            
            
                       
             <a href={dataRepository.html_url}>
             <Button active={true}><h4>{action}</h4></Button></a>
            <div>
                <div>
                  
            </div>
            </div>
    </>)
}