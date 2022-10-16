import './publisher.css';
import React from 'react'
import ProfileView from '../../component/ProfileView/ProfileView'

export default function Publisher() {
	var link=window.location.href;
	var user= link.split("=")[1];
  return (
	<>
	<div  className='left'>
	<div style={{background:'var(--white)', boxShadow:'var(--box-shadow)', textAlign:'center'}}>
		<ProfileView User={user}/>
		</div>

	</div>
	<div className='right'>


	</div>
</>
  )
}

