import React, {useContext} from 'react';
import { ColorContext } from './ColorContext';

export default function PrimaryHeadline () {
const color = useContext(ColorContext)

  return (
    <h1
    style={{color: color}}
    >Wesołych świąt</h1>
  )
}