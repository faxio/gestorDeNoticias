import React, { useState } from "react";
import {
  Popover,
  Stack,
  PopoverTrigger,
  Button,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  PopoverHeader,
} from "@chakra-ui/react";
import { ChatIcon } from "@chakra-ui/icons";
import "./estilos/charla.css";

const Charla = () => {
  const [texto, setTexto] = useState(
    "Seleccione la opción en la que necesita un poco de explicaión"
  );

  const handleClick = () => {
    setTexto(
      "Para ser analizador tiene que seleccionar rango en el apartado usuario, para posteriormente completar el formulario"
    );
  };
  const handleClick1 = () => {
    setTexto(
      "Para poder analizar noticias tiene que ir al apartado rango, donde se le desplegaran todas las noticas que están por analizar"
    );
  };
  const handleClick2 = () => {
    setTexto(
      "Para etiquetar noticias debe seleccionar una de ellas para después seleccionar la opción de asginar etiquetas"
    );
  };
  return (
    <div className="principalPopover">
      <Popover placement="top-start">
        <PopoverTrigger>
          <ChatIcon w={8} h={8} />
        </PopoverTrigger>
        <PopoverContent>
          <PopoverHeader fontWeight="semibold">
            ¿En que podemos ayudarlo?
          </PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
            {texto}
            <Stack spacing={2} direction="row">
              <Button onClick={handleClick} colorScheme="green" p="3">
                Solicitudes
              </Button>
              <Button onClick={handleClick1} colorScheme="green" p="3">
                Análisis
              </Button>
              <Button onClick={handleClick2} colorScheme="green" p="3">
                Etiquetado
              </Button>
            </Stack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default Charla;
