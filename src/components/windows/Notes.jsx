
import React,{useEffect,useState} from 'react'
import Markdown from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import MacWindows from './MacWindows'
import "./note.scss"

const Notes = () => {



    const [markdown, setMarkdown] = useState(null)

    useEffect(()=>{
        fetch("/mac-os/note.txt")
        .then(res=>res.text())
        .then(text=>setMarkdown(text))
    },[])

  return (
    <MacWindows>
        <div className="note-window">
            {markdown ? <SyntaxHighlighter language='typescript' style={atelierDuneDark}>{markdown}</SyntaxHighlighter> : <p>Loding...</p>}
        </div>
    </MacWindows>
  )
}

export default Notes
