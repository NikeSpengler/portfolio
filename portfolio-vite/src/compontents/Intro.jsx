// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Intro.css'

//import styled from 'styled-components'
import {motion} from 'framer-motion'

// const Section = styled.div`
//   height: 100vh;
//   background-color: purple;
//   scroll-snap-align: center;
// `

function Intro() {
  return (
    <div className='behind-motion'>
        <motion.div className='circle-motion' 
            initial={{opacity: 0.5, scale: 0.5}}
            //animate={{opacity: 1, scale: 1}} 
            transition={{duration: 2}} //delay: 2}}
            whileInView= {{opacity: 1, scale: 1}}
            drag
        ></motion.div>
    </div>
  )
}

export default Intro
