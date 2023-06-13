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
        Content:'Java',
        important:true
    },
    {
        id:2,
        Content:'HTML',
        important:false
    },
    {
        id:3,
        Content:'CSS',
        important:true
    },{
        id:4,
        Content:'Bootstrap',
        important:false
    },{
        id:5,
        Content:'React',
        important:true
    }
]

ReactDOM.createRoot(document.getElementById('root')).render(<App notes={notes}/>)
