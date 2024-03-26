import { Route, Routes } from 'react-router-dom'
import './App.css'
import './Styles/basics.scss'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import { routes } from './utils/routes'
import Home from './Routes/Home'
import Detail from './Routes/Detail'
import Contact from './Routes/Contact'
import Favs from './Routes/Favs'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path={routes.home} element={<Home/>}/>
        <Route path={routes.detail} element={<Detail/>}/>
        <Route path={routes.favs} element={<Favs/>}/>
        <Route path={routes.contact} element={<Contact/>}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App