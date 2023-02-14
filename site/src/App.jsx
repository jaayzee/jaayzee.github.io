import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './styles/App.css'

function App() {
  const [count, setCount] = useState(0)
  const darkModeToggle = document.querySelector('#dark-mode-toggle')
  const body = document.body
  const theme = localStorage.getItem('theme')

  if (theme === 'dark') {
    body.classList.add(theme)
    darkModeToggle.checked = true;
  } else {
    body.classList.add('light')
  }

  darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
      body.classList.replace('light', 'dark')
      localStorage.setItem('theme', 'dark')
    } else {
      body.classList.replace('dark', 'light')
      localStorage.setItem('theme', 'light')
    }
  })

  //return ()
}

export default App