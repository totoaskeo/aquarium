import React from 'react'
import { Container } from 'reactstrap'
import AquariumInput from './components/AquariumInput'
import Aquarium from './components/Aquarium'

function App() {
  return (
    <div className="App">
      <Container>
        <AquariumInput></AquariumInput>
        <Aquarium></Aquarium>
      </Container>
    </div>
  )
}

export default App
