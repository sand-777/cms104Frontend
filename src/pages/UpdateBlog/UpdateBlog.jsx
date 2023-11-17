import React, { useEffect, useState } from 'react'

import "./UpdateBlog.css"
import Navbar from '../../component/Navbar/Navbar'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'




const UpdateBlog = () => {
  const navigate = useNavigate();
    const {id} = useParams()
    const [blog,setBlog] = useState({
      title: '',
      subTitle: '',
      description: '',
    })

    //hanle change of the input

    const handleChange = (e)=>{
      const{name,value} = e.target
      setBlog({
        ...blog,
        [name] : value
      })
    }

    const keyToExclude = ['createdAt','updatedAt']
    keyToExclude.forEach((key)=>{
      delete[key]
    })

   
    const updateBlog = async (e)=>{
      e.preventDefault();
      console.log(e.currentTarget,"currentTarget")

      const formData = new FormData(e.currentTarget)
      // console.log(formData.get("title","FormData"))
    


      const data = Object.fromEntries(formData)
      console.log(data)



   

      //send above states data to api
   const response =    await axios.patch("http://localhost:2000/blogs/"+id,data)
   console.log(response.data)
   if(response.status==200){
      alert(response.data.message)
     navigate(`/singleBlog/${blog._id}`)
   }else{
     alert(response.data.message) 
   }
  }

        
    const    fetchSingleBlog = async()=>{
        const response =     await axios.get("http://localhost:2000/blogs/" + id)
        console.log(response)
        if(response.status == 200){
          setBlog(response.data.data)
          
        }
         }

         useEffect(()=>{
            fetchSingleBlog();
         },[])

         console.log(blog)


  
  return (
    <>
    <Navbar/>

   
    
    <div className="form-container">
    <form onSubmit={updateBlog} >
        <label htmlFor="title">Title:</label>
        <input type="text" value={blog.title} id="title" name="title" placeholder="Enter title" onChange={handleChange} /> 

        <label htmlFor="subtitle">Subtitle:</label>
        <input type="text" value={blog.subTitle} id="subtitle" name="subTitle" placeholder="Enter the subtitle" onChange={handleChange} />

        <label htmlFor="description">Description:</label>
        <input type="text" value={blog.description} id="description" name="description" placeholder="Enter the description" onChange={handleChange}/>

        
        <button type="submit">Submit</button>

        </form>
</div>
</>
  )
}

export default UpdateBlog