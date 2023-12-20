import React, {useContext} from 'react';
import { ColorContext } from './ColorContext';

export default function SecondaryHeadline () {
  const color = useContext(ColorContext)

  return (
    <h2
    style={{color: color}}
    >Powyższy tekst wygenerowało AI</h2>
  )
}