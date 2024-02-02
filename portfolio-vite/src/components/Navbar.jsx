import { motion, useCycle, AnimatePresence, MotionConfig } from "framer-motion"
import "./Navbar.css"

function Navbar() {

const [sidebar, toggleSidebar] = useCycle(false, true);

  return (
    <nav className="sticky top-0 inset-x-0 h-16 bg-transparant">
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
                    className="w-7 h-0.5 bg-stone-400 block"></motion.span>
                    <motion.span 
                    variants={{
                        closed: {opacity: 1},
                        open: {opacity: 0},
                    }}
                    className="w-7 h-0.5 bg-stone-400 block"></motion.span>
                    <motion.span 
                    variants={{
                        closed: {rotate: 0, y: 0},
                        open: {rotate: -45, y: -8},
                    }}
                    className="w-7 h-0.5 bg-stone-400 block"></motion.span>
                </motion.button>
            </div>
        </div>
        <AnimatePresence>
        {sidebar && (
            <MotionConfig transition={{
                type: "spring",
                bounce: .25,

            }}>
            <motion.div 
                key="sidebar"
                variants={{
                    open: {
                        x: "0%",
                        transition: {
                            type: "spring",
                            bounce: .0,
                            when: "beforeChildren",
                        }
                    },
                    closed: {
                        x: "-100%",
                        transition: {
                            type: "spring",
                            bounce: .0,
                            
                        },
                    },
                
                }}
            initial="closed"
            animate="open"
            exit="closed"
            
            className="fixed w-[400px] inset-0 bg-stone-100 space-y-10 p-6 flex flex-col justify-center items-center xs:w-full">
            <motion.div variants={{
                open: {
                    y: "0%",
                    opacity: 1,
                },
                closed: {
                    y: "25%",
                    opacity: 0,
                },
            }}>
                <ul className="space-y-5">
                    <li onClick={() => toggleSidebar(false)}>
                        <a href="#Intro" className="text-4xl font-light text-black">Intro</a>
                    </li>
                    <li onClick={() => toggleSidebar(false)}>
                        <a href="#About" className="text-4xl font-light text-black">About</a>
                    </li>
                    <li onClick={() => toggleSidebar(false)}>
                        <a href="#Work" className="text-4xl font-light text-black">Work</a>
                    </li>
                    <li onClick={() => toggleSidebar(false)}>
                        <a href="#Contact" className="text-4xl font-light text-black">Contact</a>
                    </li>
                </ul>
            </motion.div>
        </motion.div>
        </MotionConfig>
        )}
        </AnimatePresence>
    </nav>
        
    
  )
}

export default Navbar