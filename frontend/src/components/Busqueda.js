import React, {useState} from 'react'
import {Stack, FormControl, Input, FormLabel} from "@chakra-ui/react"
import NoticiasAnalisadas from './NoticiasAnalisadas';


const Busqueda = () => {

    /*
    const [nombre, setNombre] = useState([])
    useEffect ( () => {
        axios.get(`http://217.71.206.44/noticias/v1/${cate.categoria}`)
        .then(res => {
        setNombre(res.data); 
    })
  },[])
*/
        

    const [cate, setCate] = useState({
        categoria:"",
    });
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
                    
                    <NoticiasAnalisadas category={cate.categoria} api={"http://217.71.206.44/api/noticias"}/>
            </Stack>
        </div>
    )
}

export default Busqueda
