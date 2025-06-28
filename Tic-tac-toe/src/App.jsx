import { useState } from 'react'
import './App.css'


function Square(){
  const [value, setValue] = useState(null)
  function handleclick(){
    setValue(value)
  }

  return <button className='square' onClick={handleclick}>{value}</button>
}

function BoxSquare(){
  return(
    <>
    <div className="box-square">
      <Square />
      <Square />
      <Square />
    </div>
    <div className="box-square">
      <Square />
      <Square />
      <Square />
    </div>
    <div className="box-square">
      <Square />
      <Square />
      <Square />
    </div>
    </>
  )
}

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BoxSquare />
    </>
  )
}

export default App
