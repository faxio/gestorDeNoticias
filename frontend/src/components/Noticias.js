import React, {useEffect, useState} from 'react'
import Noticia from './Noticia'
import axios from 'axios'
import { Accordion } from '@chakra-ui/accordion'

export const Noticias = (props) => {

    //Consiguiendo noticias
    const [nombre, setNombre] = useState([])

    const direccion = 'https://newsapi.org/v2/everything?q=Apple&from=2021-11-30&sortBy=popularity&apiKey=ae411c4b8a0b419f94c5d6e3017b9f78';
    useEffect ( () => {
       axios.get(direccion)
       .then(res => {
       setNombre(res.data.articles)
   })
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
