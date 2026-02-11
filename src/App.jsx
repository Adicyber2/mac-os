import React from 'react'
import Dock from "./components/Dock"
import Nav from "./components/NavBar"
import Github from './components/windows/Github'
import Notes from './components/windows/Notes'
import Resume from './components/windows/Resume'


import "./app.scss"



const App = () => {
  return (
    <main>
      <Nav/>
      <Dock/>

      <Github/>
      <Notes/>
      <Resume/>
    </main>
  )
}

export default App

