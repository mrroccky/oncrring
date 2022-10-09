import React from 'react'
import { Link } from 'react-router-dom'
import './MMenue.css';

function MMenue() {
  return (
	<ul className='mmenue'>
	<li className='mobelimBtn'><Link  className='mobelimLink' style={{ color: 'black', textDecoration: 'none' }} to="/">Home</Link></li>
	<li className='mobelimBtn'><Link  className='mobelimLink' style={{ color: 'black', textDecoration: 'none' }} to="/jobs">Jobs</Link></li>
	<li className='mobelimBtn'><Link  className='mobelimLink' style={{ color: 'black', textDecoration: 'none' }} to="/govtjobs">Government Jobs</Link></li>
	<li className='mobelimBtn'><Link   className='mobelimLink' style={{ color: 'black', textDecoration: 'none' }} to="/topmnc">Top MNC</Link></li>
	<li className='mobelimBtn'><Link  className='mobelimLink' style={{ color: "black", textDecoration: 'none' }} to="/interviewtips">Interview Tips</Link></li>
</ul>
  )
}

export default MMenue