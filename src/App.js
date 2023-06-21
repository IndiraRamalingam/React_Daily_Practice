// //props drilling
// 
// import React from 'react'
// 
// function GrandChild(props)
// {
//   return(
//     <div>
//       <h3>GrandChild</h3>
//       <p>{props.msg}</p>
//     </div>
//   )
// }
// 
// function ChildComponent(props)
// {
//   return(
//     <div>
//       <h1>Child</h1>
//       <p>{props.message}</p>
//       <GrandChild msg={props.message}/>
//     </div>
//   )
// }
// function App() {
// 
//   //parent component data
//   const message='Hello';
// 
//   return (
//     <div>
//       <h1>Parent Component</h1>
//       <p>{message}</p>
//       <ChildComponent message={message}/>
//     </div>
//   )
// }
// 
// export default App





import React, { useContext, useState } from 'react'
import { createContext } from 'react';


//create a context
const MessageContext = createContext();

function GrandChild()
{
  const message=useContext(MessageContext)
  return(
    <div>
      <h1> Grnad Child</h1>
      <p>{message.message}</p>
    </div>
  )
}
function ChildComponent()
{
  const message=useContext(MessageContext)
  return(
    <div>
      <h1>Child Component</h1>
      <p>{message.message}</p>
      <GrandChild />
    </div>
  )
}
function App() {
  const[message,setMessage] = useState('Hello');
  return (
    <div>
    <h1>Parent Component</h1>
    <MessageContext.Provider value={{message:message}}>
      <ChildComponent />
    </MessageContext.Provider>

    </div>
  )
}

export default App