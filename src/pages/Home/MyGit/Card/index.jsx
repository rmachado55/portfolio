import axios from 'axios'
import { useEffect, useState } from 'react'


export default function Card () {

    const [dataUser, setDataUser] = useState([])

    useEffect(() => {               
        axios.get(`https://api.github.com/users/rmachado55`).then((answer) => {setDataUser(answer.data)})
    
        },[])

    return(<></>)
}