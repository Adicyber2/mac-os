import {useState} from 'react'
import {Rnd} from 'react-rnd'
import "./MacWindow.scss"
const MacWindows = ({children, windowName,setWindowState}) => {
const [size, setSize] = useState({
    width:"40vw",height:"40vw",
})

  return (
    <Rnd  
        size={size}
    //   default={{
           
    //         x:300,
    //         y:200
    //     }}
    >
        
      

        <div className="window" >
            <div className="nav"> 
                <div className="dots">
                    <div onClick={()=> setWindowState(state =>({...state,[windowName]:false}))} className="dot red"></div>
                    <div onClick={()=>setSize({
                        height:"100vh",
                        width:"100vw",
                       
                    })
                    } className="dot yellow"></div>
                    <div className="dot green"></div>
                </div>

                <div className="title"><p>adityadeshmukh - zsh</p></div>
            </div>
            <div className="main-containt">
                {children}
            </div>
        </div>
        
    </Rnd>
  )
}

export default MacWindows
