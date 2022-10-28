import { useLocation } from "react-router-dom";
import styled from 'styled-components';
import Button from "components/Button";
import { ProjectList } from './ProjectList.js'
import { BadgesList } from "components/Bagdes/badgesList.js";
import { Horizontal, Vertical } from "style/_variables.js";
import {SiGithub} from 'react-icons/si';

export default function Project () {

    const location = useLocation();

    const Project = styled.div`
    display: flex;
  
    padding: 10vh 0;
    `

    const Picture = styled.img`
    width: 340px;    
    padding: 0 ${Horizontal};
    object-fit: cover;
    border-radius: 20px;
    `

    const Description =styled.div`
    display: grid;
    width: 60vw;

    p{

        padding-bottom: 24px;
    }

    li{
        line-height: 200%;
        font-size: larger;
    }

    `

    const Left = styled.div`
    display:block;
    text-align: center;
    `

    const Badges = styled.div`
    display: flex;
    font-size: 30px;
    padding: ${Vertical} 0;
    text-align: center;
    span{
        font-size:9px;
                    
    }
    `

    const Icons = styled.div`
    width: 50px;
    padding: 0 10px;
    line-height: 60%;
    line-height: 10%       
    `

    return(<>
        {ProjectList.map(ProjectList => 
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
                
                <div>
                <h2>{ProjectList.name[`${location.pathname}`]}</h2>
                
                <a href={`${ProjectList.link}`} ><p>{ProjectList.link}</p></a>
                </div>
                
               
                {ProjectList.features[`${location.pathname}`].map(feature => 
                
                <li>{feature}</li>)}
                
                <Badges>
                
                    {ProjectList.topics.map(topics => {return(
                        <Icons>
                        {BadgesList.icons[topics]}<br></br>
                        <span>{BadgesList.description[topics]}</span>
                        </Icons>
                        )}            
                    )}

                </Badges>
            
        </Description>
        
        </Project>
    )}
</>   
    )
}
