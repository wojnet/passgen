import React from 'react'

const BurgerButton = ({ setIsDark }) => {

  const handleClick = () => {
    setIsDark(e => !e)
  }

  return (
    <div className='BurgerButton' onClick={handleClick}>
      <div className='BurgerButton--line'></div>
      <div className='BurgerButton--line'></div>
      <div className='BurgerButton--line'></div>
    </div>
  )
}

export default BurgerButton
