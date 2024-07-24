import React from 'react';
import './SecondPage.css';
import image from '../assets/image1.jpg';

const SecondPage = () => {
  return (
    <section id='second'>
          <div className='second-page1'>
            <span className="PageTitle-01">Straight in to Services....</span>
            <div className="sepgs">
                <div className="sepgImg"> <img src={image} alt="" /></div>
                <div className="sepgContent">
                    <p>When investing in a vehicle for your self or your family, your lifestyle aspirations play an important role in deciding which vehicle to buy. A united motors, we have indentified a range of personal vehicles that promise to meetthe demanding lifestyles of Sri Lankans today.<br /><br />
                    We focus on not only the reliability of vehicles, but also the manufacturer's reputation to bring you higt performing, fuel efficient and affordable personal vehicles, enabling you to make a well-informed, Smart purchasing decision that meets your needs as well as your budget. 
                    </p>
                    <button className="pageBtn">Book Your Day Here.......</button>
                </div>
            </div>
          </div>





       
        <div className='second-page2'>
         <span className="PageTitle-02">Our Greateness....</span>
        
          <div className='sepgs-01'>
        
           <button className='btn'>
            <h2>Expert Technicians</h2>
           <p>Highly trained and certified professionals.</p>
           <p>Continual education on the latest automotive technologies.</p>
           <p>Ability to diagnose and fix issues quickly and accurately.</p>
           <p>Dedicated to providing top-quality service for all vehicle makes and models.</p>
           </button>
       
       
          <button className='btn'>
           <h2>Comprehensive Services</h2>
           <p>Offers a wide range of services from oil changes to major repairs.</p>
           <p>Equipped with state-of-the-art tools and equipment.</p>
           <p>Provides preventative maintenance to avoid future issues.</p>
           </button>
        

          <button className='btn'>
           <h2>Customer-Centric Approach</h2>
           <p>Friendly and approachable staff ready to assist.</p>
           <p>Clear communication regarding repair needs and costs.</p>
           <p>Comfortable waiting area with amenities for customers.</p>
           </button>
      

          <button className='btn'>
           <h2>Transparent Pricing</h2>
           <p>Provides detailed estimates before work begins.</p>
           <p>No hidden fees or unexpected charges.</p>
           <p>Competitive pricing matched with high-quality service.</p>
           <p>Offers various payment options and financing plans.</p>
           </button>
       
          </div>
        </div>

    </section>
  )
}

export default SecondPage;
























 {/* <div className="sepgImg1"> <img src={pic1} alt="" /></div>
        <div className="sepgImg1"> <img src={pic2} alt="" /></div>
        <div className="sepgImg1"> <img src={pic3} alt="" /></div>
        <div className="sepgImg1"> <img src={pic4} alt="" /></div> */}


        // import pic1 from '../assets/image2.jpg';
// import pic2 from '../assets/image3.jpg';
// import pic3 from '../assets/image4.jpg';
// import pic4 from '../assets/image5.jpg';
// import pic5 from '../assets/image6.jpg';