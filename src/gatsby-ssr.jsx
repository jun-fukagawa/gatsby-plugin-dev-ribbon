import React from 'react'
import Ribbon from './ribbon'

const onRenderBody = ({ setPreBodyComponents }, pluginOptions) => {
  const { color, position, text } = pluginOptions

  setPreBodyComponents([
    <Ribbon
      key="ribbon"
      position={position || 'left'}
      color={color || 'red'}
      text={text || 'dev'}
    />,
  ])
}

export {
  onRenderBody,
}