import React, {useEffect, useState} from 'react'
import Noticia from './Noticia'
import axios from 'axios'
import { Accordion } from '@chakra-ui/accordion'

export const Noticias = (props) => {

    //Consiguiendo noticias
    const [nombre, setNombre] = useState([])

    const direccion = 'http://217.71.206.44/api/noticiasin';
    useEffect ( () => {
       let abortController = new AbortController();
       axios.get(direccion)
       .then(res => {
       setNombre(res.data)
   })
   return () => { abortController.abort(); setNombre([])}
 },[])
    return (
        <div >
            <Accordion > 
            {nombre.map((noticia, index)=>{
                return(
                <div key={index} className="forma">
                    <Noticia title={noticia.title} 
                             subtexto={noticia.description}
                             contenido={noticia.content}
                             categoria={props.category}
                             author={noticia.author}
                             fecha={noticia.publishedAt} 
                            url= {noticia.url}
                             />
                </div>
                //console.log(noticia.author)
                ) 
            } )}
            </Accordion>
        </div>
    )
}
