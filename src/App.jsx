import { useState } from 'react'
import './App.css'
import Newt from './components/Newt/Newt.jsx'

/* The plan:

Rotate the image on click by a varying number of degrees based
on state (number of clicks).

Same state should control other effects on the page, like information or images
revealed.
 */

function App() {

  return (
    <>

        <Newt />
    </>
  )
}

export default App
