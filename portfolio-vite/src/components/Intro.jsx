// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./Intro.css"
import {motion} from "framer-motion"

const Intro = () => {
    return (
        <div id="Intro" className="gap-8 py-6 min-h-screen md:h-full">
        <div className='space-y-5 top-0 flex flex-col text-center md:mx-0 md:text-center'>
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
                <h1 className="text-[30px] md:text-[50px] font-light text-stone-600 md:text-5xl md:pt-10 px-[20px] leading-tight tracking-wide">Graphic Designer | Frontend Developer</h1>
                
            </motion.div>
          
            {/* <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{delay: 0.4, duration: 1}}
              variants= {{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0}
              }}
            >
                <a href="#Contact" className="text-4xl font-light text-left text-stone-400 pb-6 gap-6 md:pb-8 md:text-5xl">Contact me →</a>
            </motion.div> */}
            <div className='flex md:flex justify-center md:justify-center mx-auto md:mx-0 px-4'>
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
                    <p className="text-[16px] text-center justify-center md:text-center md:justify-center text-stone-600 pb-8 pt-0 md:pb-10 md:pt-2 max-w-[280px] md:max-w-[500px]">I am Nike Spengler a Graphic Designer and Frontend Developer with focus on and keen interest in UX. With a passion for development, usability, and creating modern, functional websites. </p>
                </motion.div>
            </div>
           
        </div>
       
        {/* Image section*/}
        <div className="flex justify-center items-center -z-10 md:order-2 pt:10">
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