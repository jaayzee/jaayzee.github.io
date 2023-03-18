import Nav from './Nav.jsx'
import Me from './pages/MePage/Me.jsx'
import Art from './pages/ArtPage/Art.jsx'
import Car from './pages/CarPage/Car.jsx'
import Sea from './pages/SeaPage/Sea.jsx'
import Space from './pages/SpacePage/Space.jsx'
import Contact from './pages/ContactPage/Contact.jsx'
import Policy from './pages/privacypolicy.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import { HashRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Have to switch to HashRouter, BrowserRouter isn't supported by github pages */}
    <HashRouter>
      <Nav />
      <Routes>
        <Route path="/" element={ <Me /> } />
        <Route path="/art" element={ <Art /> } />
        <Route path="/car" element={ <Car /> } />
        <Route path="/sea" element={ <Sea /> } />
        <Route path="/space" element={ <Space /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="/policy" element={ <Policy /> } />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
)
