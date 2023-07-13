import React from 'react'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {PiGithubLogoDuotone} from 'react-icons/pi'
import {SiLeetcode} from 'react-icons/si'

const HeaderSocial = () => {
  return (
    <div className='header__social'>
        <a href='https://www.linkedin.com/in/prashant-shrivastava-897065217/' target='_blank'><AiOutlineLinkedin/></a>
        <a href='https://github.com/prashant2602' target='_blank'><PiGithubLogoDuotone/></a>
        <a href='https://leetcode.com/PrashantShrivastava/' target='_blank'><SiLeetcode/></a>

    </div>
  )
}

export default HeaderSocial