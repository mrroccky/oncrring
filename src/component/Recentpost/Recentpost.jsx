import React from 'react'
import { Link } from 'react-router-dom';
import './Recentpost.css';


function Drives(props) {
	return (

		<div className='links'>
			<Link style={{ color: 'black', textDecoration: 'none' }} to={'/detailed?id='}>
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


				<Drives Text="Off Campus Drives 2025 Batch"/>
				<Drives Text="Off Campus Drives 2024 Batch"/>
				<Drives Text="Off Campus Drives 2023 Batch"/>
				<Drives Text="Off Campus Drives 2022 Batch"/>
				<Drives Text="Off Campus Drives 2021 Batch"/>
				<Drives Text="Off Campus Drives 2020 Batch"/>
				<Drives Text="Off Campus Drives 2019 Batch"/>
				<Drives Text="Off Campus Drives 2018 Batch"/>
				<Drives Text="Off Campus Drives 2021 Batch"/>
				<Drives Text="Off Campus Drives 2020 Batch"/>
				<Drives Text="Off Campus Drives 2019 Batch"/>
				<Drives Text="Off Campus Drives 2018 Batch"/>
			

			</div>


		</>
	)
}

export default Recentpost