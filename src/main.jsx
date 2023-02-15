import Me from './pages/Me.jsx'
import Art from './pages/Art.jsx'
import Car from './pages/Car.jsx'
import Sea from './pages/Sea.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Me /> } />
        <Route path="/art" element={ <Art /> } />
        <Route path="/car" element={ <Car /> } />
        <Route path="/sea" element={ <Sea /> } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
