import React,{useEffect} from 'react'
import Configuracion from "../pages/Configuracion";
import {
    Routes,
    Route,
    Link,
    useNavigate,
  } from "react-router-dom";
  import Home from '../pages/Home';
  import Populares from "../pages/Populares";
  import TodosLosAnalisis from "../pages/TodosLosAnalisis";
  import Mensajes from "../pages/Mensajes";
  import Rango from "../pages/Rango";
import CrearEtiquetas from './CrearEtiquetas.js'


const Navbar = () => {


    let navigate = useNavigate();
    const handleClick= () => {
      localStorage.clear();
      navigate("/login")
    }
    useEffect(() => {
      let abortController = new AbortController();
      const cuenta = localStorage.getItem("correo");
      //const cuenta2 = localStorage.getItem("rango");
      
      if (cuenta) {
        //console.log(cuenta2)

      }else{
          navigate("/login")
      }
      return() => {
        abortController.abort();  
      }
    }, []);
    return (
        <>
          < >
            <Link className="navbar" to="/">
                Home 
              </Link>
              <Link className="navbar" to="/populares">Analisis Populares</Link>
              <Link className="navbar" to="/analisis">Todos los Analisis</Link>
		      <CrearEtiquetas/>
              <div>
              
              <nav className="menu">
                  <ul>
                      <li><button className="usuario" >Usuario</button>
                          <ul >    
                            <button><Link className="despliegue" to="/rango">Rango</Link></button>
                            <button><Link className="despliegue" to="/mensajes">Mensajes</Link></button>
                            <button><Link className="despliegue" to="/configuracion">Configuracion</Link></button>
                            <button onClick={handleClick}>Cerrar sesión</button>
                          </ul>
                      </li>
                  </ul>
              </nav>
              <hr></hr>
               </div>
          </>
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/populares" element={<Populares />} />
          <Route path="/analisis" element={<TodosLosAnalisis />} />
          <Route path="/mensajes" element={<Mensajes />} />
          <Route path="/rango" element={<Rango />} />
          <Route path="/configuracion" element={<Configuracion />} />
        </Routes>
    </>
    )
}

export default Navbar
