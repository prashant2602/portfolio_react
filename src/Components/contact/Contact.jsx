import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {IoLogoWhatsapp} from 'react-icons/io'
import {PiLinkedinLogoBold} from 'react-icons/pi'

const Contact = () => {
  return (
    <section id='contact' className='margin_mob2'>
      <h5>Let's Talk!</h5>
      <h2>Contact Me</h2>
      <div className="container container_contact">
        <div className="contact_options">
          <article className='contact_option'>
            <AiOutlineMail/>
            <h4>Email</h4>
            <h6>prashantshrivastava2607@gmail.com</h6>
            <a href='mailto:prashantshrivastava2607@gmail.com' target='_blank'>Send a message</a>
          </article>
          <article className='contact_option'>
            <IoLogoWhatsapp/>
            <h4>WhatsApp</h4>
            <h6>Prashant Shrivastava</h6>
            <a href='https://api.whatsapp.com/send?phone=+918329191368' target='_blank'>Send a message</a>
          </article>
          <article className='contact_option'>
            <PiLinkedinLogoBold/>
            <h4>Linkdlen</h4>
            <h6>Prashant Shrivastava</h6>
            <a href='https://api.whatsapp.com/send?phone=+918329191368' target='_blank'>Send a message</a>
          </article>
        </div>
        <form action=''>
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>

    </section>
  )
}

export default Contact