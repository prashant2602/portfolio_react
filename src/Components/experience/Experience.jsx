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
      <div className="experience__cards">
            <article className='exp__card'>
              
            <h4><MdOutlineComputer/> Website development</h4>
          <h6>Freelancing</h6>
          <p>"Freelance front-end development project: Designed and developed 
            a visually appealing, responsive website using HTML, CSS, JavaScript, 
            and Bootstrap. Demonstrated expertise in creating intuitive user interfaces, 
            implementing modern design principles, and ensuring cross-browser compatibility. 
            Delivered project on time, meeting client's expectations."</p>
          <h6>Internship</h6>
          <p>"Interning in the development of virtual labs for the Mechanical Department at our 
            college, focused on enhancing hands-on learning experiences. Designing and 
            implementing interactive interfaces, collaborating with a diverse team to 
            deliver impactful educational solutions."</p>
            </article>
            <article className='exp__card'>
         
            <h4><AiFillAndroid/> Android Development</h4>
          <h6>Hackathon</h6>
          <p>"Led a remarkable team in developing a top-ranking Android application 
            featuring cutting-edge functionalities, including an integrated voice 
            assistant for seamless user interaction. Additionally, introduced a 
            groundbreaking feature allowing users to conveniently schedule appointments 
            with specialized doctors based on their specific needs, revolutionizing 
            the way healthcare is accessed and enhancing user experience."</p>
            </article>
            <article className='exp__card'>
 
            <h4><IoLogoPython/> Image Classification</h4>
          <h6>Research Project</h6>
          <p>"Contributed to a project focused on studying the ML model LOFTR and 
            successfully trained it. Applied machine learning techniques to analyze 
            and understand its capabilities for various applications. Demonstrated a
            strong grasp of model training methodologies and effectively collaborated 
            with the team to achieve project goals."</p>
            </article>
          </div>
          </div>
    </section>
  )
}

export default Experience