import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import Populares from "./pages/Populares";
import TodosLosAnalisis from "./pages/TodosLosAnalisis";
import Mensajes from "./pages/Mensajes";
import Rango from "./pages/Rango";
import Configuracion from "./pages/Configuracion";


function App() {
  return (
    <BrowserRouter>
        <div >
            
            <Link className="navbar" to="/">
              Home
            </Link>
            <Link className="navbar" to="/populares">Analisis Populares</Link>
            <Link className="navbar" to="/analisis">Todos los Analisis</Link>
            <div>
            <nav className="menu">
                <ul>
                    <li><button className="usuario" >Usuario</button>
                        <ul >      
                          <button><Link className="despliegue" to="/rango">Rango</Link></button>
                          <button><Link className="despliegue" to="/mensajes">Mensajes</Link></button>
                          <button><Link className="despliegue" to="/configuracion">Configuracion</Link></button>
                        </ul>
                    </li>
                </ul>
            </nav>
            <hr></hr>
        </div>
        </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/populares" element={<Populares />} />
        <Route path="/analisis" element={<TodosLosAnalisis />} />
        <Route path="/mensajes" element={<Mensajes />} />
        <Route path="/rango" element={<Rango />} />
        <Route path="/configuracion" element={<Configuracion />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;