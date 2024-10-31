// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./Intro.css"
import {motion} from "framer-motion"

const Intro = () => {
    return (
        <div id="Intro" className="gap-8 py-6 min-h-screen md:h-full">
        <div className='space-y-5 top-0 flex flex-col text-left md:mx-0 md:text-left'>
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
                <p className="text-[60px] md:text-[140px] font-light text-stone-600 md:text-5xl px-[20px] md:pl-[16px] md:pr-[20px] leading-tight tracking-wide">Nike Spengler</p>
                
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
            <div className='flex md:flex justify-end md:justify-end mx-auto md:mx-0 pr-4'>
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
                    <p className="text-[16px] text-left justify-end md:justify-end text-stone-600 pb-20 gap-6 md:pb-8 pt-10 md:pt-20 md:text-left max-w-[280px] md:max-w-[350px]">I am a software developer with focus on and keen interest in frontend development. With a passion for development, usability, and creating modern, functional websites. </p>
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