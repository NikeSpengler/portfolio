//import './App.css'
import Navbar from "./Components/Navbar"
import Intro from "./components/Intro"
import About from "./components/About"
import Work from "./components/Work"
import Contact from "./components/Contact"
import Footer from "./components/Footer"


function App() {
  return (
   <section>
     <Navbar/>
     <Intro id="Intro"/>
     <About id="About"/>
     <Work id="Work"/>
     <Contact id="Contact"/>
     <Footer/>
   </section>
  )
}

export default App
