import React from 'react'
import "../components/estilos/noticias.css"
import { Badge, AccordionItem, Stack,AccordionButton, AccordionPanel } from '@chakra-ui/react'

const NoticiaAnalisada = (props) => {

    const categoria= props.categoria
    return (
        <AccordionItem>
            <div>
                <AccordionButton>
                    <div className="card" >
                    <h1>{props.title} </h1>
                    <Stack direction='row'>
                    {categoria.map((cat, index) => {
                        return(
                            <Badge key={index} colorScheme='purple'>{cat}</Badge>
                        )
                    })}
                    </Stack>
                    </div>
                </AccordionButton>
            </div>
            <AccordionPanel pb={4}>
            {props.contenido}
            </AccordionPanel>
            
        </AccordionItem>
    )
}

export default NoticiaAnalisada
