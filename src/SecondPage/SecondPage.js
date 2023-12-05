import React from 'react'
import "./SecondPage.css"
import picture from "./BackgrondPic.png"
import News from './News/News'
function SecondPage() {
  return (
    <div className='secondPage'>
      <img className="secondPic" src={picture} alt="secondPic" />
      <News />
    </div>

  )
}

export default SecondPage