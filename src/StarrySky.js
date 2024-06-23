import React, { useEffect } from 'react';
import './StarrySky.css';

const StarrySky = () => {
  useEffect(() => {
    const canvas = document.getElementById('starry-sky');
    const context = canvas.getContext('2d');

    const stars = [];
    const starCount = 100;

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
      });
    }

    const drawStars = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = 'white';
      stars.forEach((star) => {
        context.beginPath();
        context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        context.fill();
      });
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawStars();
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas id="starry-sky" />;
};

export default StarrySky;
