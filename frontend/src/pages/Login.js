import React, {useState} from 'react'
import {Box,Stack, FormControl,useToast, Input, FormLabel, InputGroup,InputRightElement,Button, Heading,Flex, Text} from "@chakra-ui/react"
import axios from 'axios';
import '../components/estilos/register.css'
import { Link, useNavigate} from 'react-router-dom';

const Login = () => {

    let navigate = useNavigate();
    const toast = useToast()

    async function addTodoHandler () {
        await axios.get(`http://217.71.206.44/api/user/${datos.email}?passw=${datos.password}`)
          .then(res => { toast({
          title: "Cuenta Iniciada Correctamente",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        //localStorage.setItem("rango", res.data[0].rango);
        localStorage.setItem("rango", res.data.rango);
        localStorage.setItem("nombre", res.data.nombre);
        localStorage.setItem("contraseña", datos.password);
        localStorage.setItem("correo", datos.email);
        navigate("/");
      })
          .catch(res => {toast({
            title: "Error, algo salio mal",
            description: "Su correo o contraseña esta mal",
            status: "error",
            duration: 9000,
            isClosable: true,
          });  });
      };


    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
    const [datos, setDatos] = useState({
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
          <Flex align="right" justify="center" p="12">
            <Flex minHeight="2vh"  className="forms">
              <Box
                width="fit-content"
                p="10"
                maxWidth="50vh"
                maxHeight="45vh"
              >
                <Box className="fondologin">
                  <Stack onSubmit={enviarDatos}>
                    <FormLabel textAlign="center" className="textoP">Iniciar Sesión</FormLabel>
                
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
                    Login
                  </button>
                    <Box >
                        <Text >Nuevo en el gestor? <Link to="/register" className="textoRedireccionador">Registrate</Link></Text>
                    </Box>
                </Box>
              </Box>
            </Flex>
          </Flex>
        </Box>
        </div>
    )
}

export default Login
