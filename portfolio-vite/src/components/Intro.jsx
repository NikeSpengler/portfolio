// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./Intro.css"
import {motion} from "framer-motion"

const Intro = () => {
    return (
        <div id="Intro" className="gap-8 py-6 px-4 min-h-screen flex flex-col justify-center items-center text-center
    md:flex md:flex-row md:justify-center md:justify-items-center md:h-full">
        <div className='space-y-5 top-0 flex flex-col p-6 sm:p-4'>
        <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{duration: 1}}
                    variants= {{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0}
                    }}
                >
                <p className="text-4xl font-base font-italic text-stone-600 md:text-5xl">Nike Spengler</p>
                
            </motion.div>
            <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{delay: 0.2, duration: 1}}
                    variants= {{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0}
                    }}
                >
                <p className="text-3xl font-light text-stone-600 italic md:text-5xl">Frontend Developer</p>
                
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{delay: 0.4, duration: 1}}
              variants= {{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0}
              }}
            >
                <a href="#Contact" className="text-3xl font-light text-stone-500 md:text-5xl">Contact me →</a>
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