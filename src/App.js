
//useState hook

// import React from 'react'
// import { useState } from 'react'
// 
// function App() {
// const [counter,setCounter] = useState(0)
// 
// setTimeout(
//     ()=>setCounter(counter+1),1000
// );
//   return (
//     <div>{counter}</div>
//   )
// }
// 
// export default App

import React from 'react'
import { useState } from 'react'

function App() {
const [counter,setCounter] = useState(0)

const handleClickPlus = ()=>{
    setCounter(counter+1)
}
const handleClickMinus = ()=>{
    setCounter(counter-1)
}
const handleClickZero = ()=>{
    setCounter(0)
}

  return (
    <div>
    <div>{counter}</div>
    <button onClick={handleClickPlus}>Plus</button>
    <button onClick={handleClickMinus}>Minus</button>
    <button onClick={handleClickZero}>Zero</button>
    </div>
  )
}

export default App