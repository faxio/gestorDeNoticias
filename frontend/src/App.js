import React, { useEffect } from "react";


import Navbar from "./components/Navbar";
import Register from "./pages/Register";

function App() {

  
  /*
  const addTodoHandler = () => {
    axios.post('http://localhost:8000/api/todo/', { 'title': title, 'description': desc })
      .then(res => console.log(res))
};
*/
  return (
    <>
      <Navbar/>
    </>
  );
}

export default App;