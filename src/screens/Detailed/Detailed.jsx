import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Detaildedcard from "../../component/Detaildedcard/Detaildedcard";
import Loading from "../../component/Loading/Loading";
import Ocd from "../../component/ocd/ocd";
import Recentpost from "../../component/Recentpost/Recentpost";
import Search from "../../component/Search/Search";
import './Detailed.css';
import Comment from "../../component/Comment/Comment";
import Footer from "../../component/Footer/Footer";


function Detailed() {
	const location = useLocation();
	const params = new URLSearchParams(location.search);
	var links = params.get("links");
	var ocd =params.get("ocd");
	var recent=params.get("recent");
	
	const [JobPost, setJob] = useState([]);
	useEffect(() => {
	
			fetch('https://saynadb.000webhostapp.com/oncrring/getbylink.php?links='+ links).then(function(response){
				response.json().then(function(data) {
					setJob(data)
				});
			}).catch(function(error) {
				console.log('Fetch Error:', error);
			});
	}, [setJob]);
	return (
	
	
		<>
		<div className='left'>
			<Search />
			<h1>{JobPost.id}</h1>
			<div className='cardocd'>
				<div className='card'>
					<h1 className='ocd'>DetailedCard</h1>
				</div>
				{!JobPost ? <Loading /> : JobPost.map(JobPost => <Detaildedcard key={JobPost.id} JobPost={JobPost} />)}
			
			</div>
			<alert />
			<Footer/>

			{/* <hr /> */}
			{/* <Comment /> */}
		</div>
		<div className='right'>
			<Recentpost />
			<Search />
			<Ocd />
		</div>
		{/* <div><Footer /></div> */}
	</>
	
	 )
}

export default Detailed