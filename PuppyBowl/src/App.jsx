// import { useState } from 'react'
// import { ReactDOM } from 'react'
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import "./assets/API/index.js"

import AllPlayers from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";
import NewPlayerForm from "./components/NewPlayerForm";
function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<AllPlayers/>} />
        <Route path="/Players" element={<SinglePlayer />} /> 
        <Route path="/New" element={<NewPlayerForm/>}/>
      </Routes> 
    </div>
  );
}

export default App;
