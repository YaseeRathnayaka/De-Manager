import React from 'react';
import './SecondPage.css';
import image from '../assets/image1.jpg';

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
    </section>
  )
}

export default SecondPage;