import React from 'react'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {PiGithubLogoDuotone} from 'react-icons/pi'
import {SiLeetcode} from 'react-icons/si'

const HeaderSocial = () => {
  return (
    <div className='header__social'>
        <a href='https://linkedin.com' target='_blank'><AiOutlineLinkedin/></a>
        <a href='https://github.com' target='_blank'><PiGithubLogoDuotone/></a>
        <a href='https://leetcode.com' target='_blank'><SiLeetcode/></a>

    </div>
  )
}

export default HeaderSocial