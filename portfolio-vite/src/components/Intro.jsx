// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./Intro.css"

function Intro() {
  return (
    <div id="Intro" className="bg-white text-black min-h-screen px-4 flex flex-col justify-center">
        <div className='intro-text'>
            <div className='wrapper'>
                <a href='' className="flex flex-col">GitHub</a>
                <a href=''>Linkedin</a>
            </div>
        </div>
        <div className='img'>
            <img src="/portfolio-vite/src/assets/Shape1.png" alt="" />
        </div>
    
    </div>
  )
}

export default Intro