import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import People from './pages/People'
import Navbar from './components/Navbar'
import Footer from './components/Footer'  
import Posts from './pages/Posts'
import Home from './pages/Home'
import Notfound from './pages/Notfound'


function App() {

return (
    <>
    <BrowserRouter>
      <Navbar />
      
      <Routes >
        <Route path='/people' element={<People/>}/>
        <Route path='/posts' element={<Posts/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<Notfound/>}/>
      </Routes>

      <Footer />
      </BrowserRouter>

    </>
  )
}

export default App






