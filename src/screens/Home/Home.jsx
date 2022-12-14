import React, {  useEffect } from 'react';
import './Home.css';
import Jobcard from '../../component/Jobcard/Jobcard';
import Ocd from '../../component/ocd/ocd';
import { useState } from 'react';
import Loading from '../../component/Loading/Loading';
import Recentpost from '../../component/Recentpost/Recentpost';
import Search from '../../component/Search/Search';
import Footer from '../../component/Footer/Footer';
import Revenuehistaddsidebanner from '../../Ads/revenuehistaddsidebanner';
import RevenuehitstopbarAdd from '../../Ads/RevenuehitstopbarAdd';

function Home() {
	


	let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    // headers.append('Authorization', 'Basic ' + base64.encode(username + ":" +  password));
    headers.append('Origin','http://localhost:3000');

	const [JobPost, setProducrs] = useState([]);
	useEffect(() => {
	 fetch(process.env.REACT_APP_JOBS_ENDPOINT, {
        method: 'GET',
    mode: 'cors', 
    cache: 'no-cache', 
    }).then(function(response){
		 response.json().then(function(data) {
			 setProducrs(data)
		 });
	 }).catch(function(error) {
		 console.log('Fetch Error:', error);
	 });
	}, [setProducrs]);
	// var element = document.getElementById("scroll");
	// element.scrollIntoView(false);
	return (
		< >
		<div className='scroll'>
			<RevenuehitstopbarAdd/>
			<div className='left'>
				<Search />
				<div className='cardocd'>
					<h1 className='ocd'>HOME</h1>
					{!JobPost ? <Loading /> : JobPost.map(JobPost => <Jobcard key={JobPost.id} JobPost={JobPost}/>)}
					<Recentpost />
					<Ocd />
					<Footer/>
					<div className='LoadMore'>
					</div>
				</div>
			</div>
			</div>
			<div className='right'>
				<Recentpost />
				<Search />
				<Ocd />
				<Revenuehistaddsidebanner/>
			</div>
				{/* <div><Footer /></div> */}

		</>
	);
}

export default Home;