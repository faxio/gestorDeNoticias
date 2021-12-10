import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Login from "../pages/Login";
import Register from "../pages/Register";
import TodosLosAnalisis from "../pages/TodosLosAnalisis";
import Mensajes from "../pages/Mensajes";
import Rango from "../pages/Rango";
import Configuracion from "../pages/Configuracion";
import Charla from "../components/Charla";

const Rutas = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<Navbar />}>
            <Route path="/analisis" element={<TodosLosAnalisis />} />
            <Route path="/mensajes" element={<Mensajes />} />
            <Route path="/rango" element={<Rango />} />
            <Route path="/configuracion" element={<Configuracion />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Charla />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Rutas;
