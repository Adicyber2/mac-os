import {useState} from 'react'
import Dock from "./components/Dock"
import Nav from "./components/NavBar"
import Github from './components/windows/Github'
import Notes from './components/windows/Notes'
import Resume from './components/windows/Resume'
import Spotify from './components/windows/spotify'


import "./app.scss"
import Cli from './components/windows/Cli'
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import spotify from './components/windows/spotify'



const App = () => {

  const [windowState, setWindowState] = useState({
    github:false,
    note:false,
    resume:false,
    spotify:false,
    cli:false
    
  })

  
  

  return (
    <main>
      <Nav/>
      <Dock windowState={windowState} setWindowState={setWindowState}/>

      {windowState.github && <Github windowName="github" windowState={windowState} setWindowState={setWindowState} />}
     {windowState.note && <Notes windowName="note" windowState={windowState} setWindowState={setWindowState}/>}
      {windowState.resume &&<Resume windowName="resume" windowState={windowState} setWindowState={setWindowState}/>}
      {windowState.spotify &&<Spotify windowName="spotify" windowState={windowState} setWindowState={setWindowState}/>}
      {windowState.cli &&<Cli windowName="cli" windowState={windowState} setWindowState={setWindowState}/>}
    </main>
  )
}

export default App

