import { useLocation } from "react-router-dom";
import {BadgesList} from 'components/Bagdes/badgesList'
import styled from 'styled-components';
import {Texts} from "./Table.texts"
import { ContrastColor, DarkColor, } from "style/_variables";
import {AiOutlineFileSearch} from 'react-icons/ai';


export default function Table ({list, activePage}) {

    const Table = styled.table`
        margin: auto;
        text-align: center;
        width: 90vw;
        
        th{
            color: ${DarkColor};
            background-color: ${ContrastColor};
        }
        
        table, th, td{
            border: 1px solid ${ContrastColor};
            padding: 4px 4px;
            vertical-align: middle;    
        }`
    
    const location = useLocation()

      return(

        <Table>
                <tr>
                    <th><p></p></th>
                    <th><p>{Texts.name[`${location.pathname}`]}</p></th>
                    <th><p>{Texts.hours[`${location.pathname}`]}</p></th>
                    <th><p>{Texts.institution[`${location.pathname}`]}</p></th>
                    <th><p>{Texts.date[`${location.pathname}`]}</p></th>
                    <th><p></p></th>
                </tr>
            {list.slice(((activePage-1)*10),(activePage*10)).map(certificate =>
            <tr>
                <td><h4>{BadgesList.icons[certificate.area[0]]} {BadgesList.icons[certificate.area[1]]} {BadgesList.icons[certificate.area[2]]}</h4></td>
                <td><p>{certificate[`${location.pathname}`]}</p></td>
                <td><p>{certificate.hours}</p></td>
                <td><p>{certificate.school}</p></td>
                <td><p>{certificate.Month}/2022</p></td>
                <td><a target="blank" href={`https://rmachado55.github.io/assets/img/certificates/${certificate.id}.png`}><h3><AiOutlineFileSearch/></h3></a></td>
            </tr>
        )}    
        </Table>



    )
}