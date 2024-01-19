// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./Intro.css"
import {motion} from "framer-motion"

function Intro() {
  return (
    <div id="Intro" className="gap-8 py-10 g-white text-black min-h-screen px-4 flex flex-col justify-center items-center
    md:flex md:flex-row md:justify-center md:justify-items-center md:h-full">
        <div className='space-y-5 top-0 flex flex-col p-6'>
            <motion.div 
                    className='space-y-5 top-0 flex flex-col p-6'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{duration: 1}}
                    variants= {{
                        hidden: { opacity: 0, x: -300 },
                        visible: { opacity: 1, x: 0}
                    }}
                >
                <a href='https://github.com/NikeSpengler' className="text-4xl font-light text-black md:text-5xl">GitHub</a>
                <a href=''className="text-4xl font-light text-black md:text-5xl">Linkedin</a>
            </motion.div>
        </div>
       
        {/* Image section*/}
        <div className="flex justify-center -z-10 md:order-2">
            <motion.div 
                className='circle' 
                initial={{opacity: 0.5, scale: 0.5}}
                animate={{opacity: 1, scale: 0.5}} 
                transition={{duration: 2}}
                whileInView={{opacity: 1, scale: 1}}
            ></motion.div>
        </div>
    </div>
  )
}

export default Intro