
//Functional Component
// function App() {
//   console.log("Hello from component1")
//   return (
//     <div><p>Hello World !!!</p></div>
//   );
// }
// 
// export default App;

// Function component and passing props  
// import React from 'react'
// 
// function Hello(props)
// {
//     return(
//         <div>
//             Hello, {props.name}!!
//         </div>
//     )
// }
// function App() {
//   return (
//     <div>
//         <Hello name={'Indira'}/>
//     </div>
//   )
// }
// 
// export default App

//Class Component
// import { Component } from "react";
// class App extends Component{
//     render()
//     {
//         return(
//             <div>Hello</div>
//         )
//     }
// }
// export default App;

//Passing props in class component

// import { Component } from "react";
// 
// class Hello extends Component{
//     render()
//     {
//         console.log(this.props)
//         return(
//             <div>Hello World!!! {this.props.name}</div>
//         )
//     }
// }
// 
// class App extends Component{
//     render()
//     {
//         return(
//             <div>
//                 <Hello name={'krish'} />
//             </div>
//         )
//     }
// }
// export default App;