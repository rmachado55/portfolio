import {IoMenu , IoClose} from 'react-icons/io5';
import styled from 'styled-components';
import { ContrastColor, NarrowFont,} from 'style/_variables';
import { Texts } from '../NavBar.texts'
import { useLocation } from 'react-router-dom';

export const Hamburguer = ({menu, setMenu}) => {

const location = useLocation();

const Box =styled.div`                
z-index: 100;
display: flex;
flex-wrap: no-wrap;
cursor: pointer;

:hover{
    color: ${ContrastColor};
}

p{
    padding: 10px 4px 0 10px;
    font-size: medium;
    font-family: ${NarrowFont};
}
`

return(
        <Box onClick={() => setMenu(!menu)}>
            {menu ? <><p>{Texts.close[`${location.pathname}`]}</p><IoClose size={32}/></> : <><p>Menu</p><IoMenu size={32}/></>}
        </Box>
)}