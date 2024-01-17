import React, { useRef } from 'react'
import Navbar from './Navbar'

import ResumeForm from './Form'
import './App.css'
import Home from './Home'
const App = () => {


  return (
    <div >
      <Navbar />
      <Home />
      <ResumeForm></ResumeForm>
    </div>
  )
}

export default App