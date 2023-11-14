import React, { useEffect,useState } from "react";
import "./Home.css";
import Navbar from "../../component/Navbar/Navbar";
import axios from 'axios'

const Home = () => {
  // api call here
  const [blogs,setBlogs] = useState([])

  const fetchBlogs = async ()=>{
try{
  const response = await axios.get('http://localhost:2000/blogs')
  setBlogs(response.data.blogs)
}
catch (error){
alert("Something went wrong")
}

 
  }

  useEffect(()=>{
    fetchBlogs()
  },[])

 


  return (
    <>
      <Navbar />

      <div className="card" style={{width:"18rem"}}>

        {
          blogs.map((blog)=>{
            return(
              
  <div key={blog._id} className="card-body">
  <h5 key={blog.title} className="card-title">{blog.title}</h5>
  <h5 key={blog.subTitle} className="card-title">{blog.subTitle}</h5>
  <p key={blog.description} className="card-text">{blog.description}</p>
  <a href="#" className="btn btn-primary">Go somewhere</a>
</div>
            )
          })
        }

</div>
    </>
  );
};

export default Home;
