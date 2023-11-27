import './App.css'
import Intro from "./compontents/Intro"
import About from "./compontents/About"
import Skills from "./compontents/Skills"
import Contact from "./compontents/Contact"
import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  background-color: light-grey;
`

function App() {
  return (
      <Container>
        <Intro/>
        <About/>
        <Skills/>
        <Contact/>
      </Container>
  )
}

export default App
