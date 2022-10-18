import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Search.css';


//under dev
export default function Search() {
   // var lin=window.location.href();
   // var link =lin.split("=")[1];
   // link? console.log(link):console.log("wait");
   const navigate = useNavigate();
	const gotoDetail = () => {
   var data=document.getElementById("input").value = test;
		navigate('/detailed'+data);
	}

   useEffect(()=>{
      document.addEventListener("keydown",detectKeyDawn,true)
 },[])
 const detectKeyDawn=(e)=>{
   console.log("key dawn :"+e.key)
   if(e.key=="Enter"){
      console.log("wohoooooooooo👩‍🎤😎🤩");
      gotoDetail();
      }
   }
   return (
      <>
         <div className="box">
         <form name="search">
               <input type="text" className="input" name="link"  onMouseOut="this.value = ''; this.blur();"/>
            </form>
         </div>
      </>
   )
}




