/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react';
import { getImageURL } from '../utils/img-util';




const items = [
  {
    id:1,
    title:"Examwork KYH",
    img:"ExamKYH.png",
    desc:"Built in: React, Next.js, Tailwind, Contentful, GraphQL",
    url:"https://github.com/NikeSpengler/kyh-exam-rncg",
  },
  {
    id:2,
    title:"Andrea Tsang Website",
    img:"AndreaTsangWebsite.png",
    desc:"Built in: Webdesigner, Shopify, Liquid",
    url:"https://github.com/NikeSpengler/AndreaTsangWebsite",
  },
  {
    id:2,
    title:"React Weather App",
    img:"WeatherApp.png",
    desc:"Built in: React, Vite, Emotion/Styled ",
    url:"https://github.com/NikeSpengler/WeatherApp-React",
  },
  {
    id:3,
    title: "React FridgeEase",
    img:"FridgeEase.png",
    desc:"Built in: React, CSS/SASS, Redux, Firebase",
    url:"https://github.com/NikeSpengler",
  },
  {
    id:4,
    title: "To do App",
    img:"ToDo.png",
    desc:"Built in: React, Vite, Local Storage and Tailwind",
    url:"https://github.com/NikeSpengler/ToDoApp-React",
  },
  {
    id:5,
    title: "Andriod App",
    img:"SkuggaPrototyp.png",
    desc:"Bulit in: Flutter, Dart",
    url:"https://github.com/NikeSpengler",
  },
  {
    id:6,
    title: "iOS App",
    img:"MenigoPrototyp.png",
    desc:"Built in: React Native, Node.js, Tailwind",
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
    <div ref={ref} className='bg-white md:px-10'>
      <div id="container" className='flex justify-center items-center gap-4 w-full h-full'>
        <div id="wrapper" className='h-full m-auto flex justify-center items-center gap-[50px] 
         flex-col md:max-w-[1366px] md:flex md:flex-row 
        md:justify-center md:justify-items-center'>
          <div id="imgContainer" className='md:flex-1 md:w-6/12 md:pb-[150px] pt-20'>
            <img src={getImageURL (item.img)} alt="" className='w-full h-full object-cover'/>
          </div>
          
          <div id="textContainer" className="md:flex-1 md:w-6/12 pl-8 pb-10 md:pb-[150px]" >
            <p className='text-2xl md:text-3xl text-stone-600 pb-2 w-[300px]'>{item.title}</p>
            <p className='text-lg md:text-xl text-stone-600 pb-4 w-[300px]'>{item.desc}</p>
            <a href={item.url} target="_blank" rel="noopener noreferrer" title="Go to project" className='text-lg md:text-xl text-stone-600 hover:text-red-400'>
              Read more →
            </a>
            
           
          </div>
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
    <div id="Work" ref={ref} className="relative md:order-2 bg-white text-stone-600 min-h-screen px-4 pt-4 pb-4 flex flex-col justify-center">
        <div id="progress" className='sticky top-0 pt-20 pb-6'>
          <p className='text-4xl flex flex-col justify-center items-center pb-2'>Selected work</p> 
          <p className='text-2l flex flex-col justify-center items-center pb-4'>For more info view my <a className='hover:text-red-800' href="https://github.com/NikeSpengler">GitHub</a></p>
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