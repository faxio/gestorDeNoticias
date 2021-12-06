import React from 'react'
import NoticiasAnalisadas from '../components/NoticiasAnalisadas';
import ContEtiquetas from '../components/ContEtiquetas';

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
            
            <ContEtiquetas/>
            <NoticiasAnalisadas category="deportes" api={"http://217.71.206.44/api/noticias"} />
        </div>
    )
}

export default Home;
