import React,{useEffect,useState} from 'react'
import "../components/estilos/noticias.css"
import { Badge,FormLabel,Collapse, 
    Tag,Divider,Box,AccordionItem,
    Stack,AccordionButton, AccordionPanel,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Select,
    useToast,
} from '@chakra-ui/react'
import axios from 'axios'

const NoticiaAnalisada = (props) => {

    const toast = useToast()

    const addTodoHandler = () =>{
        axios.put(`http://217.71.206.44/api/noticiasC/${props.title}?category=${cate}`).then(res => {toast({
            title: "Etiqueta Agregada Correctamente",
            status: "success",
            duration: 9000,
            isClosable: true,
        })})
    }
    const [cate, setCate] = useState('deportes')
    const obtenerCategoria = (e) => {
        let index = e.target.selectedIndex;
        setCate('' + e.target.options[index].text)
    }

    let [all, setAll] = useState([]);
    useEffect(() => {
        let abortController = new AbortController();
       axios.get('http://217.71.206.44/api/categorias/')
       .then(res => {
           setAll(res.data);
      })
      return () => {
          abortController.abort();
          setAll([])
      }
    }, [])

    const { isOpen, onOpen, onClose } = useDisclosure()
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
                <Collapse style={{margin:"6px 0px" }} startingHeight={1} in={show}>
                   <p className="textoParrafo" > {props.contenido} </p>
                </Collapse>
                <Divider/>
                    <FormLabel >
                        <button style={{margin:"6px 0px -3px 0px" }} className="boton3"  onClick={onOpen} >
                            Agregar Etiquetas
                        </button>
                        </FormLabel>

                        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay />
                            <ModalContent>
                            <ModalHeader className="textoTitulo">Seleccione la etiqueta</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody pb={6}>
                                 <Select onChange={obtenerCategoria} className="prueba" placeholder="Seleccione una categoria">
                                    {all.map((cat, index) =>{
                                        return(
                                        <option  value={cat.categoria} key={index}>{cat.categoria}</option>
                                        )
                                    })}
                
                                </Select>
                            </ModalBody>

                            <ModalFooter>
                                <Button onClick={addTodoHandler} colorScheme='blue' mr={3}>
                                Agregar
                                </Button>
                                <Button onClick={onClose}>Cancel</Button>
                            </ModalFooter>
                            </ModalContent>
                        </Modal>
                    
                </Box>
            </Stack>
            </AccordionPanel>
            
        </AccordionItem>
    )
}

export default NoticiaAnalisada
