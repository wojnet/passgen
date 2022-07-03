import React from 'react'
import BurgerButton from './BurgerButton'

const Header = ({ setIsDark }) => {
  return (
    <div className='Header'>
        <BurgerButton setIsDark={setIsDark} />
        <h1>PASSGEN</h1>
    </div>
  )
}

export default Header
