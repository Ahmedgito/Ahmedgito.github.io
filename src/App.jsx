
import './App.css'
import Home from './section/home/Homebg'
import Navbar from './section/navbar/Navbar'
import Portfolio from './section/portfolio/Portfolio'

function App() {

  return (
    <>
    <Navbar/>
    <Home
     particleColors={['#ffffff', '#ffffff']}
     particleCount={300}
     particleSpread={20}
     speed={0.1}
     particleBaseSize={100}
     moveParticlesOnHover={true}
     alphaParticles={false}
     disableRotation={false}
    
    />
    <Portfolio/>
    </>
  )
}

export default App
