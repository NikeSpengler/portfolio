/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react';



const items = [
  {
    id:1,
    title: "React Native App",
    img:"https://static.wixstatic.com/media/1aa858_77b0d43b88fb4ae38382f560879096d4~mv2.jpg/v1/fill/w_605,h_465,al_c,q_80,usm_0.66_1.00_0.01/1aa858_77b0d43b88fb4ae38382f560879096d4~mv2.jpg",
    desc:"React Native, Node.js, Tailwind",
    url:"https://github.com/NikeSpengler",
  },
  {
    id:2,
    title: "React App",
    img:"https://private-user-images.githubusercontent.com/32640656/245411868-9e2b5e3f-ccb7-4af0-96cc-e9eb9364884c.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDcyOTMyNTcsIm5iZiI6MTcwNzI5Mjk1NywicGF0aCI6Ii8zMjY0MDY1Ni8yNDU0MTE4NjgtOWUyYjVlM2YtY2NiNy00YWYwLTk2Y2MtZTllYjkzNjQ4ODRjLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAyMDclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMjA3VDA4MDIzN1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTIyNDg5MzU4Y2UxMjg2ZThlYjY5OTM3MGQwNTQ1NGVmMDFlZjYwMDJkMjQ5MzIzMGY3NTUyOGU5ZTZhYzUwYTkmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.SdGxekrZwkVJIPo4tlzWNpT7kPzdmsZjiVF8ua5UzdM",
    desc:"React Native, Node.js, Tailwind",
    url:"https://github.com/NikeSpengler",
  },
  {
    id:3,
    title: "Memory App",
    img:"https://static.wixstatic.com/media/1aa858_77b0d43b88fb4ae38382f560879096d4~mv2.jpg/v1/fill/w_605,h_465,al_c,q_80,usm_0.66_1.00_0.01/1aa858_77b0d43b88fb4ae38382f560879096d4~mv2.jpg",
    desc:"React Native, Node.js, Tailwind",
    url:"https://github.com/NikeSpengler",
  },
  {
    id:4,
    title: "Weather App",
    img:"https://static.wixstatic.com/media/1aa858_77b0d43b88fb4ae38382f560879096d4~mv2.jpg/v1/fill/w_605,h_465,al_c,q_80,usm_0.66_1.00_0.01/1aa858_77b0d43b88fb4ae38382f560879096d4~mv2.jpg",
    desc:"React Native, Node.js, Tailwind",
    url:"https://github.com/NikeSpengler",
  },
  {
    id:5,
    title: "Neck Health App",
    img:"https://static.wixstatic.com/media/1aa858_77b0d43b88fb4ae38382f560879096d4~mv2.jpg/v1/fill/w_605,h_465,al_c,q_80,usm_0.66_1.00_0.01/1aa858_77b0d43b88fb4ae38382f560879096d4~mv2.jpg",
    desc:"React Native, Node.js, Tailwind",
    url:"https://github.com/NikeSpengler",
  },
  {
    id:6,
    title: "Skills",
    img:"https://static.wixstatic.com/media/1aa858_77b0d43b88fb4ae38382f560879096d4~mv2.jpg/v1/fill/w_605,h_465,al_c,q_80,usm_0.66_1.00_0.01/1aa858_77b0d43b88fb4ae38382f560879096d4~mv2.jpg",
    desc:"React Native, Node.js, Tailwind",
    url:"https://github.com/NikeSpengler",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  // const {scrollYProgress} = useScroll({
  //   target: ref, 
  //   offset: ["start start", "end start"]
  // });

  // const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <div ref={ref} className='bg-white md:px-8'>
      <div id="container" className='flex justify-center items-center gap-6 w-full h-full'>
        <div id="wrapper" className='h-full m-auto flex justify-center items-center gap-[50px] 
        flex flex-col justify-center items-center md:max-w-[1366px] md:flex md:flex-row 
        md:justify-center md:justify-items-center'>
          <div id="imgContainer" className='md:flex-1 md:w-6/12 md:pb-[150px] pt-20'>
            <img src={item.img} alt="" className='w-full h-full object-cover'/>
          </div>
          
          <motion.div id="textContainer" className="md:flex-1 md:w-6/12 pl-8 pb-10 md:pb-[150px]" >
            <p className='text-2xl md:text-3xl text-stone-600 pb-2 w-[300px]'>{item.title}</p>
            <p className='text-lg md:text-xl text-stone-600 pb-4 w-[120px]'>{item.desc}</p>
            <a href="https://github.com/NikeSpengler" className='text-lg md:text-xl text-stone-600 hover:text-red-400'>GitHub →</a>
          </motion.div>
          
        </div>
       
      </div>
    </div>
  )
}

const Work = () => {
  const ref = useRef()
  const {scrollYProgress} = useScroll({
    target: ref, 
    offset: ["end end", "start start"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  })

  return (
    <div id="Work" ref={ref} className="relative -z-10 md:order-2 bg-white text-stone-600 min-h-screen px-4 pt-4 pb-4 flex flex-col justify-center">
        <div id="progress" className='sticky top-0 pt-12 pb-6'>
          <p className='text-4xl flex flex-col justify-center items-center pb-2'>Selected work</p> 
          <p className='text-2l flex flex-col justify-center items-center pb-4'>More projects on my GitHub</p>
          <motion.div style={{scaleX: scaleX}} id="progressbar" className='inset-x-0 h-16 h-[3px] bg-stone-400'></motion.div>
        </div>
        <div>
          {items.map (item => (
            <Single item ={item} key={item.id}/>
          ))}
        </div>
    </div>  
  )
}

export default Work