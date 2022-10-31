import { useLocation } from "react-router-dom";
import { Vertical } from 'style/_variables';
import styled from 'styled-components';
import { CertificatesList } from '../Table/CertificatesList';
import {Texts} from './Heading.texts.js'





export default function Heading () {

    const location = useLocation();

    const count = CertificatesList.filter(item => item).length
    const sum = CertificatesList.reduce((acc, o) => acc + parseInt(o.hours), 0)

    const Box = styled.div`
        text-align: center;
        padding-bottom: ${Vertical};
    `

    return( 
        <Box>
            <h1>{count} {Texts.certifications[`${location.pathname}`]}</h1>
            <h2>{sum} {Texts.hoursOf[`${location.pathname}`]}</h2>            
        </Box>
    )
}