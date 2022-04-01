import React from 'react'
import Ribbon from './ribbon'

const wrapPageElement = ({ element }, { position, color, text }) => {
  return (
    <>
      <Ribbon key="ribbon" position={position || 'left'} color={color || 'red'} text={text || 'dev'} />
      {element}
    </>
  )
}

export { wrapPageElement }
