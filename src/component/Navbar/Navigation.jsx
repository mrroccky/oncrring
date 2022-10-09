
import React from 'react'
import { Link, useNavigate} from 'react-router-dom';
import './Navbar.css';






const Navigation = () => {
	const navigate = useNavigate();
	const gotohome = () => {
		navigate('/');
	} 
	return (
		<><nav   className='navbar'>
			<button className='nonbtn' onClick={gotohome}>
			<div className='ImgTital'>
				<img className='logoimg' src='/Images/clogo.jpg' />
				<h4 className='tital'  >oncrring Jobs</h4>
			</div>
			</button>

			{/* <div className='showm'><Menuebuttonst /></div> */} */
			<ul className='menue'>
				<li className='mBtn'><Link style={{ color: '#FFF', textDecoration: 'none' }} to="/">Home</Link></li>
				<li className='mBtn'><Link style={{ color: '#FFF', textDecoration: 'none' }} to="/jobs">Jobs</Link></li>
				<li className='mBtn'><Link style={{ color: '#FFF', textDecoration: 'none' }} to="/govtjobs">Government Jobs</Link></li>
				<li className='mBtn'><Link style={{ color: '#FFF', textDecoration: 'none' }} to="/topmnc">Top MNC</Link></li>
				<li className='mBtn'><Link style={{ color: "white", textDecoration: 'none' }} to="/interviewtips">Interview Tips</Link></li>
			</ul>
			
			
			
		</nav>
		</>
	)
}

export default Navigation;