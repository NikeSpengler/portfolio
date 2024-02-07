
import { motion } from 'framer-motion'
import Footer from './Footer'

const variants = {
    intitial: {
        y: 500,
        opcaity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
        },
    },
};


const Contact = () => {
    return (
        <div>
            <motion.div id="Contact" className="bg-lime-900 min-h-screen px-4 pt-[100px] md:pt-[200px] 
            flex flex-col justify-center items-center h-full md:flex md:flex-row" variants={variants} initial="initial" whileInView="animate">
                <motion.div className='space-y-5 top-0 flex flex-col p-8' variants={variants}>
                    <motion.h1 className="text-4xl font-light text-stone-400 md:text-5xl" variants={variants}>Contact me!</motion.h1>
                    <motion.a href='https://github.com/NikeSpengler' className="text-4xl font-light text-stone-400 hover:text-amber-200 md:text-5xl" variants={variants}>GitHub →</motion.a>
                    <motion.a href='https://www.linkedin.com/in/nikespengler/'className="text-4xl font-light text-stone-400 hover:text-amber-200 md:text-5xl"  variants={variants}>Linkedin →</motion.a>
                </motion.div>
                <motion.div className='w-[300px] h-[300px]' 
                    initial={{opacity:0}} 
                    whileInView={{opacity:1}}
                    transition={{delay:0.5, duration:4 }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="attachment">
                        <motion.path 
                            strokeWidth={5} 
                            fill="none"
                            initial={{pathLength:0}}
                            whileInView={{pathLength:1}}
                            transition={{duration:3}}
                        d="M9.29 21a6.23 6.23 0 0 1-4.43-1.88 6 6 0 0 1-.22-8.49L12 3.2A4.11 4.11 0 0 1 15 2a4.48 
                        4.48 0 0 1 3.19 1.35 4.36 4.36 0 0 1 .15 6.13l-7.4 7.43a2.54 2.54 0 0 1-1.81.75 2.72 2.72 
                        0 0 1-1.95-.82 2.68 2.68 0 0 1-.08-3.77l6.83-6.86a1 1 0 0 1 1.37 1.41l-6.83 6.86a.68.68 0 
                        0 0 .08.95.78.78 0 0 0 .53.23.56.56 0 0 0 .4-.16l7.39-7.43a2.36 2.36 0 0 0-.15-3.31 2.38 
                        2.38 0 0 0-3.27-.15L6.06 12a4 4 0 0 0 .22 5.67 4.22 4.22 0 0 0 3 1.29 3.67 3.67 0 0 0 
                        2.61-1.06l7.39-7.43a1 1 0 1 1 1.42 1.41l-7.39 7.43A5.65 5.65 0 0 1 9.29 21z" data-name="attach">
                        </motion.path>
                    </svg>
                </motion.div> 
            </motion.div>
            
            <div>
                <Footer/>
            </div>
        </div> 
      
   
    )
}

export default Contact