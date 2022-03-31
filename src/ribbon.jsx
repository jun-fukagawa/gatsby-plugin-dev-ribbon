import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/react'


const camelCase = (str) => {
  str = str.charAt(0).toLowerCase() + str.slice(1)
  return str.replace(/[-_](.)/g, (match, p1) => p1.toUpperCase())
}

const snakeCase = (str) => {
  const camel = camelCase(str)
  return camel.replace(/[A-Z]/g, (match) => '_' + match.charAt(0).toLowerCase())
}

const pascalCase = (str) => {
  const camel = camelCase(str)
  return camel.charAt(0).toUpperCase() + camel.slice(1)
}

const Ribbon = ({ text, position, color }) => {
  const [visible, setVisible] = React.useState(true)
  const wrapperPosition = React.useMemo(() => `wrapper${pascalCase(position)}`, [position])
  const ribbonPosition = React.useMemo(() => `ribbon${pascalCase(position)}`, [position])
  if (!visible) return null
  return (
    <div css={[styles.wrapper, styles[wrapperPosition]]}>
      <div css={[styles.ribbon, css`
        background-color: ${color};
      `, styles[ribbonPosition]]}
           onClick={() => setVisible(false)}
      >
        <span css={[styles.ribbonText, css`
          color: ${color === 'white' ? 'black' : 'white'};
        `]}>{text || 'dev'}</span>
      </div>
    </div>
  )
}

Ribbon.propTypes = {
  text: PropTypes.string,
  position: PropTypes.oneOf([`left`, `right`, `left-bottom`, `right-bottom`]),
  color: PropTypes.oneOf([`red`, `orange`, `green`, `black`, `darkblue`,`gray`, `white`]),
}

const styles = {
  wrapper: css`
    width: 150px;
    height: 150px;
    position: fixed;
    overflow: hidden;
    z-index: 9999;
    pointer-events: none;
  `,
  wrapperLeft: css`
    top: 0;
    left: 0;
  `,
  ribbonLeft: css`
    top: 42px;
    left: -43px;
    transform: rotate(-45deg);
  `,
  wrapperRight: css`
    top: 0;
    right: 0;
  `,
  ribbonRight: css`
    top: 42px;
    right: -43px;
    transform: rotate(45deg);
  `,
  wrapperLeftBottom: css`
    bottom: 0;
    left: 0;
  `,
  ribbonLeftBottom: css`
    top: 80px;
    left: -43px;
    transform: rotate(45deg);
  `,
  wrapperRightBottom: css`
    bottom: 0;
    right: 0;
  `,
  ribbonRightBottom: css`
    top: 80px;
    right: -43px;
    transform: rotate(-45deg);
  `,
  ribbon: css`
    position: absolute;
    padding: 2px 0;
    background-color: #ea4335;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15));
    box-shadow: 0 2px 3px 0 rgb(0 0 0 / 50%);
    font: 700 13px "Helvetica Neue", Helvetica, Arial, sans-serif;
    z-index: 9999;
    pointer-events: auto;
    opacity: 1;
    transition: opacity .25s ease-in-out;

    &:hover {
      opacity: 0.2;
    }
  `,
  ribbonText: css`
    color: #fff;
    text-decoration: none;
    text-shadow: 0 -1px rgb(0 0 0 / 50%);
    text-align: center;
    cursor: pointer;
    width: 200px;
    line-height: 20px;
    display: inline-block;
    padding: 2px 0;
    border-width: 1px 0;
    border-style: dotted;
    border-color: #fff;
    border-color: rgba(255, 255, 255, 0.7);
  `,
}

export default Ribbon