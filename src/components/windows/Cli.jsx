import React from 'react'
import MacWindows from './MacWindows'
import Terminal from 'react-console-emulator'
import './cli.scss'

const Cli = ({windowName,setWindowState}) => {
  return (
    <MacWindows windowName={windowName} setWindowState={setWindowState}>
        <div className="cli-window">
            <Terminal 
                commands={{
             

    about: {
      description: "Learn more about me",
      usage: "about",
      fn: () => {
        return `
Hi, I'm Aditya 👋
A passionate Full Stack Developer who loves building
clean UI, scalable backend systems, and creative web experiences.
        `;
      }
    },

    projects: {
      description: "View my projects",
      usage: "projects",
      fn: () => {
        return `
🚀 Featured Projects:

1. Portfolio Website
2. E-commerce Platform
3. Task Management App
4. Real-time Chat Application

(Visit my GitHub for more!)
        `;
      }
    },

    skills: {
      description: "View my technical skills",
      usage: "skills",
      fn: () => {
        return `
💻 Tech Stack:

Frontend: React, Next.js, Tailwind CSS
Backend: Node.js, Express
Database: MongoDB, PostgreSQL
Other: Git, Docker, REST APIs
        `;
      }
    },

    contact: {
      description: "Get my contact details",
      usage: "contact",
      fn: () => {
        return `
📬 Contact Me:

Email: aditya@email.com
LinkedIn: linkedin.com/in/aditya
GitHub: github.com/aditya
        `;
      }
    },

    resume: {
      description: "View my resume",
      usage: "resume",
      fn: () => {
        return "Opening resume... (add your resume link here)";
      }
    },
                    echo: {
                        description:'Echo a passed string',
                        usage:'echo <string>',
                        fn:(...args)=> args.join('')
                    }
                }}
                welcomeMessage={`wellcome to the React terminal!
                    
                    
Available commands:

about      - Who I am
projects   - View my projects
skills     - My technical skills
contact    - How to reach me
resume     - View / download resume
clear      - Clear the terminal
echo       - Echo a passed string

Type any command to continue...
        `}
                promptLabel={'adityaDeshmukh:~$'}
                promptLabelStyle={{color:'green'}}
                 
            />
        </div>
    </MacWindows>
   
  )
}

export default Cli
