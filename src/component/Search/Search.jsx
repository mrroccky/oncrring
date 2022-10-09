import React from 'react'
import './Search.css';




function Search() {
   return (
      <>

         <div className="box">
         <form name="search">
               <input type="text" class="input" name="txt" onmouseout="this.value = ''; this.blur();"  />
            </form>
         </div>
      </>
   )
}

export default Search