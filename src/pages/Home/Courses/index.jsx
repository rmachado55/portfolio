import { Badges } from "db/badges";
import Container from "components/Container";


export default function Courses() {

    return(
        <Container dark={false} title={'certificados'}>
            <>
            {Badges.map(({icon, nome , from}) => {
                                return(<span id={'surpresa'} key ={nome} title={nome}>{icon}</span>)})}
            <h1>Certificados Obtidos</h1>
            </>            
        </Container>
    )
}