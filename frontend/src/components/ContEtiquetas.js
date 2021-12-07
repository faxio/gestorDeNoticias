import React, { useState,useEffect } from 'react'
import {Text,Box, Image } from '@chakra-ui/react'
import NoticiasAnalisadas from './NoticiasAnalisadas'
import './estilos/carrusel.css'
import { Imagenes } from './Imagenes'

const ContEtiquetas = () => {

    const [cat, setCat] = useState("deportes")
    const [current, setCurrent] = useState(0);
    const length = Imagenes.length;
    const [wsize, setWsize] = useState(window.innerWidth);

    useEffect(() => {
        let abortController = new AbortController();
        const handleresize = () => setWsize(window.innerWidth)
        window.addEventListener('resize',handleresize )
        return () => {
            abortController.abort();
            window.removeEventListener('resize',handleresize)
        }
    }, [])
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
      };
    
      const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
      };
    
      if (!Array.isArray(Imagenes) || Imagenes.length <= 0) {
        return null;
      }


 

    return (
        <div>
            <h1 className="textoTituloPrincipal" style={{padding:"10px 10px"}}>¿Que hay de nuevo?</h1>
            <Box className="slider" direction='row'> 
                
                <button className="boton6"  onClick={prevSlide}> {"<"}</button>
                {wsize > 760 ?
                    <Box>
                        <Image boxSize='300px' src={Imagenes[current === 0 ? length - 1 : current - 1].image} />
                        <button className="boton10" onClick={e => {setCat(Imagenes[current === 0 ? length - 1 : current - 1].category)}}>
                        {Imagenes[current === 0 ? length - 1 : current - 1].category}
                        </button>
                    </Box>
                : <></>}
                {Imagenes.map((imagen, index) => {
                    return (
                        <div className={(index===current) ? 'slide active' : 'slide'}
                        key={index}>
                        {(index===current) && (
                            <Box >
                                <Image boxSize='300px' src={imagen.image}  />
                                <button className="boton10" onClick={e => {setCat(imagen.category)}}>{imagen.category}</button>
                            </Box>
                        )}</div>
                        )
                })}
                {wsize > 1060 ?
                <Box>
                <Image boxSize='300px' src={Imagenes[current === length - 1 ? 0 : current + 1].image} />
                <button className="boton10" onClick={e => {setCat(Imagenes[current === length - 1 ? 0 : current + 1].category)}}>
                    {Imagenes[current === length - 1 ? 0 : current + 1].category}
                </button>
                </Box>
                : <></>}
                <button onClick={nextSlide} className="boton7"> {">"}</button>
            </Box>
            <Text className="textoTitulo"> {cat}</Text>
            <NoticiasAnalisadas category={cat} api={"http://217.71.206.44/api/noticias"} />
        </div>
    )
}

export default ContEtiquetas
