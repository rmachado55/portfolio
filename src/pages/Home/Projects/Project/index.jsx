import { useLocation } from "react-router-dom";
import styled from 'styled-components';
import Button from "components/Button";
import { ProjectList } from './ProjectList.js'
import { BadgesList } from "components/Bagdes/badgesList.js";
import { Horizontal, Vertical } from "style/_variables.js";

export default function Project () {

    const location = useLocation();

    const Project = styled.div`
    display: flex;
    width: 80vw;
    padding: 10vh 0;
    `

    const Picture = styled.img`
    width: 320px;
    height: 220px;
    margin:auto;
    padding: 0 ${Horizontal};
    object-fit: cover;
    border-radius: 20px;
    `

    const Description =styled.div`
    display: grid;

    p{

        padding-bottom: 24px;
    }

    li{
        line-height: 200%;
        font-size: larger;
    }

    `

    const Badges = styled.div`
    display: flex;
    justify-content: space-between;
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
            <Picture src={`https://rmachado55.github.io/portfolio/assets/img/projects/${ProjectList.key}.png`} alt={ProjectList.link}></Picture>
            <Description>
                <h2>{ProjectList.name[`${location.pathname}`]}</h2>
                
                <a href={'link'} ><p>{ProjectList.link}</p></a>
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
            <Button active={ProjectList.active}><h3>{ProjectList.action[`${location.pathname}`]}</h3></Button>
        </Description>
        
        </Project>
    )}
</>   
    )
}
