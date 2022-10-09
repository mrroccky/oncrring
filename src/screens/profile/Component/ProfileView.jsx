import './ProfileView.css';
import React from 'react'

function ProfileView() {
  return (
	<>
	<img width={"100%"} style={{width:'60px', border:'1px solid var(--theme)', borderRadius:'50%'}} src='/Images/clogo.jpg' alt="profilePic" />
	<h1 className='font'>Rakesh Bhure</h1>
	<div >
	<i style={{paddingRight:'10px'}} class='fa fa-eye' ><span style={{paddingLeft:'5px'}}>100k</span></i>
	<i style={{paddingRight:'10px'}} class='fa fa-heart' ><span style={{paddingLeft:'5px'}}>10k</span></i>
	<i style={{paddingRight:'10px'}} class='fa fa-share' ><span style={{paddingLeft:'5px'}}>50</span></i>
	</div>
	</>
  )
}

export default ProfileView