import React, { useState } from 'react'

export default function App() {
  let [todiList, setTodoList] = useState([])



  let SaveToDoList = (event) => {
    let toname = event.target.toname.value;
    if (!todiList.includes(toname)) {
      let finalTodoList = [...todiList, toname]
      setTodoList(finalTodoList)
    }
    else {
      alert("Todo Name Allerday Exists.....")
    }
    event.preventDefault();
  };
  let list = todiList.map((value, index) => {
    return (<TodoList value={value} key={index} indexNumber={index} todiList={todiList} setTodoList={setTodoList} />)
  })
  return (
    <div className="app">
      <h1>TODO LIST</h1>
      <form onSubmit={SaveToDoList}>
        <input type="text" name="toname" className="toname" /> {/* Add name="toname" */}
        <button type="submit">Save</button>
      </form>
      <div className='outerDiv'>
        <ul>
          {list}
        </ul>
      </div>
    </div>
  );
}

function TodoList({ value, indexNumber, todiList, setTodoList }) {
  let [status, setStatus] = useState(false)
  let deleteRow = () => {
    let finalData = todiList.filter((v, i) => i != indexNumber)
    setTodoList(finalData)
  }
  let CheckStatus = () => {
    setStatus(!status)
  }
  return (
    <li className={(status) ? 'completetodo' : " "} onClick={CheckStatus}>{`${indexNumber + 1} :`}  {value}  <span onClick={deleteRow}>&times;</span></li>
  );
}
