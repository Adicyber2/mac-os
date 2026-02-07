import React from 'react'
import Dock from "./components/Dock"
import Nav from "./components/NavBar"
import "./app.scss"

const App = () => {
  return (
    <main>
      <Nav/>
      <Dock/>
    </main>
  )
}

export default App

