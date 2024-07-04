import React, { useState } from 'react';
import logo from '../assets/background1.jpg'; 
import userIcon from '../assets/background2.jpg'; 

const styles = {
  header: {
    backgroundColor: '#1B1212',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem',
  },
  navContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    maxWidth: '100%',
  },
  logo: {
    height: '50px',
    marginRight: 'auto',
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
    color: '#19B5FE',
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
    height: '60px',
    width: '60px',
    marginLeft: 'auto',
    borderRadius: '50px',
  },
};

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

export default Header;
