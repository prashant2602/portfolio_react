import React from 'react'
import Header from './Components/header/Header'
import Nav from './Components/nav/Nav'
import About from './Components/about/About'
import Experience from './Components/experience/Experience'
import Services from './Components/services/Services'
import Contact from './Components/contact/Contact'


const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Services />
      <Experience />
      <Contact/>

    </>
  )
}

export default App