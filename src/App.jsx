import { useState } from 'react'
import { Routes,Route,BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/Home/Home'
import CreateBlog from './pages/CreateBlog/CreateBlog'
import './App.css'
import SingleBlog from './pages/SingleBlog/SingleBlog'
import UpdateBlog from './pages/UpdateBlog/UpdateBlog'

function App() {
  const [count, setCount] = useState(0)

  return (

  <Router>
  <Routes>

    <Route path="/" element={<Home/>} />
    <Route path="/createBlog" element = {<CreateBlog/>} />
    <Route path="/singleBlog/:id" element = {<SingleBlog/>} />
    
    <Route path="/update/:id" element = {<UpdateBlog/>} />
    


  </Routes>
  
  </Router>

  )
}

export default App
