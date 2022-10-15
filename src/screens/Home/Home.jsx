import React, {  useEffect } from 'react';
import './Home.css';
import Jobcard from '../../component/Jobcard/Jobcard';
import Ocd from '../../component/ocd/ocd';
import { useState } from 'react';
import Loading from '../../component/Loading/Loading';
import Recentpost from '../../component/Recentpost/Recentpost';
import Search from '../../component/Search/Search';
import Menuebuttonst from '../../component/menuebuttonst/menuebuttonst';
import axios from 'axios';
import { Button } from 'react-bootstrap';

// https://www.stechies.com/
function Home() {


	const [JobPost, setProducrs] = useState([]);
	useEffect(() => {
	 fetch('https://saynadb.000webhostapp.com/oncrring/jobs.php').then(function(response){
		 response.json().then(function(data) {
			 console.log(data);
			 setProducrs(data)
		 });
	 }).catch(function(error) {
		 console.log('Fetch Error:', error);
	 });
	}, [setProducrs]);
 
	


	return (
		<>
			<div className='left'>
				<Menuebuttonst />
				<Search />
				<div className='cardocd'>
					<h1 className='ocd'>HOME</h1>
					{!JobPost ? <Loading /> : JobPost.map(JobPost => <Jobcard key={JobPost.id} JobPost={JobPost}/>)}
					<Recentpost />
					<Ocd />
					<div className='LoadMore'>
					</div>
				</div>
				{/* <div className='cardocd'>
					<div className='card'>
						<h1 className='ocd'>Home Best Jobs</h1>
					</div>
					{!JobPost ? <Loading /> : JobPost.map(JobPost => <Jobcard key={JobPost.id} JobPost={JobPost} />)}
					<Recentpost />
					<Ocd />
					<div className='LoadMore'>
				</div>

				</div> */}
			</div>
			<div className='right'>
				<Recentpost />
				<Search />
				<Ocd />

			</div>
				{/* <div><Footer /></div> */}

		</>
	);
}

export default Home;