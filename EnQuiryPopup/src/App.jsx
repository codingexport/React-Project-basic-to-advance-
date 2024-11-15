import React from 'react'
import { useState } from 'react'

export default function App() {
  let [menuShow, setMenuShow] = useState(false)
  return (
    <>
      <div className='rotated'>
        <button className='Enquiry' onClick={() => setMenuShow(!menuShow)}>Enquiry Know</button>
      </div>
      <div className={`modelOverLay ${menuShow ? "active" : ""}`} >
        <div className='modalDiv'>
          <button className="enquiryButton" onClick={() => setMenuShow(!menuShow)}>{menuShow ? <span>&times;</span> : " "}</button>
          <form className="enquiryForm"  >
            <label>
              Name:
              <input type="text" placeholder="Enter your name" />
            </label>
            <label>
              Email:
              <input type="email" placeholder="Enter your email" />
            </label>
            <label>
              Message:
              <textarea placeholder="Enter your message"></textarea>
            </label>
            <button type="submit" className="submitButton">submit</button>
          </form>
        </div>
      </div>
    </>
  )
}
