import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Detaildedcard from "../../component/Detaildedcard/Detaildedcard";
import Loading from "../../component/Loading/Loading";
import Ocd from "../../component/ocd/ocd";
import Recentpost from "../../component/Recentpost/Recentpost";
import Search from "../../component/Search/Search";
import Menuebuttonst from "../../component/menuebuttonst/menuebuttonst";
import './Detailed.css';
import Comment from "../../component/Comment/Comment";


function Detailed() {
	const location = useLocation();
	const params = new URLSearchParams(location.search);
	var id = params.get("id");

	const [JobPost, setJob] = useState([]);
	useEffect(() => {

		fetch('/oncrring/getbyid.php?id=' + id).then(responce => {
			return responce.json();
		}).then(JobPost => {
			setJob(JobPost);
			console.log(JobPost)
		})
	}, [id]);
	return (
	
	
		<>
		<div className='left'>
		<Menuebuttonst />
			<Search />
			<div className='cardocd'>
				<div className='card'>
					<h1 className='ocd'>DetailedCard</h1>
				</div>
				{!JobPost ? <Loading /> : JobPost.map(JobPost => <Detaildedcard key={JobPost.id} JobPost={JobPost} />)}
			
			</div>
			<alert />
			<hr />
			<Comment />
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