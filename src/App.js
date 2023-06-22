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



// useContext hook --> to avoid props drilling
// 
// import React, { useContext, useState } from 'react'
// import { createContext } from 'react';
// 
// 
// //create a context
// const MessageContext = createContext();
// 
// function GrandChild()
// {
//   const message=useContext(MessageContext)
//   return(
//     <div>
//       <h1> Grnad Child</h1>
//       <p>{message.message}</p>
//     </div>
//   )
// }
// function ChildComponent()
// {
//   const message=useContext(MessageContext)
//   return(
//     <div>
//       <h1>Child Component</h1>
//       <p>{message.message}</p>
//       <GrandChild />
//     </div>
//   )
// }
// function App() {
//   const[message,setMessage] = useState('Hello');
//   return (
//     <div>
//     <h1>Parent Component</h1>
//     <MessageContext.Provider value={{message:message}}>
//       <ChildComponent />
//     </MessageContext.Provider>
// 
//     </div>
//   )
// }
// 
// export default App


// Session task --> Profile name changes

import React, { createContext, useContext, useState } from 'react'

const ProfileContext=createContext();

//Profile Component
function Profile()
{
  const {profileName,setprofileName}=useContext(ProfileContext)
let onChangeProfileHandler = (event) =>{
  setprofileName(event.target.value);
  console.log(event.target.value);
}

  return(
    <div>
      <h2>Profile Name: {profileName}</h2>
      <input 
      type="text"
      value={profileName}
      onChange={onChangeProfileHandler}
      ></input>
    </div>
  )

}

//Parent Component
function App() {
  const [profileName,setprofileName]=useState('');
  return (
    <div>
      <h1>Parent</h1>
      <ProfileContext.Provider value={{profileName,setprofileName}}>
        <Profile />
      </ProfileContext.Provider>
    </div>
  )
}

export default App