import React,{useEffect,useState} from 'react'
import { Noticias } from '../components/Noticias'
import { Badge, Divider, Text,  } from '@chakra-ui/layout';
import {Textarea, useToast, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon,Box,} from "@chakra-ui/react"
import {useNavigate} from 'react-router-dom'
import axios from 'axios';


const Rango = () => {

    let navigate = useNavigate();
    const toast = useToast()
    const [datos, setDatos] = useState('');
    const nombre = localStorage.getItem("nombre");
    const rango = localStorage.getItem("rango");
    const [sol, setSol] = useState([])

    useEffect(() => {
        axios.get('http://217.71.206.44/api/solicitudes/').then(res => {
        setSol(res.data)
        })
        return () => {
            setSol([])
        }
    }, [setSol])

    const handleInputChange = (event) => {
        let input = event.target.value
        setDatos(input)
       };

    async function addTodoHandler() {
        await axios.post('http://217.71.206.44/api/solicitudes/',{'nombre': nombre, 'justificacion':datos})
        .then(res => {toast({
            title: "Solicitud ingresada",
            description: "Su solicitud será resuelta en un lapso de 5 días hábiles",
            status: "success",
            duration: 9000,
            isClosable: true,
        }); navigate("/")})

    }

    return (
        <div>
            {rango ==='analista' ? 
            <>
            <h1 className="textoP3">Usted posee el rango de <Badge colorScheme='green' fontSize='0.9em'> {rango} </Badge></h1>

            <Accordion allowToggle>
                <AccordionItem>
                    <h2 >
                    <AccordionButton>
                        <Box flex='1' textAlign='left' className="textoP3">
                        Todas las solicitudes
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                    {sol.map((solicitud,index) =>{
                        return(
                            <div key={index}>
                                <Divider/>
                                <h2 className='textoP6'> <Badge colorScheme="green">Usuario:</Badge> {solicitud.nombre} </h2>
                                <h2 className='textoP6'> <Badge colorScheme="green">Justificacion:</Badge>   {solicitud.justificacion}</h2>
                                <button className='boton8' onClick={async () => {
                                    await axios.delete(`http://localhost:8000/api/solicitudes/${solicitud.nombre}?opcion=aceptar`)
                                }}> Aceptar</button>
                                <button className='boton9' onClick={async () => {
                                    await axios.delete(`http://localhost:8000/api/solicitudes/${solicitud.nombre}?opcion=denegar`)
                                }}> Denegar</button>
                            </div>
                        )
                    })}
                    </AccordionPanel>
                </AccordionItem>
            
                <AccordionItem>
                    <h2 >
                        <AccordionButton>
                            <Box flex='1' textAlign='left' className="textoP3">
                            Noticias a Analizar
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                <AccordionPanel pb={4}>
                <Divider/>
                    <div className="cardsHome">
                        <Noticias category="Sin-Categoria"/>
                    </div>
                    </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </>
            :
            <>
                <h1 className="textoP3">Usted posee el rango de <Badge colorScheme='green' fontSize='0.9em'> {rango} </Badge></h1>
                <Divider/>
                <Text className="textoP4">¿Le gustaria ser analizador?</Text>
                <Text className='textoP5' fontSize='sm'>Complete el siguiente formulario</Text>
                <Textarea 
                    className="textoParrafo" 
                    placeholder='¿Porque usted deberia ser analizador?' 
                    onChange={handleInputChange} 
                    value={datos}   
                />
                <button className="boton3" style={{margin: "0.8em 0.4em"}} onClick={addTodoHandler} >Enviar</button>
            </>
            }
        </div>
    )
}

export default Rango;
