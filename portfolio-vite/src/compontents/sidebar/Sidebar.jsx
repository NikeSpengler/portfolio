// eslint-disable-next-line no-unused-vars
import React from 'react'
import {motion} from 'framer-motion'
import './Sidebar.css'
import Togglebutton from './togglebutton/Togglebutton'
import Links from './links/Links'


function Navbar() {
  return (
    <div className='container'>
        <motion.div className='sidebar'>
          <div className='bg'>
            <Links/>
          </div>
        </motion.div>
        <Togglebutton/>
    </div>
  )
}

export default Navbar