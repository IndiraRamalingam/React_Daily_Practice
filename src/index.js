import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


//data
const notes=[
    {
        id:1,
        content:'Java',
        important:true
    },
    {
        id:2,
        content:'HTML',
        important:false
    },
    {
        id:3,
        content:'CSS',
        important:true
    },{
        id:4,
        content:'Bootstrap',
        important:false
    },{
        id:5,
        content:'React',
        important:true
    }
]

ReactDOM.createRoot(document.getElementById('root')).render(<App notes={notes}/>)
//ReactDOM.createRoot(document.getElementById('root')).render(<App />)
