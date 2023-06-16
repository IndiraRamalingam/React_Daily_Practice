// //Without React Router
// 
// import React, { useState } from 'react'
// 
// function Home()
// {
//   return(
//     <div>
//       <h2>Home Component</h2>
//     </div>
//   )
// }
// 
// function Notes()
// {
//   return(
//     <div>
//       <h2>Notes Component</h2>
//     </div>
//   )
// }
// 
// function Users()
// {
//   return(
//     <div>
//       <h2>Users Component</h2>
//     </div>
//   )
// }
// 
// function App() {
// 
//   const [page,setPage]=useState('home');
// 
//   const content =() =>{
//     if(page =='home')
//     {
//       return <Home />
//     }
//     else if(page == 'notes')
//     {
//       return < Notes />
//     }
//     else{
//       return <Users />
//     }
//   }
// 
// const toPage=(page)=>(event)=>
// {
//   event.preventDefault();
//   setPage(page);
// }
// 
//   const padding={
//     padding:10
//   };
//   
//   return (
//     <div>
//       <a href='' style={padding}  onClick={toPage('home')}>home</a>
//       <a href='' style={padding} onClick={toPage('notes')}>notes</a>
//       <a href='' style={padding} onClick={toPage('users')}>users</a>
//       
//       { content() }
//     
//     </div>
//     
//     
//   )
// }
// 
// export default App


//With React Router --> Install npm install react-router-dom

import React from 'react'
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function Home()
{
  return(
    <div>
      <h2>Home Component</h2>
    </div>
  )
}

function Notes()
{
  return(
    <div>
      <h2>Notes Component</h2>
    </div>
  )
}

function Users()
{
  return(
    <div>
      <h2>Users Component</h2>
    </div>
  )
}

function App() {

  const padding={
    padding:10
  };
  
  return (
    
      <Router>
        <div>
          <Link to='/' style={padding}>Home</Link>
          <Link to='/notes' style={padding}>Notes</Link>
          <Link to='/users' style={padding}>Users</Link>
        </div>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/notes' element={<Notes />} />
          <Route path='/users' element={<Users />} />
       </Routes>
        </Router>
    
    
  )
}

export default App