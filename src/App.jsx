import './App.css'
import About from './components/About/About'
import Avoid from './components/Avoid/Avoid'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <About />
        <Avoid />
      </div>
    </>
  )
}

export default App
