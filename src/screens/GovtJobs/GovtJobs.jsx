import React from 'react';
import Footer from '../../component/Footer/Footer';
import Ocd from '../../component/ocd/ocd';
import Govermentjobs from '../../component/onTabsScreens/Governmentjobstab/Governmentjobs';
import Recentpost from '../../component/Recentpost/Recentpost';
import Search from '../../component/Search/Search';
import './GovtJobs.css';
function GovtJobs() {


  return (
  <>
		<div className='left'>
			<Search/>
			<Govermentjobs />
			<Recentpost />
			<Ocd/>
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

export default GovtJobs;