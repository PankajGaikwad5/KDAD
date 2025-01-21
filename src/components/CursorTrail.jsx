'use client';
import { useEffect } from 'react';

const CursorTrail = () => {
  useEffect(() => {
    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll('.circle');

    const colors = [
      '#ffb56b',
      '#fdaf69',
      '#f89d63',
      '#f59761',
      '#ef865e',
      '#ec805d',
      '#e36e5c',
      '#df685c',
      '#d5585c',
      '#d1525c',
      '#c5415d',
      '#c03b5d',
      '#b22c5e',
      '#ac265e',
      '#9c155f',
      '#950f5f',
      '#830060',
      '#7c0060',
      '#680060',
      '#60005f',
      '#48005f',
      '#3d005e',
    ];

    circles.forEach((circle, index) => {
      circle.x = 0;
      circle.y = 0;
      circle.style.backgroundColor = 'white';
    });

    const handleMouseMove = (e) => {
      coords.x = e.clientX;
      coords.y = e.clientY;
    };

    const animateCircles = () => {
      let x = coords.x;
      let y = coords.y;

      circles.forEach((circle, index) => {
        circle.style.left = x - 12 + 'px';
        circle.style.top = y - 12 + 'px';

        circle.style.transform = `scale(${
          (circles.length - index) / circles.length
        })`;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;

        circle.x = x;
        circle.y = y;
      });

      requestAnimationFrame(animateCircles);
    };

    window.addEventListener('mousemove', handleMouseMove);

    animateCircles();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className='cursor'>
        {Array.from({ length: 20 }).map((_, index) => (
          <div className='circle' key={index}></div>
        ))}
      </div>
      <style jsx>{`
        .cursor {
          pointer-events: none;
          position: fixed;
          display: block;
          border-radius: 0;
          mix-blend-mode: difference;
          top: 0;
          left: 0;
          z-index: 9999999999999999;
        }

        .circle {
          position: absolute;
          display: block;
          width: 30px;
          height: 30px;
          border-radius: 20px;
          background-color: #fff;
        }
      `}</style>
    </>
  );
};

export default CursorTrail;
