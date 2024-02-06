// eslint-disable-next-line no-unused-vars
import React from 'react'
import Footer from './Footer'


const Contact = () => {
    return (
        <div id="Contact" className="bg-lime-900 min-h-screen px-4 md:pt-[200px] pt-[100px] flex flex-col justify-center h-full">
        <div className='space-y-5 top-0 flex flex-col p-8'>
           <h1 className="text-4xl font-light text-stone-400 md:text-5xl">Contact me!</h1>
           <a href='https://github.com/NikeSpengler' className="text-4xl font-light text-stone-400 hover:text-amber-200 md:text-5xl">GitHub →</a>
           <a href='https://www.linkedin.com/in/nikespengler/'className="text-4xl font-light text-stone-400 hover:text-amber-200 md:text-5xl">Linkedin →</a>
       </div>
       <Footer/>
   </div> 
   
    )
}

export default Contact