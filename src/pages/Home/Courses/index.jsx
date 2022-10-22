import ComponenteCorNegativa from "components/ComponenteCorNegativa";
import style from './Courses.module.scss'
import { Badges } from "db/badges";


export default function Courses() {

    return(
        <ComponenteCorNegativa title={'certificados'}>
            <>
            {Badges.map(({icon, nome , from}) => {
                                return(<span id={'surpresa'} key ={nome} title={nome} className={style.certificados__icons}>{icon}</span>)})}
            <h1>Certificados Obtidos</h1>
            </>            
        </ComponenteCorNegativa>
    )
}