import { useState } from 'react'
import './App.css'
import Clubs from "./components/Clubs";

function App() {
  return (
    <div className="App">
      <h1>UMBC Clubs</h1>
      <h2>Jack Winkler</h2>
      <h2>ID: 126648</h2>
      <Clubs />
    </div>
  )
}

export default App
