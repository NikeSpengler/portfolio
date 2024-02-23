/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react';




const items = [
  {
    id:1,
    title:"Examwork KYH",
    img:"https://private-user-images.githubusercontent.com/32640656/304445035-74b117f2-8d1a-49ae-b8d9-b37847e90754.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDg2NzcxNzYsIm5iZiI6MTcwODY3Njg3NiwicGF0aCI6Ii8zMjY0MDY1Ni8zMDQ0NDUwMzUtNzRiMTE3ZjItOGQxYS00OWFlLWI4ZDktYjM3ODQ3ZTkwNzU0LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAyMjMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMjIzVDA4Mjc1NlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWRkNGM5ZjZhYjQzMjJjNTUxM2UxZTg3MDdiOWM2NDUyYjljZWMyYjAxMzFhOTdhZDE4ZTQ1MDk0NzFlNDhkOTYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.txTG5JX5M6CtyLcAqwnByQb_EzWI50Yc9KzLoVUFuTI",
    desc:"Built in: React, Next.js, Tailwind, Contentful, GraphQL",
    url:"https://github.com/NikeSpengler",
  },
  {
    id:2,
    title:"React Weather App",
    img:"https://private-user-images.githubusercontent.com/32640656/304466070-7b3f0220-5416-42a2-875a-e31090440fd6.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDg2NzcxNDgsIm5iZiI6MTcwODY3Njg0OCwicGF0aCI6Ii8zMjY0MDY1Ni8zMDQ0NjYwNzAtN2IzZjAyMjAtNTQxNi00MmEyLTg3NWEtZTMxMDkwNDQwZmQ2LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAyMjMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMjIzVDA4MjcyOFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTcxZDlmY2Y5NjA1MjJlMDUzMWNkOGFlZTBiZDYyYzk0Mjk2MTMzZTZmYTc0YzJjZDcyYmNkOWI3YTBmYjJjZWEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.wL1_lgtPH0p98iEWIO5OdwsCZqBER6cAmSvxlZ5XFrw",
    desc:"Built in: React, CSS/SASS, Node.js",
    url:"https://github.com/NikeSpengler",
  },
  {
    id:3,
    title: "React FridgeEase",
    img:"https://private-user-images.githubusercontent.com/32640656/304680765-4d286838-c317-4470-b6e7-b13b592a7224.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDg2NzY5ODIsIm5iZiI6MTcwODY3NjY4MiwicGF0aCI6Ii8zMjY0MDY1Ni8zMDQ2ODA3NjUtNGQyODY4MzgtYzMxNy00NDcwLWI2ZTctYjEzYjU5MmE3MjI0LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAyMjMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMjIzVDA4MjQ0MlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTJlNGU4YmJiNzkzNDUxNDBlZTIzYmUzZmJkYjhmZjIxYjk4YTVmYjEzNzEyMGUyMGQ1ZmJhMWRiOTY4OGFkZmEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.VFizZih1qUqgSmZXy-m90jBIc0fm6BD1WFh9zvcoWfM",
    desc:"Built in: React, CSS/SASS, Redux, Firebase",
    url:"https://github.com/NikeSpengler",
  },
  {
    id:4,
    title: "Walkie.",
    img:"https://private-user-images.githubusercontent.com/32640656/304516422-0c141463-ab5b-4adf-9a15-afa74cc5344f.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDg2NzcyOTYsIm5iZiI6MTcwODY3Njk5NiwicGF0aCI6Ii8zMjY0MDY1Ni8zMDQ1MTY0MjItMGMxNDE0NjMtYWI1Yi00YWRmLTlhMTUtYWZhNzRjYzUzNDRmLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAyMjMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMjIzVDA4Mjk1NlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTBmYWRkZTU2MzhkNzI0MTBiOGEwYmJmNDI5ODg3YzlmY2M4ZDY1YjllMzMwYjVmOTQwMDliN2Y3MzY1MzQxYTMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.-I4suDmrXo4AgQ5l44xqC0TREfF9Kb6sBQt0tXX7xfI",
    desc:"Built in: JavaScript, CSS, HTML",
    url:"https://github.com/NikeSpengler",
  },
  {
    id:5,
    title: "Andriod App",
    img:"https://private-user-images.githubusercontent.com/32640656/304521156-69377d31-fabf-472b-ab16-1a617a7e8b71.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDg2NzczNjcsIm5iZiI6MTcwODY3NzA2NywicGF0aCI6Ii8zMjY0MDY1Ni8zMDQ1MjExNTYtNjkzNzdkMzEtZmFiZi00NzJiLWFiMTYtMWE2MTdhN2U4YjcxLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAyMjMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMjIzVDA4MzEwN1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTBiNmNkYzY1MTdiODE1ZGUyOTYyYTFhMTQ0ZWUwZDAyMzE0YmFjM2U4Nzk3NTM1MTRiN2Y3NzMwNDQ3MDdiMTQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.-kmm2YWGwg5DbTNvDyc4-Dt8OfPlScE6VI89tT1ZMAc",
    desc:"Bulit in: Flutter, Dart",
    url:"https://github.com/NikeSpengler",
  },
  {
    id:6,
    title: "iOS App",
    img:"https://private-user-images.githubusercontent.com/32640656/304529154-f9e5637c-116f-460a-b89a-90c91e3d6f69.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDg2NzgyODYsIm5iZiI6MTcwODY3Nzk4NiwicGF0aCI6Ii8zMjY0MDY1Ni8zMDQ1MjkxNTQtZjllNTYzN2MtMTE2Zi00NjBhLWI4OWEtOTBjOTFlM2Q2ZjY5LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAyMjMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMjIzVDA4NDYyNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTY2Zjc3NmU2MjRkYWI5NWU0ODdmODI4OTUxZmJhNjViN2FkZjhlZjYyMWYzYWVhMjY1Yjc2YWI4YmRkMjU4NWEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.Ak50xBVU6nEy28tpS2-rfKmQYzFAmAN2MVuTz5BoCJw",
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
        flex flex-col justify-center items-center md:max-w-[1366px] md:flex md:flex-row 
        md:justify-center md:justify-items-center'>
          <div id="imgContainer" className='md:flex-1 md:w-6/12 md:pb-[150px] pt-20'>
            <img src={item.img} alt="" className='w-full h-full object-cover'/>
          </div>
          
          <div id="textContainer" className="md:flex-1 md:w-6/12 pl-8 pb-10 md:pb-[150px]" >
            <p className='text-2xl md:text-3xl text-stone-600 pb-2 w-[300px]'>{item.title}</p>
            <p className='text-lg md:text-xl text-stone-600 pb-4 w-[300px]'>{item.desc}</p>
            <a href={item.url} target="_blank" rel="noopener noreferrer" title="Go to project" className='text-lg md:text-xl text-stone-600 hover:text-red-400'>
              {/* <button>Read more →</button> */}
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
    <div id="Work" ref={ref} className="relative -z-10 md:order-2 bg-white text-stone-600 min-h-screen px-4 pt-4 pb-4 flex flex-col justify-center">
        <div id="progress" className='sticky top-0 pt-12 pb-6'>
          <p className='text-4xl flex flex-col justify-center items-center pb-2'>Selected work</p> 
          <p className='text-2l flex flex-col justify-center items-center pb-4'>For more info view my <a className='hover:text-red-400' href="https://github.com/NikeSpengler">GitHub</a></p>
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