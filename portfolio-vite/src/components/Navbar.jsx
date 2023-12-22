import { motion, useCycle } from "framer-motion"
import "./Navbar.css"

function Navbar() {

const [sidebar, toggleSidebar] = useCycle(false, true);

  return (
    <nav className="sticky top-0 inset-x-0 h-16 bg-white">
        <div className="container h-full px-4 flex items-center">
            <div className="relative z-10">
                <motion.button 
                    animate={sidebar ? "open" : "closed"}
                    onClick={() => toggleSidebar()} 
                    className="flex flex-col space-y-1.5"
                >
                    <motion.span 
                    variants={{
                        closed: {rotate: 0, y: 0},
                        open: {rotate: 45, y: 8},
                    }}
                    className="w-7 h-0.5 bg-black block"></motion.span>
                    <motion.span 
                    variants={{
                        closed: {opacity: 1},
                        open: {opacity: 0},
                    }}
                    className="w-7 h-0.5 bg-black block"></motion.span>
                    <motion.span 
                    variants={{
                        closed: {rotate: 0, y: 0},
                        open: {rotate: -45, y: -8},
                    }}
                    className="w-7 h-0.5 bg-black block"></motion.span>
                </motion.button>
            </div>
        </div>
        {sidebar && (
            <div className="fixed inset-0 bg-white space-y-10 p-6 flex flex-col justify-center items-center">
            <div>
                <ul className="space-y-5">
                    <li onClick={() => toggleSidebar(false)}>
                        <a href="#Intro" className="text-4xl font-light text-black">Intro</a>
                    </li>
                    <li onClick={() => toggleSidebar(false)}>
                        <a href="#About" className="text-4xl font-light text-black">About</a>
                    </li>
                    <li onClick={() => toggleSidebar(false)}>
                        <a href="#Skills" className="text-4xl font-light text-black">Skills</a>
                    </li>
                    <li onClick={() => toggleSidebar(false)}>
                        <a href="#Contact" className="text-4xl font-light text-black">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
        )}
        
    </nav>
        
    
  )
}

export default Navbar