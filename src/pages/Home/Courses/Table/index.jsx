import {useLocation } from "react-router-dom";
import {BadgesList} from 'components/Bagdes/badgesList'
import styled from 'styled-components';
import {Texts} from "./Table.texts"
import { ContrastColor, DarkColor, Horizontal, PrimaryColor, Vertical, } from "style/_variables";
import {AiOutlineFileSearch} from 'react-icons/ai'
import { useState } from "react";
import { FaWindowClose } from "react-icons/fa";


export default function Table ({list, activePage}) {


    const location = useLocation();
    const [id, setId] = useState("001");
    const [name, setName] = useState("test")
    const [showCertificate, setShowCertificate] = useState(false);

    
    function popCertificate (id, name) {
        setId(id);
        setName(name);
        setShowCertificate(true);
    }

    const Table = styled.table`
        margin: auto;
        text-align: center;
        width: 80vw;
        
        th{
            color: ${DarkColor};
            background-color: ${ContrastColor};
        }
        
        table, th, td{
            border: 1px solid ${ContrastColor};
            padding: 4px 4px;
            vertical-align: middle;
            
            h3{
                cursor: zoom-in;
            }
        }
        
        @media screen and (max-width: 780px){
            width:95vw;
        }

        `

    const Box = styled.div`
        display: ${ showCertificate ? 'grid' : 'none'};
        position: fixed;
        top: 58px;
        right: 15vw;      
        background-color: ${PrimaryColor};
        border-radius: 20px;
        text-align: center;
        padding: ${Vertical} ${Horizontal} 0 ${Horizontal};
        height: fit-content;               
        width: 90vw;
        max-width: 900px;

        h3{
            color: ${DarkColor};
            padding: 12px 0 ;
            
        }

        img{
            object-fit: contain;
            width:100%;
            height:100%;
        }
        @media screen and (max-width: 690px)
        {        
        top: 30vh;
        right: 2vw;   
        }
      
        `
    const Close =styled.div`
        position: absolute;
        right: 10px;
        cursor: pointer;
        `
          

      return(<>
        
        <Table>
                <tr>
                    <th><p></p></th>
                    <th><p>{Texts.name[`${location.pathname}`]}</p></th>
                    <th><p>{Texts.hours[`${location.pathname}`]}</p></th>
                    <th><p>{Texts.institution[`${location.pathname}`]}</p></th>
                    <th><p>{Texts.date[`${location.pathname}`]}</p></th>
                    <th><p>{Texts.zoom[`${location.pathname}`]}</p></th>
                </tr>
            {list.slice(((activePage-1)*10),(activePage*10)).map(certificate =>            
            <tr>
                <td><h4>{BadgesList.icons[certificate.area[0]]} {BadgesList.icons[certificate.area[1]]} {BadgesList.icons[certificate.area[2]]}</h4></td>
                <td><p>{certificate[`${location.pathname}`]}</p></td>
                <td><p>{certificate.hours}</p></td>
                <td><p>{certificate.school}</p></td>
                <td><p>{certificate.Month}/2022</p></td>
                <td><h3>
                    <AiOutlineFileSearch
                        onClick={() =>
                        popCertificate(`${certificate.id}` , `${certificate[location.pathname]}`)
                        }/>
                    </h3>                   
                </td>
            </tr>           
            )}        
        </Table>        
            <Box>
                <Close onClick={() => setShowCertificate(false)}>
                   <FaWindowClose size={44} />
                </Close>
                    <img src={`assets/img/certificates/${id}.png`} alt={`${name}`}/>
                <h4>{name}</h4>
            </Box>              
        </>



    )
}