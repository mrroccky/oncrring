import React from 'react'
import Recentpost from '../../component/Recentpost/Recentpost'
import Search from '../../component/Search/Search';
import Ocd from '../../component/ocd/ocd'
import Jobstab from '../../component/onTabsScreens/Jobstab/Jobstab';
import Footer from '../../component/Footer/Footer';
function Jobs() {
  return (
	<>
		<div className='left'>
			<Jobstab />
			<Search />
			<Recentpost />
			<Ocd />
			<Footer/>

		</div>
		<div className='right'>
			<Recentpost />
			<Search />
			<Ocd />

		</div>



	</>
  )
}



export default Jobs
