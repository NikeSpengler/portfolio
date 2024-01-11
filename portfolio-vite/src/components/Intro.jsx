// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./Intro.css"

function Intro() {
  return (
    <div id="Intro" className="bg-white text-black min-h-screen px-4 flex flex-col justify-center">
        <div className='intro-text'>
            <div className='space-y-5 top-0 flex flex-col p-6'>
                <a href='https://github.com/NikeSpengler' className="text-4xl font-light text-black">GitHub</a>
                <a href=''className="text-4xl font-light text-black">Linkedin</a>
            </div>
        </div>
        <div className='img'>
            <img src="assets/Shape1.png" alt="" className='' />
        </div>
    
    </div>
  )
}

export default Intro