import React from 'react'
import './header.css'
import CTA from './CTA'
import image01 from '../../assets/image01.png'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Prashant Shrivastava</h1>
        <h5 className='text-light'>React Developer</h5>
        <CTA/>
        <HeaderSocial/>
        <div className='me'>
          <img src={image01}/>
        </div>
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>

    </header>
  )
}

export default Header