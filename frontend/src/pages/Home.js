import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Datos from '../components/Datos'

const Home = () => {
    const [nombre, setNombre] = useState('')

     useEffect ( () => {
        axios.get('http://127.0.0.1:8000/api/todo')
        .then(res => {
        setNombre(res.data)
    })
  })
    return (
        <div>
            <h1>¿Que hay de nuevo?</h1>
            <Datos datos={nombre}/>
        </div>
    )
}

export default Home;
