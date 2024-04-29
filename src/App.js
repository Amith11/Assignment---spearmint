import React, { useState } from 'react';
import logo from './wizaart-img.56787174.gif'; 

const App = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleClick = (e) => {
    const { clientX, clientY } = e;
    const newX = clientX;
    const newY = clientY;

    const isToRight = newX > position.x;
      setTimeout(() => {
        setPosition({ x: newX, y: newY });
      }, 2000); 

   
    const distanceX = newX - position.x;
    const distanceY = newY - position.y;

    const duration = 2000;
    const steps = 100; 


    const incrementX = distanceX / steps;
    const incrementY = distanceY / steps;

    const animate = () => {
      setPosition(prevPosition => ({
        x: prevPosition.x + incrementX,
        y: prevPosition.y + incrementY
      }));
    };
    for (let i = 0; i < steps; i++) {
      setTimeout(animate, i * (duration / steps));
    }

    const logoElement = document.getElementById("logo");
    if (logoElement) {
      logoElement.style.transform = `translate(-50%, -50%) scaleX(${isToRight ? -1 : 1})`;
    }
  };

  return (
    <div style={{ width: '100vw', height: '100vh' }} onClick={(e) => handleClick(e)}>
      <div style={{ position: 'absolute', left: position.x, top: position.y }}>
        <img
          id="logo"
          src={logo}
          alt="logo"
          style={{
            width: '100px',
            height: 'auto',
          }}
        />
      </div>
    </div>
  );
};

export default App;

