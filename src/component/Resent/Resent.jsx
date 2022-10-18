import React from 'react'
import { Link } from 'react-router-dom'

function Resent(props) {
  return (
	<div className='links'>
			<Link style={{ color: 'black', textDecoration: 'none' }} to={'/detailed?recent='}>
				<span className='drivetext'>{props.Text}</span>
			</Link>
		</div>
  )
}

export default Resent