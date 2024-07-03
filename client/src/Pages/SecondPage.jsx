import React from 'react';
import './SecondPage.css';
import image from '../assets/image1.jpg';
import pic1 from '../assets/image2.jpg';
import pic2 from '../assets/image3.jpg';
import pic3 from '../assets/image4.jpg';
import pic4 from '../assets/image5.jpg';

const SecondPage = () => {
  return (
    <section id='second-pg'>
         <span className="PageTitle">Straight in to Services....</span>
        <div className="sepgs">
            <div className="sepgImg"> <img src={image} alt="" /></div>
            <div className="sepgContent">
                <p>When investing in a vehicle for your self or your family, your lifestyle aspirations play an important role in deciding which vehicle to buy. A united motors, we have indentified a range of personal vehicles that promise to meetthe demanding lifestyles of Sri Lankans today.<br /><br />
                We focus on not only the reliability of vehicles, but also the manufacturer's reputation to bring you higt performing, fuel efficient and affordable personal vehicles, enabling you to make a well-informed, Smart purchasing decision that meets your needs as well as your budget. 
                </p>
                <button className="pageBtn">Book Your Day Here.......</button>
            </div>
        </div>

        <span className="PageTitle-01">Our Greateness....</span>
        <div className='sepgs-02'>
        <div className="sepgImg1"> <img src={pic1} alt="" /></div>
        <div className="sepgImg1"> <img src={pic2} alt="" /></div>
        <div className="sepgImg1"> <img src={pic3} alt="" /></div>
        <div className="sepgImg1"> <img src={pic4} alt="" /></div>
        </div>

    </section>
  )
}

export default SecondPage;