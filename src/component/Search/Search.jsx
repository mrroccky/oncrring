import React from 'react'
import './Search.css';




export default function Search() {
   var link =window.location.href;
   var endLink =link.split("=")[1];
   // /detailed?id=14
   // 0/?detailded=dfdsfds
   return (
      <>
      {/* <h1>{endLink}</h1> */}
         <div className="box">
         <form name="search">
               <input type="text" className="input" name="detailded?id=" onMouseOut="this.value = ''; this.blur();"  />
            </form>
         </div>
      </>
   )
}



function searchURL(){
   
 }