import { useEffect, useState } from 'react';
import Image1 from '../assets/background1.jpg';
import Image2 from '../assets/background2.jpg';
import Image3 from '../assets/background3.jpg';
import Image4 from '../assets/background4.jpg';
function FirstPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideCount = 4; // Number of slides
    const interval = 3000; // Time each slide screen (milliseconds)

    const updateSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % slideCount);
    };

    const intervalId = setInterval(updateSlide, interval);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={styles.slider}>
      <div style={styles.overlay}></div> {/* Black overlay */}
      <div style={styles.slideTrack}>
        <div style={{ ...styles.slide, backgroundImage: `url(${Image2})` }}></div>
        <div style={{ ...styles.slide, backgroundImage: `url(${Image1})` }}></div>
        <div style={{ ...styles.slide, backgroundImage: `url(${Image3})` }}></div>
        <div style={{ ...styles.slide, backgroundImage: `url(${Image4})` }}></div>
        <div style={{ ...styles.slide, backgroundImage: `url(${Image2})` }}></div>
      </div>
      <div style={styles.textContainer}>
        <p style={styles.p}>𝑬𝒗𝒆𝒓𝒚𝒕𝒉𝒊𝒏𝒈 𝒂𝒏𝒅 𝑳𝒊𝒕𝒕𝒍𝒆 <br /> 𝑴𝒐𝒓𝒆 ....</p>
      </div>
      <div style={styles.dotsContainer}>
        {[0, 1, 2, 3].map((index) => (
          <div
            key={index}
            style={{
              ...styles.dot,
              backgroundColor: currentSlide === index ? '#19B5FE' : 'white',
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  slider: {
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    height: '100vh',
  },
  slideTrack: {
    display: 'flex',
    animation: 'scroll 15s linear infinite',
  },
  slide: {
    minWidth: '100%',
    height: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    zIndex: 1,
  },
  textContainer: {
    position: 'absolute',
    bottom: 20,
    left: 40,
    padding: '10px',
    zIndex: 2,
  },
  p: {
    fontSize: '60px',
    color: 'white',
    margin: 0,
    zIndex: 3,
  },
  dotsContainer: {
    position: 'absolute',
    bottom: 20,
    right: '50%',
    display: 'flex',
    gap: '10px',
    zIndex: 4,
  },
  dot: {
    width: '25px',
    height: '25px',
    borderRadius: '50%',
  },
};

// Add keyframes animation
const styleSheet = document.styleSheets[0];
const keyframes = `
  @keyframes scroll {
    0% { transform: translateX(0); }
    20% { transform: translateX(0); }
    25% { transform: translateX(-100%); }
    45% { transform: translateX(-100%); }
    50% { transform: translateX(-200%); }
    70% { transform: translateX(-200%); }
    75% { transform: translateX(-300%); }
    95% { transform: translateX(-300%); }
    100% { transform: translateX(-400%); }
  }
`;
styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

export default FirstPage;
