import Ribbon from './ribbon'
import React from 'react'

const wrapPageElement = ({ element }, { position, color, text }) => {
  return (
    <>
      <Ribbon key="ribbon" position={position || 'left'} color={color || 'red'} text={text || 'dev'} />
      {element}
    </>
  )
}

export default wrapPageElement
