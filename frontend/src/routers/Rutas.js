import React from 'react'
import { BrowserRouter, Route,  Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Register from '../pages/Register'

const Rutas = () => {
    return (
        <>
            <BrowserRouter>         
                <Routes>
                        <Route exact path="/register" element={<Register/>}/>   
                        <Route exact path="/" element={ <Navbar />} />   
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Rutas
