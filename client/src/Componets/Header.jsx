import React, { useState } from 'react';
import logo from '../assets/header/logo.png'; 
import userIcon from '../assets/header/prof.png'; 

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
    <header style={styles.header}>
      <div style={styles.navContainer}>
        <img src={logo} alt="Logo" style={styles.logo} />
        <nav style={styles.nav}>
          <ul style={styles.navList}>
            {navItems.map((item, index) => (
              <li key={index} style={styles.navItem}>
                <a
                  href={item.href}
                  style={{
                    ...styles.navLink,
                    ...(hoveredIndex === index && styles.navLinkHover),
                    ...(activeIndex === index && styles.navLinkActive),
                  }}
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
        <img src={userIcon} alt="User Icon" style={styles.userIcon} />
      </div>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#1B1212',
    position: 'fixed', // Add this line
    top: 0, // Add this line
    width: '100%', // Add this line
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed', 
    
  },
  navContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    maxWidth: '100%',
  },
  logo: {
    height: '90px',
    width: '120px', 
    marginLeft: '50px',
  },
  nav: {
    flexGrow: 1,
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'center',
    padding: '0',
    margin: '0',
  },
  navItem: {
    margin: '0 1rem',
  },
  navLink: {
    textDecoration: 'none',
    color: 'white',
    fontSize: '1.2rem',
    border: '2px solid transparent',
    padding: '0.5rem 1rem',
    borderRadius: '1rem',
    transition: 'all 0.3s',
  },
  navLinkHover: {
    color: 'white',
    backgroundColor: '#19B5FE',
  },
  navLinkActive: {
    color: 'white',
    backgroundColor: '#19B5FE',
  },
  userIcon: {
    height: '50px',
    width: '60px',
    marginRight: '50px',
    borderRadius: '50px',
  },
};

export default Header;
