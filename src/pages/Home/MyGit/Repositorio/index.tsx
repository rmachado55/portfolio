import axios from 'axios'
import { Children, useEffect, useState } from 'react'

export default function Repositorio(url : string) {

const [dadosRepositorio, setDadosRepositorio] = useState<any>([])


useEffect(() => {
    axios.get('https://api.github.com/repos/rmachado55/restaurante-cardapio-online').then((resposta) => {setDadosRepositorio(resposta.data)})
},[])

    console.log(dadosRepositorio)

    return(
        <div >
            <h4>{dadosRepositorio.name}</h4>
            <p>{dadosRepositorio.description}</p>
            <a href={dadosRepositorio.html_url}><button><h4>Visite</h4></button></a>                      
        </div>
    )
}