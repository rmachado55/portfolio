import { useLocation } from "react-router-dom";
import styled from 'styled-components';
import Button from "components/Button";
import { ProjectList } from './ProjectList.js'
import { Badges } from 'components/Bagdes/badges.js'

export default function Project () {

    const location = useLocation();

    const Picture = styled.img`
    width: 100px;
    `

    return(<>
        {ProjectList.map(ProjectList => 
        <div key={ProjectList} >
            <Picture src={`https://rmachado55.github.io/portfolio/assets/img/projects/${ProjectList.key}.png`} alt={ProjectList.link}></Picture>
            <div>
            <h2>{ProjectList.name[`${location.pathname}`]}</h2>
            <a href={'link'} ><h3>{ProjectList.link}</h3></a>
            {ProjectList.features[`${location.pathname}`].map(feature => 
            <li>{feature}</li>)}

            <div>
            {ProjectList.badges.map( badge =>
            <div key={badge}>
            {Badges.icons[badge]}
            <p>{Badges.description[badge]}</p>        
            </div>
            )}
            </div>
            <Button active={ProjectList.active}>{ProjectList.action[`${location.pathname}`]}</Button>
        </div>
        
        </div>
    )}
</>   
    )
}
