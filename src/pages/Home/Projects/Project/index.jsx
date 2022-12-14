import { useLocation } from "react-router-dom";
import styled from 'styled-components';
import Button from "components/Button";
import { ProjectList } from './ProjectList.js'
import { BadgesList } from "components/Bagdes/badgesList.js";
import { Vertical } from "style/_variables.js";
import {SiGithub} from 'react-icons/si';

export default function Project () {

    const location = useLocation();

    const Box = styled.div`
    display:grid;
    margin: 20vh 15vw;
    width: 70vw;
    @media screen and (max-width: 690px)
    {
        margin:20vh 4vw;
        width:92vw;
    }
    `

    const Title = styled.div`
    text-align: center;
    padding: ${Vertical} 0;
    `
    
    
    const Project = styled.div`
    display: flex;  
    padding: 0 0;

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
    padding: 0 10px;

    @media screen and (max-width: 690px)
    {
        padding: 0 0;
    }
    `
    const Picture = styled.img`
    width: 420px;
    object-fit: cover;
    border-radius: 20px;

    @media screen and (max-width: 690px)
    {
        width: 92vw;
    }
    `

    const Badges = styled.div`
    display: flex;
    flex-wrap: wrap;    
    margin: ${Vertical} 0 0 0;     
    
    `

    const Icons = styled.div`
    width: 47px;
    padding: 0 13px;
    text-align: center;  
    font-size: 30px;
    
    p{
        font-size: 10px;
        line-height: 120%;
    }
    
    @media screen and (max-width: 690px){    
    {
    width: 45px;
    padding: 0 6px;
    {
        font-size: 18px;

        p{
            font-size:8px;
        }
    }
}
    `

    const Disclaimer = styled.p`
    font-size: 10px;`
    
    return(<>
        {ProjectList.map(ProjectList => 
        <Box id={`Box${ProjectList.key}`}>
            <Title>
            <a href={`${ProjectList.link}`} target="_blank" rel="noreferrer">
                <h2>{ProjectList.name[`${location.pathname}`]}</h2>                
                <p>{ProjectList.link}</p></a>
            </Title>
            <Project key={ProjectList.key} >
            <Left>
            <Picture src={`/assets/img/projects/${ProjectList.key}.png`} alt={ProjectList.link}></Picture>
            <a target="_blank" rel="noreferrer" href={`${ProjectList.repo}`}>
                <Button active={ProjectList.active}>
                    <h4>{ProjectList.action[`${location.pathname}`]} <SiGithub/></h4>
                </Button>
            </a>
            </Left>
            <Description>
                
                
                
               
                {ProjectList.features[`${location.pathname}`].map(feature => 
                
                <h4><li>{feature}</li></h4>)}
                
                <Badges>
                
                    {ProjectList.topics.map(topics => {return(
                        <Icons>
                        {BadgesList.icons[topics]}<br></br>
                        <p>{BadgesList.description[topics]}</p>
                        </Icons>
                        )}            
                    )}                
                </Badges>
                <Disclaimer>{ProjectList.disclaimer[`${location.pathname}`]} </Disclaimer>
                
            
        </Description>
        
        </Project>
        </Box>

                        

    )}
</>   
    )
}
