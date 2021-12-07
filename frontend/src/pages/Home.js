import React from 'react'

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

        </div>
    )
}

export default Home;
