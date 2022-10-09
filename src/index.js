import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
 
// const mynuma =[1,3,2,3,2];
// // const myArray = ['apple', 'banana', 'orange'];
// const numlist = mynuma.map((item=><p>{item}</p>))



// const myList = myArray.map((item) => <p className='fruits'>{item}</p>)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <div className='body'> <App /></div>

);

