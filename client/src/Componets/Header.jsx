import React, { useState } from 'react';
import logo from '../assets/header/logo.png'; 
import userIcon from '../assets/header/prof.png'; 
import './Header.css'; // Ensure this path is correct

const Header = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  const navItems = [
    { text: 'Our services', href: '#services' },
    { text: 'About Us', href: '#about' },
    { text: 'Feedbacks', href: '#feedbacks' },
    { text: 'Contact Us', href: '#contact' },
  ];

  return (
    <header className="header">
      <div className="navContainer">
        <img src={logo} alt="Logo" className="logo" />
        <nav className="nav">
          <ul className="navList">
            {navItems.map((item, index) => (
              <li key={index} className="navItem">
                <a
                  href={item.href}
                  className={`navLink ${hoveredIndex === index ? 'navLinkHover' : ''} ${activeIndex === index ? 'navLinkActive' : ''}`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => setActiveIndex(index)}
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <img src={userIcon} alt="User Icon" className="userIcon" />
      </div>
    </header>
  );
};

export default Header;
