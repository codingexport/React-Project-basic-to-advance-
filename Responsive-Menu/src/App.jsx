import React from 'react'
import { useState } from 'react'

export default function App() {
  let [menuShow, setMenuShow] = useState(false)
  return (
    <>
      <button onClick={() => setMenuShow(!menuShow)}>{menuShow ? <span>&times;</span> : <span>&#9776;</span>}</button>
      <div className='App'>
        <div className={`menu ${menuShow ? "active" : ""}`} >
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Course</li>
            <li>Gallery</li>
            <li>About Us</li>
          </ul>
        </div>
      </div>
    </>
  )
}
