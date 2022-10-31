import { FaWindowClose } from "react-icons/fa";
import { PrimaryColor } from "style/_variables";
import styled from 'styled-components';
import { useLocation, useNavigate } from "react-router-dom";



export default function ShowCertificate () {

    const location = useLocation();
    const navigate = useNavigate();

    const Box = styled.div`
        display: 'grid';
        position: absolute;
        width: 94vw;
        height: 60vh;
        background-color: ${PrimaryColor};
        border-radius: 20px;
        `
    const Close =styled.div`
    display: absolute;
    float: right;
    padding: 12px;
    `

    const Img = styled.img`
    
    ` 
    return(
            <Box>
                <Close onClick={() => navigate(-1)}>
                    <FaWindowClose size={34} />
                </Close>
                <Img src={`assets/img/certificates/${location.hash.slice(1)}.png`}/>
            </Box>
        )        
}

