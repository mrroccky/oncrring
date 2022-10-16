import React from 'react'
import ProfileView from '../../component/ProfileView/ProfileView'

function Profile() {
	return (
		<>
			<div  className='left'>

			<div style={{background:'var(--white)', boxShadow:'var(--box-shadow)', textAlign:'center'}}>
				<ProfileView /></div>

			</div>
			<div className='right'>


			</div>
		</>
	)
}

export default Profile