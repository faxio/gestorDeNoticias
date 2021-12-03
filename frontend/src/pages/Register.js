import React, {useState} from 'react'
import {Box,Stack,useToast, FormControl, Input, FormLabel, InputGroup,InputRightElement,Button, Heading,Flex,Text} from "@chakra-ui/react"
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom'
import '../components/estilos/register.css'

const Register = () => {
  let navigate = useNavigate();
  const toast = useToast()
  const addTodoHandler = () => {
    if( datos.nombre === "" || datos.email === "" || datos.password === "")
    toast({
      title: "Error, algo salio mal",
      description: "Se necesita rellenar todos los campos",
      status: "error",
      duration: 9000,
      isClosable: true,
    })
    else 
    axios.post('http://localhost:8000/api/user/', { 'nombre': datos.nombre, 'correo': datos.email, 'password':datos.password, 'rango':'usuario' })
      .then(res => {toast({
        title: "Cuenta Creada Correctamente",
        status: "success",
        duration: 9000,
        isClosable: true,
      }); navigate("/login");})
  };

    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
    const [datos, setDatos] = useState({
        nombre: "",
        email: "",
        password: "",
      });
      const handleInputChange = (event) => {
        setDatos({
          ...datos,
          [event.target.name]: event.target.value,
        });
      };
      const enviarDatos = (event) => {
        event.preventDefault();
      };
    
      return (
        <div className="fondo">
        <Heading className="heading">Gestor de Noticias</Heading>
          <Box >
            <Text className="textoRed2">Tienes cuenta? <Link to="/login" className="boton2">Inicia sesión</Link></Text>
          </Box>
        <Box padding="10">
          <Flex align="right" justify="center" p="10">
            <Flex minHeight="2vh"  className="forms">
              <Box
                width="fit-content"
                p="10"
                maxWidth="50vh"
                maxHeight="60vh"
              >
                <Box className="fondologin">
                  <Stack onSubmit={enviarDatos}>
                    <FormLabel textAlign="center" className="textoP">Crear cuenta</FormLabel>
                    <FormControl>
                      <FormLabel className="textoSubtitulo">Nombre</FormLabel>
                      <Input
                        onChange={handleInputChange}
                        placeholder="Nickname"
                        type="text"
                        name="nombre"
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel className="textoSubtitulo">Email</FormLabel>
                      <Input
                        onChange={handleInputChange}
                        placeholder="Your Email"
                        type="text"
                        name="email"
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel className="textoSubtitulo">Constraseña</FormLabel>
                      <InputGroup>
                        <Input
                          onChange={handleInputChange}
                          placeholder="Escriba su contraseña"
                          name="password"
                          type={show ? "text" : "password"}
                        />
                        <InputRightElement width="4.5rem">
                          <Button h="1.75rem" size="xs" onClick={handleClick}>
                            {show ? "Hide" : "Show"}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                    </FormControl>
                  </Stack>
                  <button          
                    type="submit"
                    onClick={addTodoHandler}
                    className="boton"
                  >
                    Registrate
                  </button>
                </Box>
              </Box>
            </Flex>
          </Flex>
        </Box>
        </div>
      )
      }

export default Register;
