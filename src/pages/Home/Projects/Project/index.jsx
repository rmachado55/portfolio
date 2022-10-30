import { useLocation } from "react-router-dom";
import styled from 'styled-components';
import Button from "components/Button";
import { ProjectList } from './ProjectList.js'
import { BadgesList } from "components/Bagdes/badgesList.js";
import { Horizontal, Vertical } from "style/_variables.js";
import {SiGithub} from 'react-icons/si';

export default function Project () {

    const location = useLocation();

    const Box = styled.div`
    display:grid;
    padding: 100px;
    `

    const Title = styled.div`
    width:100vw;
    display:block;
    `
    

    const Picture = styled.img`
    width: 30vw;
    object-fit: cover;
    border-radius: 20px;

    @media screen and (max-width: 690px)
    {
        width: 90vw;
    }
    `
    const Project = styled.div`
    display: flex;  
    padding: 6vh 0;

    @media screen and (max-width: 690px)
    {
        display: block;
    }
    `

    const Description =styled.div`
    display: block;    

    p{
        padding-bottom: 24px;
    }

    li{
        margin: 1vh 0;        
    }

    `

    const Left = styled.div`
    display: grid;
    text-align: center;
    padding: 20px 4vw;

    @media screen and (max-width: 690px)
    {
        padding: 0 0;
    }
    `

    const Badges = styled.div`
    display: flex;
    flex-wrap: wrap;    
    margin: ${Vertical} 0;
    text-align: center;   
    `

    const Icons = styled.div`
    width: 52px;
    padding: 0 16px;

    font-size: 40px;

    p{
        font-size: 10px;
        line-height: 120%;
    }
    
    @media screen and (max-width: 690px){    
    {
    width: 42px;
    padding: 0 8px;
    {
        font-size: 20px;

        p{
            font-size:8px;
        }
    }}
    `

    return(<>
        {ProjectList.map(ProjectList => 
        <Box>
            <Title>
                <h2>{ProjectList.name[`${location.pathname}`]}</h2>
                
                <a href={`${ProjectList.link}`} ><p>{ProjectList.link}</p></a>
            </Title>
            <Project key={ProjectList.key} >
            <Left>
            <Picture src={`https://rmachado55.github.io/portfolio/assets/img/projects/${ProjectList.key}.png`} alt={ProjectList.link}></Picture>
            <a target="_blank" href={`${ProjectList.repo}`}>
                <Button active={ProjectList.active}>
                    <h3>{ProjectList.action[`${location.pathname}`]} <SiGithub/></h3>
                </Button>
            </a>
            </Left>
            <Description>
                
                
                
               
                {ProjectList.features[`${location.pathname}`].map(feature => 
                
                <h3><li>{feature}</li></h3>)}
                
                <Badges>
                
                    {ProjectList.topics.map(topics => {return(
                        <Icons>
                        {BadgesList.icons[topics]}<br></br>
                        <p>{BadgesList.description[topics]}</p>
                        </Icons>
                        )}            
                    )}

                </Badges>
            
        </Description>
        
        </Project>
        </Box>
    )}
</>   
    )
}
