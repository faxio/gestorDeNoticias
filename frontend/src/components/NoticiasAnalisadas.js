import React, {useEffect, useState} from 'react'
import NoticiaAnalisada from './NoticiaAnalisada'
import axios from 'axios'
import { Accordion } from '@chakra-ui/accordion'

const NoticiasAnalisadas = (props) => {
    const [nombre, setNombre] = useState([])
    let url = props.api
    if (props.category !== "")
        url = props.api +"/"+ props.category

    const llamar = () => {
        axios.get(`${url}`)
        .then(res => {
        setNombre(res.data); 
    });
    }
    useEffect ( () => {
        const interval = setInterval(() => {
            llamar()
        }, 100)
       return () => clearInterval(interval)
 })

    return (
        <div >
            <Accordion > 
            {nombre.map((noticia, index)=>{
                return(
                <div key={index} className="forma">
                    <NoticiaAnalisada title={noticia.title} 
                             subtexto={noticia.description}
                             contenido={noticia.content}
                             categoria={noticia.category} />
                </div>
                //console.log(noticia.author)
                ) 
            } )}
            </Accordion>
        </div>
    )
}

export default NoticiasAnalisadas
