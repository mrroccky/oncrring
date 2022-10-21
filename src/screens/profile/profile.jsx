import React from 'react'
import Footer from '../../component/Footer/Footer'
import ProfileView from '../../component/ProfileView/ProfileView'

function Profile() {
	return (
		<>
			<div  className='left'>

			<div style={{background:'var(--white)', boxShadow:'var(--box-shadow)', textAlign:'center'}}>
				<ProfileView /></div>
				<Footer/>

			</div>
			<div className='right'>


			</div>
		</>
	)
}

export default Profile