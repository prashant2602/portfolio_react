import React from 'react'
import './services.css'
import {PiSealCheckBold} from 'react-icons/pi'

const Services = () => {
  return (
    <section id='services' className='margin_mob1'>
      <h5>What Skills I have</h5>
      <h2>#SkillSet</h2>
      <div className='container container__services'>
        <div className="services__content">
          <article className='details'>
            <PiSealCheckBold/>
            <h4>C</h4>
            <small>Experienced</small>
          </article>
          <article className='details'>
            <PiSealCheckBold/>
            <h4>Java</h4>
            <small>Experienced</small>
          </article>
          <article className='details'>
            <PiSealCheckBold/>
            <h4>Python</h4>
            <small>Intermediate</small>
          </article>
          <article className='details'>
            <PiSealCheckBold/>
            <h4>HTML</h4>
            <small>Experienced</small>
          </article>
          <article className='details'>
            <PiSealCheckBold/>
            <h4>CSS</h4>
            <small>Experienced</small>
          </article>
          <article className='details'>
            <PiSealCheckBold/>
            <h4>JavaScript</h4>
            <small>Experienced</small>
          </article>
          <article className='details'>
            <PiSealCheckBold/>
            <h4>Bootstrap</h4>
            <small>Experienced</small>
          </article>
          <article className='details'>
            <PiSealCheckBold/>
            <h4>ReactJs</h4>
            <small>Intermediate</small>
          </article>
          <article className='details'>
            <PiSealCheckBold/>
            <h4>Tailwind CSS</h4>
            <small>Intermediate</small>
          </article>
          <article className='details'>
            <PiSealCheckBold/>
            <h4>Android Studio</h4>
            <small>Experienced</small>
          </article>
          <article className='details'>
            <PiSealCheckBold/>
            <h4>SQL</h4>
            <small>Intermediate</small>
          </article>
          <article className='details'>
            <PiSealCheckBold/>
            <h4>Cloud Basics</h4>
            <small>Intermediate</small>
          </article>
        </div>
        </div>
    </section>
  )
}

export default Services