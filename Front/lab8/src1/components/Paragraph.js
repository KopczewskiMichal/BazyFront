import React, {useContext} from 'react'
import { ColorContext } from './ColorContext';

export default function PrimaryHeadline () {
  const color = useContext(ColorContext)

  return (
    <p
    style={{color: color}}
    >Linux to jak prezent od Mikołaja dla twojego komputera! Jest otwarty na wszelkie świąteczne ulepszenia i oferuje wybór jak w menu świątecznym. Z Linuxem czujesz się jak Mikołaj, wybierając nietypową, ale kreatywną trasę dostarczania prezentów! 🎄🐧✨✨</p>
  )
}