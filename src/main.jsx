import Nav from './Nav.jsx'
import Me from './pages/MePage/Me.jsx'
import Art from './pages/ArtPage/Art.jsx'
import Space from './pages/SpacePage/Space.jsx'
import Resume from './pages/ResumePage/Resume.jsx'
import Contact from './pages/ContactPage/Contact.jsx'
import Policy from './pages/PrivacyPolicy.jsx'
import Error from './pages/ErrorPage.jsx'
// import Footer from 
import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* NOTE: Browser Router by itself isn't supported by github, so use HashRouter(ew urls) or use basename: */}
    {/* Github pages don't natively support single page apps */}
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={ <Me /> } />
        <Route path="/art" element={ <Art /> } />
        <Route path="/space" element={ <Space /> } />
        <Route path="/resume" element={ <Resume /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="/policy" element={ <Policy /> } />
        <Route path="*" element={<Error />} />
      </Routes>
      {/* eventually do footer */}
      {/* <Footer /> */}
    </BrowserRouter>
  </React.StrictMode>,
)