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





import React from 'react'

function App() {
  return (
    <div>App</div>
  )
}

export default App