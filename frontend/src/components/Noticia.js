import React, { useState,useEffect } from 'react'
import "../components/estilos/noticias.css"
import { Badge, Select,FormLabel,AccordionItem,Textarea,Box ,HStack, AccordionButton, AccordionPanel } from '@chakra-ui/react'
import axios from 'axios'

const Noticia = (props) => {

    const [cate, setCate] = useState('deportes')
    const obtenerCategoria = (e) => {
        let index = e.target.selectedIndex;
        setCate('' + e.target.options[index].text)
    }

    let [all, setAll] = useState([]);
    useEffect(() => {
       axios.get('http://217.71.206.44/api/categorias/')
       .then(res => {
           setAll(res.data);
      })
    }, [])

    const addTodoHandler = () =>{
        console.log(cate);
        if (cate !== "" || cate !== "Seleccione una categoria")
        axios.post('http://217.71.206.44/api/noticias/', {  'author':props.author,
                                                        'content':props.contenido,
                                                        'title':props.title,
                                                        'analisis':datos,
                                                        'analista':'fulanito',
                                                        'description':props.subtexto,
                                                        'url':props.url,
                                                        'fecha':props.fecha,
                                                        'numVistas':0,
                                                        'category':[cate],
                                        })
                                        .then(res => {console.log("añadido"); setCate('deportes')})
                                        .catch(res => console.log("fail"))
        else
            console.log("Selecciona una categoria")
    }

    const [datos, setDatos] = useState('');
    const handleInputChange = (event) => {
       let input = event.target.value
       setDatos(input)
      };
    return (
        <AccordionItem>
            <div>
                <AccordionButton>
                    <div className="card" >
                    <h1>{props.title}</h1>
                    
                    <Badge colorScheme='purple'>{props.categoria}</Badge>
                    </div>
                </AccordionButton>
            </div>
            <AccordionPanel pb={4}>
            <Box pb={4} >
                {props.contenido}
            </Box>
            <FormLabel >Analisis</FormLabel>
            <Textarea onChange={handleInputChange} value={datos}/>
            <HStack>
            <Select onChange={obtenerCategoria} className="prueba" placeholder="Seleccione una categoria">
            {all.map((cat, index) =>{
                    return(
                    <option  value={cat.categoria} key={index}>{cat.categoria}</option>
                    )
                })}
                
            </Select>
            <button className="boton2" style={{margin: "0.8em 0.4em"}} onClick={addTodoHandler}>Publicar</button>
            </HStack>
            </AccordionPanel>
            
        </AccordionItem>
    )
}

export default Noticia
