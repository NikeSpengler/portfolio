// eslint-disable-next-line no-unused-vars
import React from 'react'
import { motion, useCycle  } from 'framer-motion'
import "./Navbar.css"

function Navbar() {

const [ sidebar, toggleSidebar ] = useCycle(false, true)

  return (
    <nav className='sticky top-0 inset-x-0 h-16 bg-white'>
        <div className='container mx-auto w-full h-full px-4 flex items-center'>
            <div className='relative z-10'>
                <motion.button 
                animate={sidebar ? "open" : "closed"}
                onClick={() => toggleSidebar()} 
                className='flex flex-col space-y-1'>
                    <motion.span variants={{
                        closed:{ rotate: 0, y: 0 },
                        open: { rotate: 45, y: 6 },
                    }}
                    className='w-7 h-0.5 bg-black block'></motion.span>
                    <motion.span variants={{
                        closed:{ opacity: 1 },
                        open: { opacity: 0 },
                    }}
                    className='w-7 h-0.5 h-px bg-black block'></motion.span>
                    <motion.span variants={{
                        closed:{ rotate: 0, y: 0 },
                        open: { rotate: -45, y: -6 },
                    }}
                    className='w-7 h-0.5 h-px bg-black block'></motion.span>
                </motion.button>
            </div>
        </div>
        {sidebar && (
              <div className='fixed inset-0 bg-white space-y-10 p-6 container mx-auto flex flex-col justify-center items-center'>
              <div>
                  <ul className='space-y-5'>
                      <li>
                          <a href="#" className='text-4xl  py-2'>Intro</a>
                      </li>
                      <li>
                          <a href="#" className='text-4xl  py-2'>About</a>
                      </li>
                      <li>
                          <a href="#" className='text-4xl  py-2'>Skills</a>
                      </li>
                      <li>
                          <a href="#" className='text-4xl py-2'>Contact</a>
                      </li>
    
                  </ul>
              </div>
        
            </div>
        )}
      
    </nav>
  )
}

export default Navbar