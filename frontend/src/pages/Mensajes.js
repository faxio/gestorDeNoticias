import React, {useState} from 'react'

const Mensajes = () => {

    let [hola, setHola] = useState("hola");
    return (
        <div>
            {hola.length > 3
            ?  <h2>hola</h2> 
            :  <h3>chao</h3>}
            <h1>Mensajes</h1>
        </div>
    )
}

export default Mensajes
