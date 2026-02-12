import React from 'react'
import {Rnd} from 'react-rnd'
import "./MacWindow.scss"
const MacWindows = ({children,width="40vw",height="40vw"}) => {
  return (
    <Rnd  
      default={{
            width:width,
            height:height,
            x:300,
            y:200
        }}
    >
        
      

        <div className="window">
            <div className="nav"> 
                <div className="dots">
                    <div className="dot red"></div>
                    <div className="dot yellow"></div>
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
