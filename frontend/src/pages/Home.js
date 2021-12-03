import React from 'react'
import NoticiasAnalisadas from '../components/NoticiasAnalisadas';


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
            <NoticiasAnalisadas category="deportes" api={"http://217.71.206.44/api/noticias"} />
        </div>
    )
}

export default Home;
