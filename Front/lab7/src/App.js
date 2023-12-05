// Zad 2 lab7 
'use client';

import React from 'react';
import { useEffect, useState } from 'react';
import './style.css';

export default function App() {
  const TrackMouse = () => {
    const handleMouseMove = event => {
      setMouseChange([
        event.clientX,
        event.clientY
      ])
    } 


    const [mousePosition, setMouseChange] = useState([0,0])
    useEffect(() => {
      window.addEventListener('mousemove', handleMouseMove);
    }, mousePosition);    
    
  return (
    <div>
      <p>Pozycja kursora myszy: ({mousePosition[0]},{mousePosition[1]})</p>
    </div>
  )  
  }
    
  return (
    <TrackMouse />

  );
}
