import React from 'react'
import { useState } from 'react'
import "./CreateBlog.css"
import Navbar from '../../component/Navbar/Navbar'

import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const CreateBlog = () => {
    const navigate = useNavigate();

    const[data,setData] = useState({
        title:"",
        subTitle:"",
        description:""
    })

    const handleChange = (e)=>{
        const {name,value}= e.currentTarget

        setData({
            ...data,
            [name] : value
        })


    }

  

    const createBlog = async (e)=>{
        e.preventDefault();
        console.log(e.currentTarget,"currentTarget")

        const formData = new FormData(e.currentTarget)
        // console.log(formData.get("title","FormData"))
      


        const data = Object.fromEntries(formData)
        console.log(data)

 

     

        //send above states data to api
     const response =    await axios.post("http://localhost:2000/blogs",data)
     if(response.status==200){
        alert(response.data.message)
       navigate("/")
     }else{
       alert(response.data.message) 
     }
    }
  return (
    <>
    <Navbar/>

   
    
    <div className="form-container">
    <form onSubmit={createBlog}>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" placeholder="Enter the title" onChange={handleChange} />

        <label htmlFor="subtitle">Subtitle:</label>
        <input type="text" id="subtitle" name="subTitle" placeholder="Enter the subtitle" />

        <label htmlFor="description">Description:</label>
        <input type="text" id="description" name="description" placeholder="Enter the description" />

        
        <button type="submit">Submit</button>

        </form>
</div>
</>
  )
}

export default CreateBlog