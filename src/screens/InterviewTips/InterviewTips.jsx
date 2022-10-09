
import React, { Component } from 'react'
import Ocd from '../../component/ocd/ocd';
import Interviewtips from '../../component/onTabsScreens/Interviewtipstab/Interviewtips';
import Recentpost from '../../component/Recentpost/Recentpost';
import Search from '../../component/Search/Search';
import Menuebuttonst from "../../component/menuebuttonst/menuebuttonst"
import './InterviewTips.css';



const InterviewTips = () => {
	return (
		<>


		<div className='left'>
			<Menuebuttonst />
			<Interviewtips />
			<Search />
			<Recentpost />
			<Ocd />
		</div>
		<div className='right'>
			<Recentpost />
			<Search />
			<Ocd />

		</div>



	</>
	)
}


export default InterviewTips;