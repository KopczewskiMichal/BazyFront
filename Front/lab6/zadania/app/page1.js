// zadanie 1 lab6
'use client';
import { useEffect, useState } from 'react';

export default function Home() {


  const Liczniki = () => {
    const [l1value, setL1value] = useState(0);
    const [l2value, setL2value] = useState(0);
    
    const handlePlus1 = () => {
      setL1value(l1value + 1)
    }
    const handleMinus1 = () => {
      setL1value(l1value - 1)
    }
    const handlePlus3 = () => {
      setL2value(l2value + 3)
    }
    const handleMinus3 = () => {
      setL2value(l2value - 3)
    }

    useEffect(() => {
    }, [l1value]);
  
    return (
      <div>
        <p>Licznik 1 = {l1value}</p>
        <button onClick={() => handlePlus1()}>+1</button>
        <button onClick={() => handleMinus1()}>-1</button>
        <p>Licznik 2 = {l2value}</p>
        <button onClick={() => handlePlus3()}>+3</button>
        <button onClick={() => handleMinus3()}>-3</button>
        
      </div>
    );
  };

    
  return (
    <div>
      <Liczniki />
    </div>
   );
}
