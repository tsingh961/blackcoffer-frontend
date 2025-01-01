import React from 'react'
import './button.scss'

const Button = ({btnText}) => {
  return (
      <button className='button'>{btnText}</button>
  )
}

export default Button