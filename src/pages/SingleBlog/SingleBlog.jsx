import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../../component/Navbar/Navbar'

const SingleBlog = () => {
  const navigate = useNavigate();
    const {id} = useParams()
    const [blog,setBlog] = useState({})
    //Delete Blog

    const deleteBlog = async()=>{
      const response =     await axios.delete("http://localhost:2000/blogs/" + id)

      console.log(response)

      if(response.status == 200){
        alert(response.data.message)
        navigate("/");
      }

    }


    //Fetch Single Blog

    
    const    fetchSingleBlog = async()=>{
      const response =     await axios.get("http://localhost:2000/blogs/" + id)
      console.log(response)
      if(response.status == 200){
        setBlog(response.data.data)
        
      }
       }
       

       useEffect(()=>{
        fetchSingleBlog()
       },[])

       console.log(blog)

       
    
  return (
    
    <div>
        <Navbar/>
        <h1>{blog.title}</h1>
        <h2>{blog.subTitle}</h2>
        <p>{blog.description}</p>
        <button onClick={deleteBlog}>Delete</button>

    </div>
  )
}

export default SingleBlog