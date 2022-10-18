import React from 'react'
import { Link } from 'react-router-dom';
import Resent from '../Resent/Resent';
import './Recentpost.css';


function Drives(props) {
	return (

		<div className='links'>
			<Link style={{ color: 'black', textDecoration: 'none' }} to={'/detailed?recent='}>
				<span className='recenttext'>{props.Text}</span>
			</Link>
		</div>

	)

}
function Recentpost() {
	return (
		<>
			<div className='cardocd'>
				<div className='card'>
					<h1 className='ocd'>Recent Posts</h1>
				</div>
				<Resent Text="recent post "/>
				<Resent Text="recent post "/>
				<Resent Text="recent post "/>
				<Resent Text="recent post "/>
				<Resent Text="recent post "/>
				<Resent Text="recent post "/>
			</div>


		</>
	)
}

export default Recentpost