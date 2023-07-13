import React from 'react'
import './nav.css'
import {BiHome} from 'react-icons/bi'
import {SiAboutdotme} from 'react-icons/si'
import {GoProjectSymlink} from 'react-icons/go'
import {BiMessageDetail} from 'react-icons/bi'
import {GiSkills} from 'react-icons/gi'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
  <nav>
    <a href='#' onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : '' } ><BiHome/></a>
    <a href='#about' onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : '' }><SiAboutdotme/></a>
    <a href='#services' onClick={()=> setActiveNav('#services')} className={activeNav === '#services' ? 'active' : '' }><GiSkills/></a>
    <a href='#experience' onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : '' }><GoProjectSymlink/></a>
    <a href='#contact' onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : '' }><BiMessageDetail/></a>
  </nav>
  )
}

export default Nav
