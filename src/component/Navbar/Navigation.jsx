
import React from 'react'
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';



const Navigation = () => {
	const navigate = useNavigate();
	const gotohome = () => {
		navigate('/');
	}
	return (
		<><nav className='navbar'>
			<Button className='nonbtn' onClick={() => openNav()}>
				<img width={30} height={30} className='menu' src='images/menu.png' />
			</Button>
			<Daraver />
			<button className='nonbtn' onClick={gotohome}>
				<div className='ImgTital'>
					<img className='logoimg' src='images/clogo.jpg' />
					<h4 className='tital'  >Saynaa Jobs</h4>
				</div>
			</button>
			<NavigatorPC />
		</nav>
		</>
	)
}


export default Navigation;
function NavigatorPC() {
	return (
		<>
			<ul className='menue'>
				<li className='mBtn'><Link style={{ color: '#FFF', textDecoration: 'none' }} to="/">Home</Link></li>
				<li className='mBtn'><Link style={{ color: '#FFF', textDecoration: 'none' }} to="/jobs">Upcoming Jobs</Link></li>
				<li className='mBtn'><Link style={{ color: '#FFF', textDecoration: 'none' }} to="/govtjobs">Government Jobs</Link></li>
				<li className='mBtn'><Link style={{ color: '#FFF', textDecoration: 'none' }} to="/topmnc">Top MNC</Link></li>
				<li className='mBtn'><Link style={{ color: "white", textDecoration: 'none' }} to="/interviewtips">Interview Tips</Link></li>
				<li className='mBtn'><Link style={{ color: "white", textDecoration: 'none' }} to="/blog">Blog</Link></li>

			</ul>
		</>
	)
}

function Daraver() {

	return (
		<><div id="mySidenav" class="sidenav">
			<a href="#" class="closebtn" onClick={() => closeNav()}>&times;</a>
			<a href="">Home</a>
			<a href="jobs">Jobs</a>
			<a href="govtjobs">Govtjobs</a>
			<a href="topmnc">Topmnc</a>
			<a href="interviewtips">Interviewtips</a>
			<a href="blog">Blog</a>

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