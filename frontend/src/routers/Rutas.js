import React from 'react'
import { BrowserRouter, Route,  Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Login from '../pages/Login'
import Register from '../pages/Register'

const Rutas = () => {
    return (
        <>
            <BrowserRouter>         
                <Routes>
                        <Route exact path="/register" element={<Register/>}/>   
                        <Route exact path="/login" element={<Login/>}/>
                        <Route exact path="/" element={ <Navbar />} />   
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Rutas
