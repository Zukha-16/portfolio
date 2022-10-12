import React from 'react'
import './EmptySpaceFiller.scss'

function EmptySpaceFiller({height}) {
  return (
    <div className='emptySpaceFiller' style={{height: `${height}rem`}}></div>
  )
}

export default EmptySpaceFiller