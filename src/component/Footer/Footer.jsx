import React from 'react'
import './Footer.css'
export default function Footer() {

	
  return (
	<>
  <div className='footerBar' style={{'background':'black'}}> 
	<h1 className='font100' style={{'color':'white'}}>πΎοΈπ½π²πππΈπ½πΆ is an online platform to help the jobseekers who are searching for the jobs.</h1>
	<h1 className='font100' style={{'color':'white'}}>Get Quick Job Updates on
	<span className='font100' style={{'color':'white'}}>
		<Whatsapp/>
		<Facebook/>
		<Teligram/>
		<Instagram/>
		<Liknkedin/>
		<Tweeter/>
	</span>
	</h1>
	
	<h1 className='font100' style={{'color':'white'}}>Β© 2022 πΎοΈπ½π²πππΈπ½πΆ made in INDIA with β€οΈβ€οΈπ</h1>
	
	</div>
  </>
  )
}

function Whatsapp() {
	var link ='https://chat.whatsapp.com/IVlbM2X0Es3AXgWAzvvQuu/'
	return (<>
	  <a style={{'marginLeft':' 6px'}} href={link} ><img width={30} height={30}   src='images/w.png' /></a>
	</>)
  }

  function Facebook() {
	var link ='https://www.facebook.com/oncrring'
	return (<>
	  <a style={{'marginLeft':' 6px'}} href={link} ><img width={30} height={30}   src='images/f.png' /></a>
	</>)
  }
  function Teligram() {
	var link ='https://t.me/oncrring'
	return (<>
	  <a href={link} style={{'marginLeft':' 6px'}} ><img width={30} height={30}   src='images/t.png' /></a>
	</>)
  }
  function Instagram() {
	var link ='https://www.instagram.com/oncrring_/'
	return (<>
	  <a href={link} ><img width={50} height={30}   src='images/i.png' /></a>
	</>)
  }

  function Liknkedin() {
	var link ='https://www.linkedin.com/company/oncrring/'
	return (<>
	  <a href={link} style={{'marginLeft':' 1px'}}  ><img width={30} height={30}   src='images/li.png' /></a>
	</>)
  }

  function Tweeter() {
	var link ='https://twitter.com/oncrring'
	return (<>
	  <a href={link} style={{'marginLeft':' 6px'}} ><img width={30} height={30}   src='images/twe.png' /></a>
	</>)
  }