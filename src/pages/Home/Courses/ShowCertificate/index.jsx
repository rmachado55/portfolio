import { PrimaryColor } from "style/_variables";
import styled from 'styled-components';


export default function ShowCertificate ({showCertificate, setShowCertificate}) {

    const Box = styled.div`
        display: ${showCertificate ? 'grid' : 'none'};
        background-color: ${PrimaryColor};
        `

        return(
            <Box>

            </Box>
        )


}

