import React, { useEffect, useState } from 'react';

const Animation = () => {
  // Box colors
  const colors = ['#FF6347', '#32CD32', '#1E90FF', '#FFD700', '#8A2BE2'];

  // State to hold the random positions
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    // Randomize the position of each box when the component mounts
    const randomPositions = [];
    for (let i = 0; i < 5; i++) {
      randomPositions.push({
        animationDuration: `${Math.random() * 5 + 5}s`, // random duration for animation
        animationDelay: `${Math.random() * 5}s`, // random delay
      });
    }
    setPositions(randomPositions);
  }, []);

  return (
    <div className="animation-container" style={{ position: 'relative', height: '100vh', width: '100vw' }}>
      {positions.map((position, index) => (
        <div
          key={index}
          className="box"
          style={{
            position: 'absolute',
            backgroundColor: colors[index],
            width: '50px',
            height: '50px',
            borderRadius: '10px',
            animation: `moveBox ${position.animationDuration} infinite ${position.animationDelay} linear`,
          }}
        />
      ))}
    </div>
  );
};

export default Animation;
