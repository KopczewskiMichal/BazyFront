// Zad 2 lab7 
'use client';

import React from 'react';
import { useEffect, useState } from 'react';
import './style.css';

export default function App() {
  const TrackMouse = () => {
    const handleMouseMove = event => {
      setMouseChange({
        x: event.clientX,
        y: event.clientY
    })
    } 


    const [mousePosition, setMouseChange] = useState({x: 0, y:0})
    useEffect(() => {
      window.addEventListener('mousemove', handleMouseMove);
    }, mousePosition);    
    
  return (
    <div>
      <p>Pozycja kursora myszy: ({mousePosition.x},{mousePosition.y})</p>
    </div>
  )  
  }
    
  return (
    <TrackMouse />

  );
}
