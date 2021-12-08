import { React,
    useState,
    useEffect,
} from 'react'
import {
    Select,
    Modal,
    FormLabel,
    Button,
    useDisclosure,
    ModalOverlay,
    ModalContent,
    ModalCloseButton,
    ModalBody,
    ModalHeader,
    ModalFooter,
    Input,
    FormControl,
} from '@chakra-ui/react'
import axios from 'axios'

const CrearEtiquetas = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [ valueSelect, setValueSelect ] = useState('crear');
    const handleChange = (e) => {
	setValueSelect(e.target.value);
	setNombreEtiqueta('');
    };

    const [ nombreEtiqueta, setNombreEtiqueta ] = useState('');
    const [ urlEtiqueta, setUrlEtiqueta ] = useState('');
    const handleNombreEtiq = (e) => setNombreEtiqueta(e.target.value); 
    const handleUrlEtiq = (e) => setUrlEtiqueta(e.target.value); 

    const onclickSave = () => {
	if(valueSelect==='crear') {
	    console.log(nombreEtiqueta);
	    console.log(urlEtiqueta);
	    let seRepite = all.filter((cate) => {
		return cate.categoria.toUpperCase()===nombreEtiqueta.toUpperCase();
	    })
	    //console.log(seRepite);
	    if(nombreEtiqueta!=='' && urlEtiqueta!=='' && seRepite.length===0){
		axios.post('http://217.71.206.44/api/categorias/', {'categoria':nombreEtiqueta,
								    'url': urlEtiqueta,
								    })
		.then(res=>{console.log('Etiqueta Creada')})
		.catch(res=> console.log('fail'))
	    }
	}else {
	    console.log(nombreEtiqueta);
	    if(nombreEtiqueta!=='') {
		//Eliminar etiqueta
		axios.delete(`http://217.71.206.44/api/categorias/${nombreEtiqueta}`)
		.then(res => console.log('Etiqueta Eliminada'))
		.catch(res => console.log('fail'))
	    }
	}
	onClose();
    }

    let [all, setAll] = useState([]);
    useEffect(() => {
	axios.get('http://217.71.206.44/api/categorias/')
	.then(res => {
	    setAll(res.data);
	})
    }, [])


    return (
	<>
	<Button onClick={onOpen}>Etiquetas</Button>
	<Modal isOpen={isOpen} onClose={onClose}>
	    <ModalOverlay />
	    <ModalContent>
		<ModalHeader>Etiquetas</ModalHeader>
		<ModalCloseButton />
		<ModalBody pb={6}>

		    <FormControl >
			<FormLabel>¿Que desea realizar?</FormLabel>
			<Select onChange={handleChange} value={valueSelect}>
			    <option value='eliminar'>Eliminar Etiqueta</option>
			    <option value='crear'>Crear Etiqueta</option>
			</Select>
		    </FormControl>
		    
		    <FormControl>
			<FormLabel>Nombre de la Etiqueta</FormLabel>
			    {
				valueSelect==='crear' && (
			    <>
			    <Input  placeholder='Nombre etiqueta' value={nombreEtiqueta} onChange={handleNombreEtiq}/>
			    <Input  placeholder='URL imagen' value={urlEtiqueta} onChange={handleUrlEtiq}/>
			    </>
			    )

			    }{
				valueSelect==='eliminar' && (
				    <Select placeholder='Seleccione una etiqueta' value={nombreEtiqueta} onChange={handleNombreEtiq}>
					{
					    all.map((cat, index) => {
						return (
						    <option value={cat.categoria} key={index}>{cat.categoria}</option>
						)})
					}
				    </Select>)
			    }
		    </FormControl>

		</ModalBody>

		<ModalFooter>
		    <Button colorScheme='blue' mr={3} onClick={onclickSave}>
			{valueSelect}	
		    </Button>
		    <Button onClick={onClose}>Cancel</Button>
		</ModalFooter>
	    </ModalContent>
	</Modal>
	</>
    )
}

export default CrearEtiquetas
