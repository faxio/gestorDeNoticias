import React, {useState} from 'react'
import {Box, Center} from "@chakra-ui/react"
import {StarIcon} from "@chakra-ui/icons"

const Register = () => {

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
    
      return (
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
    
          <Box p="6">
            <Box display="flex" alignItems="baseline">

            </Box>
    
            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
              
            >
             <Center> Registrarse </Center>
            </Box>
    
            <Box>
                    <input />
              <Box as="span" color="gray.600" fontSize="sm">
                / wk
              </Box>
            </Box>
    
            <Box display="flex" mt="2" alignItems="center">
             
              <Box as="span" ml="2" color="gray.600" fontSize="sm">
                reviews
              </Box>
            </Box>
          </Box>
        </Box>
      )
    }

export default Register;
