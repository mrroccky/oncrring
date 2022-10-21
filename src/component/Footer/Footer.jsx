import React from 'react'
import './Footer.css'
export default function Footer() {

	
  return (
	<>
  <div className='footerBar' style={{'background':'black'}}> 
	<h1 className='font100' style={{'color':'white'}}>🅾️🅽🅲🆁🆁🅸🅽🅶 is an online platform to help the jobseekers who are searching for the jobs.</h1>
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
	
	<h1 className='font100' style={{'color':'white'}}>© 2022 🅾️🅽🅲🆁🆁🅸🅽🅶 made in INDIA with ❤️❤️💕</h1>
	
	</div>
  </>
  )
}

function Whatsapp() {
	var link ='https://chat.whatsapp.com/IVlbM2X0Es3AXgWAzvvQuu/'
	return (<>
	  <a style={{'marginLeft':' 6px'}} href={link} ><img width={30} height={30}   src='Images/w.png' /></a>
	</>)
  }

  function Facebook() {
	var link ='https://www.facebook.com/oncrring'
	return (<>
	  <a style={{'marginLeft':' 6px'}} href={link} ><img width={30} height={30}   src='Images/f.png' /></a>
	</>)
  }
  function Teligram() {
	var link ='https://t.me/oncrring'
	return (<>
	  <a href={link} style={{'marginLeft':' 6px'}} ><img width={30} height={30}   src='Images/t.png' /></a>
	</>)
  }
  function Instagram() {
	var link ='https://www.instagram.com/oncrring_/'
	return (<>
	  <a href={link} ><img width={50} height={30}   src='Images/i.png' /></a>
	</>)
  }

  function Liknkedin() {
	var link ='https://www.linkedin.com/company/oncrring/'
	return (<>
	  <a href={link} style={{'marginLeft':' 1px'}}  ><img width={30} height={30}   src='Images/li.png' /></a>
	</>)
  }

  function Tweeter() {
	var link ='https://twitter.com/oncrring'
	return (<>
	  <a href={link} style={{'marginLeft':' 6px'}} ><img width={30} height={30}   src='Images/twe.png' /></a>
	</>)
  }