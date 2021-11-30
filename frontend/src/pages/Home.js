import React from 'react'
import { Noticias } from '../components/Noticias'

const Home = () => {
    /*
    const [nombre, setNombre] = useState('')

     useEffect ( () => {
        axios.get('http://127.0.0.1:8000/api/user')
        .then(res => {
        setNombre(res.data)
    })
  })*/
    return (
        <div>
            <h1>¿Que hay de nuevo?</h1>
            <div className="cardsHome">
                <Noticias category="deportes"/>
            </div>
        </div>
    )
}

export default Home;
