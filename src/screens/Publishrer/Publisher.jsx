import './publisher.css';
import React from 'react'
import ProfileView from '../../component/ProfileView/ProfileView'
import Footer from '../../component/Footer/Footer';

export default function Publisher() {
	var link=window.location.href;
	var user= link.split("=")[1];
  return (
	<>
	<div  className='left'>
	<div style={{background:'var(--white)', boxShadow:'var(--box-shadow)', textAlign:'center'}}>
		<ProfileView User={user}/>
		</div>
		<Footer/>

	</div>
	<div className='right'>


	</div>
</>
  )
}

