import { Container } from 'components/Container'
import { useLocation } from 'react-router-dom'
import Repository from './Repository'
import {ShowCase} from './Repository/showcase'
import {Texts} from './MyGit.texts'
import styled from 'styled-components'
import { PrimaryColor, Vertical } from 'style/_variables'
import { SiGithub } from 'react-icons/si'
import {FaAngleDoubleLeft, FaAngleDoubleRight} from 'react-icons/fa'

export const MyGit = () => {

    const location = useLocation();

    const MyGitArea = styled.div`
    position: relative;
    width: 100%;
    `

    const Heading = styled.div`
    text-align: center;
    `

    const Carroussel = styled.div`
    display: flexbox;
    justify-content: space-between;
    padding: ${Vertical} 0;
    width: 98vw;
    
    h1{
        font-size: 10vw;
        margin: auto;
        filter: drop-shadow(4px 4px 4px #000000);
        cursor: pointer;
    }

    @media screen and (max-width: 690px){
        h1{
            font-size:62px;
        }
    }
    `

    const Repositorys= styled.div`
    display: flexbox;
    justify-content: space-between;
    overflow-x: scroll;
    width: 60vw;
    filter: drop-shadow(4px 4px 4px #000000)     
    `

    const Box = styled.div`
    display: block;
    width: 400px;
    text-align: center;
    padding: 16px 16px;
    margin: 0 16px 16px 16px;
    background: rgba(250, 240, 80, 1);
    border-radius: 30px;
    
    @media screen and (max-width: 690px)
        {
        margin: 0 16px 0 16px;        
        width: 160px;        
        }
    `
    

    return(<MyGitArea id={'skewBox'}>
        <Container dark={false} id={"myGit"} top={true} bottom={true} position={'absolute'} height={'65vh'} >        
            <Heading >
                <h1>{Texts.title[`${location.pathname}`]}</h1>
                <h2>{Texts.subTitle[`${location.pathname}`]}<SiGithub/></h2> 
            </Heading>
            <Carroussel>
            <h1 onClick={() => document.getElementById('scrollable').scrollLeft -=160}><FaAngleDoubleLeft/></h1>
            <Repositorys id={"scrollable"}>
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
            <h1 onClick={() => document.getElementById('scrollable').scrollLeft +=160}><FaAngleDoubleRight/></h1>
            </Carroussel>
        </Container>
        </MyGitArea>
        )
}