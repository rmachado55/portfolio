import { useState } from "react"
import { Link } from "react-router-dom"



export default function LanguageSelection ({children, setLanguage}){



    return(
        <>
            <Link to={'/en/home'} ><button onClick={() => {setLanguage('/en')}}>English</button></Link>
            <Link to={'/pt/home'} ><button onClick={() => {setLanguage('/pt')}}>Português</button></Link>
            <Link to={'/es/home'} ><button onClick={() => {setLanguage('/es')}}>Español</button></Link>
        </>
    )
}