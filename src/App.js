// function App() {
//   console.log("Hello from component1")
//   return (
//     <div><p>Hello World !!!</p></div>
//   );
// }
// 
// export default App;
// 
// 
// import React from 'react'
// 
// function Hello()
// {
//     return(
//         <div>
//             <p>Hello World</p>
//         </div>
//     )
// }
// 
// function App() {
//   return (
//     <div class="container">
//         <div class="row">
//             <div class="col-4">
//                 Hi
//             </div>
//             <div class="col-4">
//                 Hello
//             </div>
//             <div class="col-4">
//                 World
//             </div>
//         </div>
//         <h1>Header</h1>
//         <Hello />
//         <Hello />
//     </div>
//   )
// }
// 
// export default App

//Day 3

import React from 'react'

// function App(props) {
//     const {notes} = props;
//    // console.log(notes)
//   return (
//     <div>
//         <h1>Notes</h1>
//         {/* <ul>
//             <li>{notes[0].Content}</li>
//             <li>{notes[1].Content}</li>
//             <li>{notes[2].Content}</li>
//             <li>{notes[3].Content}</li>
//             <li>{notes[4].Content}</li>
//         </ul> */}
// 
//         {/* //To create dynamcially  */}
// 
//         <ul>
//             {notes.map(note => <li key={note.id}>{note.Content}</li>)}
//         </ul>
//     </div>
//   )
// }

// For using component
// function Note({note})
// {
//     //Conditional Rendering
//     if(note.important){
//         return(
//             <li>{note.Content}*</li>
//         )
//     }
//     return(
//         <li>{note.Content}</li>
//     )
// }
// function App({notes}) {
//   return (
//     <div>
//         <h1>Notes</h1>
//         <ul>
//             {notes.map(note =>
//                <Note key={note.id} note={note}/>  
//                  )}
//         </ul>
//     </div>
//   )
// }


export default App