import {useState} from "react";
import './App.css'
import Newt from './components/Newt/Newt.jsx'
import Image from './components/Images/Images.jsx'
import {Gallery} from './data.js'

/* The plan:

Rotate the image on click by a varying number of degrees based
on state (number of clicks).

Same state should control other effects on the page, like information or images
revealed.
 */

function App() {

const [rotate, setRotate] = useState(0);
const [index, setIndex] = useState(0);
const [imIndex, setImIndex] = useState(0);


const newtClick = () => {
    setRotate(rotate + 30);
    setIndex(index + 1);
    setImIndex((imIndex + 1) % Gallery.length);
}
const currentImage = Gallery[imIndex]
  return (
    <>
        <div className="Newts" style={{background: `rgb(${index * 5}, 55, 55)`}}>
            <Newt style={{transform: `rotate(${rotate}deg)`}}/>

            <Image pic={currentImage}/>

            <Newt style={{transform: `rotate(${-rotate}deg)`}}/>
        </div>
        <button onClick = {newtClick} type="button">
            click to turn the newts and change the picture
        </button>
        <p>What is Gallery length? {Gallery.length}</p>
        <p>The rotation value is now {rotate} degrees.</p>
        <p>The index value is now {index}.</p>
        <p>The imIndex value is now {imIndex}</p>
    </>
  )
}

export default App
