
import React from 'react'
import "./Testimonials.css"
// import bb1 from "../img/border1.png"

export default function Testimonials() {
  return (
    <>
      <div className='xyz'>
        <div className="position-relative" >
          <img className='d-block w-100  img-fluid' style={{height:"450px"}} src="https://static.wixstatic.com/media/4cebd5_0a489268552c4ab092ba25dac27db711~mv2.webp" alt="" />
          <div className='position-absolute top-50 start-50 translate-middle'>
            <h1 className='text-white'>TESTIMONIALS</h1>
          </div>
        </div>

        <section className='gallary min-vh-100 ' >
      <div className='container-lg position-relative w-75'>
        <div className='row g-4 row-cols-1 row-cols-sm-1 row-cols-md-3 m-5'>
        <div className='col  m-3 p-2  bb'>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis modi temporibus ipsa obcaecati esse magni sit dolore ipsam quam, rem, ipsum quisquam officiis iure dicta ab. Necessitatibus impedit nulla animi?</p>
              <h4>Name</h4>
            </div>

            <div className='col m-3 p-2 bb'>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis modi temporibus ipsa obcaecati esse magni sit dolore ipsam quam, rem, ipsum quisquam officiis iure dicta ab. Necessitatibus impedit nulla animi?</p>
              <h4>Name</h4>
            </div>
            
            <div className='col m-3 p-2 ab '>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis modi temporibus ipsa obcaecati esse magni sit dolore ipsam quam, rem, ipsum quisquam officiis iure dicta ab. Necessitatibus impedit nulla animi?</p>
            </div>
           </div>

      </div>

    </section>
          

          

       
        
       </div>
    </>
  )
}

