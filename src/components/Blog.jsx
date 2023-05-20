import React from 'react'
import "./Blog.css"
import { FaAdn , FaCrown} from "react-icons/fa";
// import Blog1 from "../img/b1.webp"

const Blog = () => {
  return (
    <div className='xyz w-100'>
     
        <div className=" position-relative" >
          <img className='d-block w-100  img-fluid' style={{height:"450px"}} src="https://static.wixstatic.com/media/4cebd5_0a489268552c4ab092ba25dac27db711~mv2.webp" alt="" />
          <div className='position-absolute top-50 start-50 translate-middle'>
            <h1 className='text-white'>Blog</h1>
          </div>
        </div>

        {/* 2nd div */}

        <div className='container d-lg-flex justify-content-between w-50 '>
          <div className="mt-3">
            <span>All Posts</span>
          </div>
          <div className='lh-lg font-monospace mb-2 text-black mt-3'>
            <button className='btn-light '> login/sign up</button> 
        </div>
        </div>

        {/* 3rd div */}
        <div className='container border d-lg-flex w-50 mt-3'>
          <div>
            <img className=''
             src="https://static.wixstatic.com/media/4cebd5_2a0347f7bc824851936e7e4958ed60af~mv2.webp" style={{height:"300px", width:"400px"}} alt="" />
          </div>
         
        <nav>
        <div className='d-flex m-3 '>
          <div className=''> <FaAdn/> </div>
          <div  className='d-flex justify-content-between'>
          <div>
            <div>The Palmnest Farm <FaCrown/> </div>
            <span> Apr 9-2 min</span>
          </div>
          <div>:::</div>
          </div>
          
        </div>
        <div className='m-3 mb-1'>
            <h4>Kajawa Festival</h4>
            <p>It is the dream of many and a sure shot point in most bucket lists to experience the Fireflies Festival aka Kajava festival. The nature...</p>
          </div>
          <br />
          
          <hr />
        </nav>

        
        
      

        
        
        
        
        
        
        
        
        
        </div>
      

  </div>
  )
}

export default Blog
