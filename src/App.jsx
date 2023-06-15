import './App.css'
import About from './components/About/About'
import Avoid from './components/Avoid/Avoid'
import Contact from './components/Contact/Contact'
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
        <Contact />
      </div>
    </>
  )
}

export default App
