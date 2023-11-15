import React from 'react'
import "./CreateBlog.css"
import Navbar from '../../component/Navbar/Navbar'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const CreateBlog = () => {
    const navigate = useNavigate();
    const [title,setTitle] = useState("")
    const [subTitle,setSubTitle] = useState("")
    const [description,setDescription] = useState("")

    const createBlog = async (e)=>{
        e.preventDefault();

        const data = {
            title: title, //backendLayleko:stateName
            subTitle : subTitle,
            description: description
        }

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

    {console.log(title)}
    
    <div className="form-container">
    <form onSubmit={createBlog}>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" placeholder="Enter the title" onChange={(e)=>{setTitle(e.target.value)}}/>

        <label htmlFor="subtitle">Subtitle:</label>
        <input type="text" id="subtitle" name="subtitle" placeholder="Enter the subtitle" onChange={(e)=>{setSubTitle(e.target.value)}}/>

        <label htmlFor="description">Description:</label>
        <input type="text" id="description" name="description" placeholder="Enter the description" onChange={(e)=>{setDescription(e.target.value)}}/>

        
        <button type="submit">Submit</button>

        </form>
</div>
</>
  )
}

export default CreateBlog