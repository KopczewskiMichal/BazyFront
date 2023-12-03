// Zad 1 lab7 
'use client';

import React from 'react';
import { useEffect, useState } from 'react';
import './style.css';

export default function App() {
  const Licznik = () => {
    const handleMouse = event => {
      if (event.button === 0) setCounter(counter + 1)
      else if (event.button === 2) setCounter(counter - 1)
    } 


    const [counter, setCounter] = useState(0)
    useEffect(() => {
      document.addEventListener('mousedown', handleMouse);
    }, [counter]);    
    
  return (
    <div>
      Stan licznika wynosi: {counter}
    </div>
  )  
  }
    
  return (
    <Licznik />

  );
}
