import React from 'react'
import Dock from "./components/Dock"
import Nav from "./components/NavBar"
import MacWindows from './components/windows/MacWindows'
import "./app.scss"

const App = () => {
  return (
    <main>
      <Nav/>
      <Dock/>

      <MacWindows>
        <h1>hello</h1>
      </MacWindows>
    </main>
  )
}

export default App

