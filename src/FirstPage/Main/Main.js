import React from 'react'
import "./Main.css"
import LeftSide from './LeftSide/LeftSide'
import RightSide from './RightSide/RightSide'

function Main() {
  return (
  <div className='main'>
  <LeftSide/>
  <RightSide/>
  </div>

  )
}

export default Main