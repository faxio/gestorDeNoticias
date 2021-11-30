import React from 'react'
import "../components/estilos/noticias.css"
import { Badge, AccordionItem, AccordionButton, AccordionPanel } from '@chakra-ui/react'

const Noticia = (props) => {
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
            {props.contenido}
            </AccordionPanel>
            
        </AccordionItem>
    )
}

export default Noticia
