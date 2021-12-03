import React, {useState,useEffect} from 'react'
import {Stack, FormControl, Input, FormLabel, InputRightElement, Button} from "@chakra-ui/react"
import axios from 'axios';
import NoticiasAnalisadas from './NoticiasAnalisadas';


const Busqueda = () => {

    const [nombre, setNombre] = useState([])
    useEffect ( () => {
        axios.get(`http://localhost:8000/api/noticias/v1/${cate.categoria}`)
        .then(res => {
        setNombre(res.data); 
    })
  },[])
    const handleClick = () => setTexto(cate);

    
    const [cate, setCate] = useState({
        categoria:"",
    });
    const [texto,setTexto] = useState(cate)
    const handleInputChange = (event) =>{
        setCate({
            ...cate,[event.target.name]:event.target.value,
        });
    };
    const enviarDatos = (event) => {
        event.preventDefault();
      };
    return (
        <div>
            <Stack className="formsEtiquetas" onSubmit={enviarDatos}>
            <FormLabel className="textoP2">Escriba la etiqueta</FormLabel>
                    <FormControl>
                      <Input
                        onChange={handleInputChange}
                        placeholder="Etiqueta"
                        type="text"
                        name="categoria"
                        
                      />
                    </FormControl>
                    
                    <NoticiasAnalisadas category={cate.categoria} api={"http://localhost:8000/api/noticias"}/>
            </Stack>
        </div>
    )
}

export default Busqueda
