
import './App.css'
import {BrowserRouter , Route, Routes,Link,NavLink} from 'react-router-dom'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import About from './Components/About'
import Services from './Components/Services'
import Contact from './Components/Contact'
import Blog from './Components/Blog'

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Blog' element={<Blog />} />




        
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
