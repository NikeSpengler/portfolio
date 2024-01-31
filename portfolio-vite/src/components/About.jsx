// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./About.css"
import {motion} from "framer-motion"

const About = () => {
    return (
        <div id="About" className="flex flex-col justify-center items-center bg-stone-300 text-white min-h-screen md:px-28 px-14">
         <motion.div 
                    className="flex flex-col"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{duration: 1}}
                    variants= {{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0}
                    }}
                >
                <p className="flex flex-col text-base text-stone-900 pt-16 md:text-lg md:max-w-lg lg:max-w-xl xl:max-w-2xl">
                I am a junior Software Developer based in Stockholm, Sweden. I have mainly worked with JavaScript, CSS, HTML, React/ React Native, Next.js, Node.js. Apart from this, I am open to testing and learning new technologies. 
                </p>
            </motion.div>
      
        <p className="flex flex-col text-base text-stone-900 pt-10 md:text-lg md:max-w-lg lg:max-w-xl xl:max-w-2xl ">
        Before I decided to become a developer, I worked as a graphic designer and I have a Bachelors degree in Graphic Design & Illustration from Konstfack GDI. Most of all, it has given me a deep understanding and a keen interest in usability.
        </p>
        <p className="flex flex-col text-base text-stone-900 pt-10 md:text-lg md:max-w-lg lg:max-w-xl xl:max-w-2xl">
        As a developer, I am prestigeless and passionate about collaborating with others to develop software that meets the needs of users and delivers real value. My main passion is building functionality that is intended to play an important role in peoples lives. 
        </p>
        <p className="flex flex-col text-base text-stone-900 pt-10 pb-16 md:text-lg md:max-w-lg lg:max-w-xl xl:max-w-2xl">
        I love the continuous learning and growth that comes with this field and am always eager to learn new things. I am always looking for ways to improve my skills and become a better developer.
        </p>

    </div>
    )
}

export default About

