import React from 'react'
import './mount.css'
import msvg from '../../assets/Montañas.svg'

const Mount = () => {
  return (
    <div className="mount">
        <img src={msvg} alt="Montaña" />
    </div>
  )
}

export default Mount