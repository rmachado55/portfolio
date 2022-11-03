import { Container } from "components/Container";
import Ricardo from 'assets/img/ricardo_desenho.png';

import { useLocation } from 'react-router-dom';
import styled from 'styled-components'
import { Horizontal, Vertical } from "style/_variables";
import { Name } from "./Name";
import { Highlights } from "./Highlights";

export const Start = () => {


        
    const Wrapper = styled.div`
    
    display: flex; 
    padding: 0 0 0 0;    

    @media screen and (max-width: 690px)
        {        
        display:block;         
        }
    `    
     

    return (
        <Container dark={false} id={"home"} bottom={true} top={false} height={'65vh'}>
            <Wrapper>
                
                <Name />
                
                <Highlights />                
                                    
            </Wrapper>
            
        </Container>              
      
        )
        }