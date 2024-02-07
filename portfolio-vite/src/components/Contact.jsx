
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
}


const Contact = () => {
    return (
        <div id="Contact" className="bg-lime-900 min-h-screen px-4 md:pt-[200px] pt-[100px] flex flex-col justify-center h-full">
            <motion.div className='space-y-5 top-0 flex flex-col p-8' variants={variants} initial="initial" whileInView="animate">
                <motion.h1 variants={variants} className="text-4xl font-light text-stone-400 md:text-5xl">Contact me!</motion.h1>
                <motion.a variants={variants} href='https://github.com/NikeSpengler' className="text-4xl font-light text-stone-400 hover:text-amber-200 md:text-5xl">GitHub →</motion.a>
                <motion.a variants={variants} href='https://www.linkedin.com/in/nikespengler/'className="text-4xl font-light text-stone-400 hover:text-amber-200 md:text-5xl">Linkedin →</motion.a>
            </motion.div>
            <Footer/>
        </div> 
   
    )
}

export default Contact