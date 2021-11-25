import React, {useState} from 'react'
import {Box,Stack, Heading, FormControl, Input, FormLabel, InputGroup,InputRightElement,Button, Text,Flex} from "@chakra-ui/react"

const Register = () => {
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
      const enviar = () =>{
          console.log(datos)
      }
    
      return (
        <>
        <Box >
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
                    <Text textAlign="center" className="textoP">Crear cuenta</Text>
  
                    <FormControl>
                      <FormLabel>Email</FormLabel>
                      <Input
                        onChange={handleInputChange}
                        placeholder="Your Email"
                        type="text"
                        name="email"
                        variant="black"
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Constraseña</FormLabel>
                      <InputGroup>
                        <Input
                          onChange={handleInputChange}
                          placeholder="Escriba su contraseña"
                          name="password"
                          type={show ? "text" : "password"}
                          variant="black"
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
                    onClick={enviar}
                  >
                    Registrate
                  </Button>
                </Box>
              </Box>
            </Flex>
          </Flex>
        </Box>
        </>
      )
      }

export default Register;
