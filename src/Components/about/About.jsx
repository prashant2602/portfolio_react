import React from 'react'
import './about.css'
import {HiSpeakerphone} from 'react-icons/hi'
import {FaWpforms} from 'react-icons/fa'
import {FaHandsHelping} from 'react-icons/fa'
import img_about1 from '../../assets/img_about1.jpg'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img_about1} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <HiSpeakerphone className='about__icons'/>
              <h5>Publicity Head</h5>
              <small>NSS, RCOEM</small>
            </article>
            <article className='about__card'>
              <FaHandsHelping className='about__icons'/>
              <h5>Social Activities Head</h5>
              <small>COMPUSYS, RCOEM</small>
            </article>
            <article className='about__card'>
              <FaWpforms className='about__icons'/>
              <h5>Technical Head</h5>
              <small>Boys Hostel, RCOEM</small>
            </article>
          </div>
          <p className='about__text'>I am a results-oriented professional 
          with strong leadership skills and a passion for continuous learning. 
          With expertise in web development and Android, I excel in dynamic 
          environments and thrive on challenging projects. I am known for my 
          smart work approach, delivering high-quality results efficiently. 
          Eager to contribute my skills and expand my knowledge in an innovative 
          work environment.          
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About