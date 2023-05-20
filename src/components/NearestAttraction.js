
import React from 'react'
import "./NearestAttraction.css"

const NearestAttraction = () => {
  return (
   <>
   <div className='xyz'>
     
        <div className=" position-relative" >
          <img className='d-block w-100  img-fluid' style={{height:"450px"}} src="https://static.wixstatic.com/media/4cebd5_721c14aeccdf4f8fa7be7604ad1d5fa0~mv2.webp" alt="" />
          <div className='position-absolute top-50 start-50 translate-middle'>
            <h1 className='text-white'>Nearest Attraction</h1>
          </div>
        
    </div>

 
<section className='container mt-5 position-relative w-75'>
    <div className='row  '>
        <div className='col-md-4 mt-5 mb-5 '>
        <div className='card  '>
        <div className='imgbox '>
           <img src="https://static.wixstatic.com/media/4cebd5_da79daf0f4fd436f94c42d349309cde2~mv2.webp"  alt="" />
           </div>
           <div className='content'>
           <h2>Karul Ghat</h2>     
            <p className='text-justify ' >
            Beautiful and very scenic in monsoon, Number of waterfall fall down in this Ghat in rainy season, Dense Forest, Potentials for the development of ecotourism.
            </p>
            </div>
          </div>
          </div>
        
        {/* 2nd img */}
        <div className='col-md-4 mt-5 mb-5'>
        <div className='card '>
        <div className='imgbox '>
           <img src="https://static.wixstatic.com/media/4cebd5_72797d9be7a345f29b59f6d158d19866~mv2.webp"  alt="" />
           </div>
           <div className='content'>
           <h2>Andur Dam</h2>     
            <p className='text-justify' >
            Minor Dam with scenic back water which is just 3 Km away from the palmnest.
            </p>
            <div>
              <button className='btn'>View Collection</button>
            </div>
            </div>
          </div>
        </div>
          {/* 3rd img */}
        <div className='col-md-4 mt-5 mb-5'>
        <div className='card  '>
        <div className='imgbox '>
           <img src="https://static.wixstatic.com/media/4cebd5_90927e23db8b4eb1acffd6b933ea0342~mv2.webp"  alt="" />
           </div>
           <div className='content'>
           <h2>Ramling Caves (9 KM Away)</h2>     
            <p className='text-justify' >
            A Photographers Paradise which consists of monolithic temples that are said to be made by pandavas.
            </p>
            </div>
          </div>
        </div>
         

         {/* 4th img */}
        <div className='col-md-4 mt-5'>
        <div className='card '>
        <div className='imgbox '>
           <img src="https://static.wixstatic.com/media/4cebd5_d7461c40219049fbae2130791a6ebc19~mv2.webp"  alt="" />
           </div>
           <div className='content'>
           <h2>  Kumbhi Dam (12KM Away)</h2>     
            <p className='text-justify' >
            Medium Dam project of 3DMC with a beautiful view and great ambience in the evening.
            </p>
            </div>
          </div>
        </div>
            {/* 5th img */}
        <div className='col-md-4 mt-5'>
        <div className='card '>
        <div className='imgbox '>
           <img src="https://static.wixstatic.com/media/4cebd5_993ff8c2c54b4d94abbd1435ce31c248~mv2.webp"  alt="" />
           </div>
           <div className='content'>
           <h2> Vesaraf Dam</h2>     
            <p className='text-justify ' >
            A minor Dam with good scenic area only 8 Km away from us.
            </p>
            </div>
          </div>
        </div>
         {/* 6th img */}
        <div className='col-md-4 mt-5 mb-5'>
        <div className='card '>
        <div className='imgbox '>
           <img src="https://static.wixstatic.com/media/4cebd5_fcce1faa83c54911846a5c6bfb6e7950~mv2.webp"  alt="" />
           </div>
           <div className='content'>
           <h2>  Morjai Pathar (15KM Away)</h2>     
            <p className='text-justify' >
            A highland plateau with a temple for warrior goddess Morjai Devi in a underground cave.
            </p>
            </div>
          </div>
        </div>
         {/* 7th img */}
        <div className='col-md-4 mt-5'>
        <div className='card '>
        <div className='imgbox '>
           <img src="https://static.wixstatic.com/media/4cebd5_aaaa3ee973174b8c821d9dee22dd8c6e~mv2.webp"  alt="" />
           </div>
           <div className='content'>
           <h2> Fort Gagangiri (16KM) </h2>     
            <p className='text-justify' >
            Residing the Asharam of saint gagangiri maharaj. Ancient fort of chatrapati shivaji maharaj.
            </p>
            </div>
          </div>
        </div>


        

        </div> 
     </section>
</div>
    










          
      </>
    
  )
}

export default NearestAttraction