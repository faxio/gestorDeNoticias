import React, {useState} from 'react'
import {Box,Stack, FormControl, Input, FormLabel, InputGroup,InputRightElement,Button, Heading,Flex} from "@chakra-ui/react"
import axios from 'axios';
import '../components/estilos/register.css'

const Register = () => {

   
  const addTodoHandler = () => {
    axios.post('http://localhost:8000/api/todo/', { 'nombre': datos.nombre, 'correo': datos.email, 'password':datos.password })
      .then(res => console.log(res))
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
                  <Button
                    px={100}
                    type="submit"
                    marginTop="15px"
                    colorScheme="blue"
                    onClick={addTodoHandler}
                  >
                    Registrate
                  </Button>
                </Box>
              </Box>
            </Flex>
          </Flex>
        </Box>
        </div>
      )
      }

export default Register;
