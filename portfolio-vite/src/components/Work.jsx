// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react';

const items = [
  {
    id:1,
    title: "React Native App",
    img:"",
    desc:"React Native, Node.js, Tailwind"
  },
  {
    id:2,
    title: "React App",
    img:"",
    desc:"React Native, Node.js, Tailwind"
  },
  {
    id:3,
    title: "Memory App",
    img:"",
    desc:"React Native, Node.js, Tailwind"
  },
  {
    id:4,
    title: "Weather App",
    img:"Project 1.jpeg",
    desc:"React Native, Node.js, Tailwind"
  },
  {
    id:5,
    title: "Neck Health App",
    img:"",
    desc:"React Native, Node.js, Tailwind"
  },
  {
    id:6,
    title: "Skills",
    img:"",
    desc:"React Native, Node.js, Tailwind"
  },
];

const Single = ({item}) => {
  const ref = useRef()

  const {scrollYProgress} = useScroll({
    target: ref, 
  });

  const y = useTransform(scrollYProgress, [0,1], [-300, 300]);

  return (
    <div ref={ref} className='gap-8 py-6 px-4 bg-white text-black text-2xl min-h-screen flex flex-col justify-center items-center
    md:flex md:flex-row md:justify-center md:justify-items-center md:h-full'>
      <div id="container" className='flex justify-center items-center'>
        <img src={item.img} alt=""/>
        <motion.div id="textContainer" style={{y}}>
          <p className='text-3xl text-stone-600 pb-2'>{item.title}</p>
          <p className='text-xl text-stone-600 pb-4 max-w-[120px]'>{item.desc}</p>
          <button className='text-xl text-stone-600 pb-20 hover:text-red-600'>GitHub →</button>
        </motion.div>
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