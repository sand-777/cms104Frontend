import { useState } from 'react'
import { Routes,Route,BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/Home/Home'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (

  <Router>
  <Routes>

    <Route path="/" element={<Home/>} />


  </Routes>
  
  </Router>

  )
}

export default App
