import Container from 'components/Container'
import { useLocation } from 'react-router-dom'
import Repository from './Repository'
import {ShowCase} from './Repository/showcase'
import {Texts} from './MyGit.texts'
import styled from 'styled-components'
import { ContrastColor, Horizontal, Vertical } from 'style/_variables'


export default function MyGit() {

    const Heading = styled.div`
    text-align: center;
    `

    const Repositorys= styled.div`
    display: flexbox;
    justify-content: space-between;
    flex-wrap: nowrap;
    overflow: auto;
    white-space: nowrap:
    padding: ${Vertical} 0;
    width:92vw;
        
    `

    const Box = styled.div`
    display: grid;
    width: 300px;
    text-align: center;
    padding: 16px 16px;
    margin: ${Vertical} 16px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 30px;
    
    @media screen and (max-width: 690px)
        {        
        width:140px;        
        }
    `
    

const location = useLocation();

    return(
        <Container dark={false} id={"repository"} >
        <>
            <Heading >
                <h1>{Texts.title[`${location.pathname}`]}</h1>
                <h2>{Texts.subTitle[`${location.pathname}`]}</h2> 
            </Heading>
            <Repositorys>
                {ShowCase.map((repositorio) => {return(
                <Box key={repositorio.api}>
                <Repository
                    action={Texts.action[`${location.pathname}`]}
                    api={repositorio.api}
                    title={repositorio.title[`${location.pathname}`]}
                    description={repositorio.description[`${location.pathname}`]}
                />
                </Box>          
                
                )})}
            </Repositorys>
        
        </>
        </Container>
    )
}