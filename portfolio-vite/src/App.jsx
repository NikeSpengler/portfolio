//import './App.css'
import styled from 'styled-components'
import Intro from "./compontents/Intro"
import About from "./compontents/About"
import Skills from "./compontents/Skills"
import Contact from "./compontents/Contact"
import Sidebar from './compontents/sidebar/Sidebar'


const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  return (
      <Container>
        <Sidebar/>
        <Intro/>
        <About/>
        <Skills/>
        <Contact/>
      </Container>
  )
}

export default App
