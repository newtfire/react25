import {BrowserRouter, Routes, Route, NavLink, Link} from 'react-router-dom'
import styled from 'styled-components'
/* ebb: I had to npm install styled-components for this. Thinking about how it's different
* from applying the styling in CSS. I think this is intended for applying CSS to JSX.*/
import './App.css'
import Home from './components/Home/Home.jsx';
import Gallery from './components/Gallery/Gallery.jsx'

/* The plan:
Rotate the image on click by a varying number of degrees based
on state (number of clicks).
Same state should control other effects on the page, like information or images
revealed.
 */
function App() {

const StyledLink = styled(NavLink)`
  color: lavenderblush;
    padding-right: 2em;
    &.active {
        font-weight: bold;
        color: yellowgreen;
    }`;

  return (
    <>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            {/*ebb: By adding this basename, I am now pulling in
            the base variable from vite.config.js */}
            <nav>
                <StyledLink to={"/"}>Home</StyledLink>
                <StyledLink to={"/gallery"}>Gallery</StyledLink>
            </nav>
            <Routes>
                <Route path={"/"} element={<Home />}>Home</Route>
                <Route path={"/gallery"} element={<Gallery />} />

            </Routes>
        </BrowserRouter>


    </>
  )
}

export default App
