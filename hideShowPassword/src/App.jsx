import React, { useState } from 'react'

export default function App() {
  let [showcase, setShowCase] = useState(false);
  return (
    <div>
      <input type={showcase ? "text" : "password"} name="" id="" />
      <button onClick={() => setShowCase(!showcase)}>
        {showcase ? "Hide" : "Show"}</button>
    </div>
  )
}
