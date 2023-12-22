//import './App.css'
import Navbar from "./Components/Navbar"
import Intro from "./components/Intro"
import About from "./components/About"
import Skills from "./components/Skills"
import Contact from "./components/Contact"

function App() {
  return (
   <section>
     <Navbar/>
     <Intro id="Intro"/>
     <About id="About"/>
     <Skills id="Skills"/>
     <Contact id="Contact"/>
   </section>
  )
}

export default App
