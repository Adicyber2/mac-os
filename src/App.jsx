import React from 'react'
import Dock from "./components/Dock"
import Nav from "./components/NavBar"
import Github from './components/windows/Github'
import "./app.scss"


const App = () => {
  return (
    <main>
      <Nav/>
      <Dock/>

      <Github/>
    </main>
  )
}

export default App

