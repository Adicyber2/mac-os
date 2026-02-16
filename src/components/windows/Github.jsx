import React from 'react'
import githubData from '../../assets/github.json'
import MacWindows from './MacWindows'
import "./github.scss"

const GitCard =({data = {id:1,image:"",title:"",discription:"",tags:[],githubRepo:"",liveLink:"",}})=>{

    
    
    return <div className="card">
                    <img src={data.image} alt="" />
                    <h1>{data.title}</h1>
                    <p className='discription'>{data.discription}</p>

                    <div className="tags">
                        {
                            data.tags.map(tag=><p className='tag'>{tag}</p>)
                        }
                    </div>

                    <div className="urls">

                        <a href={data.githubRepo}>Github Reository</a>
                        {data.liveLink &&<a href={data.liveLink}>live project link</a>}
                    </div>
                </div>
}

const Github = ({windowName,windowState,setWindowState}) => {
  return (
    <MacWindows windowName={windowName} windowState={windowState} setWindowState={setWindowState}>
        <div className="cards">
            {githubData.map(project =>{
                return <GitCard data={project}/>
            })}
        </div>
    </MacWindows>
  )
}

export default Github
