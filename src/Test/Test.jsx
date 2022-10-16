import React from 'react'
import { Button } from 'react-bootstrap';
import './Test.css';

export default function Test() {
  return (
	<>
	<Button onClick={()=>openNav()}>menue</Button>
	<div id="mySidenav" class="sidenav">
 	 <a href="#" class="closebtn" onClick={()=>closeNav()}>&times;</a>
  	<a href="#">About</a>
  	<a href="#">Services</a>
  	<a href="#">Clients</a>
  	<a href="#">Contact</a>
	</div>
	</>
  )
}


function openNav() {
	document.getElementById("mySidenav").style.width = "250px";
  }

function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
}