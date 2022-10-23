import { Link, useParams } from "react-router-dom"

export default function LanguageSelection ({children, setLanguage}){

    let { language } = useParams();

    return(
        <>
            <Link to="en" ><button onClick={() => {setLanguage('en')}}>English</button></Link>
            <Link to="pt" ><button onClick={() => {setLanguage('pt')}}>Português</button></Link>
            <Link to="es" ><button onClick={() => {setLanguage('es')}}>Español</button></Link>
        </>
    )
}