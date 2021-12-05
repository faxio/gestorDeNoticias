import React from 'react'
import "../components/estilos/noticias.css"
import { Badge,FormLabel,Collapse, Tag,Divider,Box,AccordionItem, Stack,AccordionButton, AccordionPanel } from '@chakra-ui/react'

const NoticiaAnalisada = (props) => {

    const [show, setShow] = React.useState(false)
    const handleToggle = () => setShow(!show)
    const categoria= props.categoria
    return (
        <AccordionItem >
            <div>
                <AccordionButton>
                    <div className="card" >
                    <h1 className="textoTitulo" >{props.title} </h1>
                    <Stack direction='row' style={{margin:"0px 10px"}}>
                    {categoria.map((cat, index) => {
                        return(
                            <Badge key={index} colorScheme='purple'>{cat}</Badge>
                        )
                    })}
                    </Stack>
                    
                    </div>

                </AccordionButton>
            <Divider/>

            </div>
            <AccordionPanel pb={4}>

            <FormLabel className="textoTitulo">Analista: 
                <Tag colorScheme="red" style={{padding:"2px 10px", margin:"0px 5px" }}>
                    {props.analista}
                </Tag>
            </FormLabel>
            <Divider/>
           

            <Stack>
                <Box>
                    <FormLabel className="textoTitulo" style={{margin:"6px 0px" }}>Analisis</FormLabel>
                    <p className="textoParrafo">{props.analisis}</p>
                </Box>
             <Divider/>

                <Box>
                    <FormLabel >
                        <button className="boton3"  onClick={handleToggle} >
                            {show ? 'Cerrar' : 'Mostrar'} noticia
                        </button>
                    </FormLabel>
                <Collapse startingHeight={1} in={show}>
                   <p className="textoParrafo"> {props.contenido} </p>
                </Collapse>

                </Box>
            </Stack>
            </AccordionPanel>
            
        </AccordionItem>
    )
}

export default NoticiaAnalisada
