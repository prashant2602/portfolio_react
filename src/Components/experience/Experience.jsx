import React from 'react'
import './experience.css'
import {AiFillAndroid} from 'react-icons/ai'
import {MdOutlineComputer} from 'react-icons/md'
import {IoLogoPython} from 'react-icons/io'

const Experience = () => {
  return (
    <section id='experience' className='margin_mob1'>
      <h5>My Experience</h5>
      <h2>Work Domain</h2>
      <div className='container experience_container'>
        <div className='row text-center mt-4'>
        <div className="col-sm experience_card">
          <h4><MdOutlineComputer/> Website development</h4>
          <h6>Freelancing</h6>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Voluptatum impedit iusto sit ad exercitationem? 
            Velit minus et, provident ipsam hic illo dolor sit excepturi. 
            Dolorum quo non minima fugit sapiente.</p>
          <h6>Internship</h6>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Voluptatum impedit iusto sit ad exercitationem? 
            Velit minus et, provident ipsam hic illo dolor sit excepturi. 
            Dolorum quo non minima fugit sapiente.</p>
        </div>
        <div className="col-sm experience_card">
          <h4><AiFillAndroid/> Android Development</h4>
          <h6>Hackathon</h6>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Voluptatum impedit iusto sit ad exercitationem? 
            Velit minus et, provident ipsam hic illo dolor sit excepturi. 
            Dolorum quo non minima fugit sapiente.</p>
        </div>
        <div className="col-sm experience_card">
          <h4><IoLogoPython/> Image Classification</h4>
          <h6>Research Project</h6>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Voluptatum impedit iusto sit ad exercitationem? 
            Velit minus et, provident ipsam hic illo dolor sit excepturi. 
            Dolorum quo non minima fugit sapiente.</p>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Experience