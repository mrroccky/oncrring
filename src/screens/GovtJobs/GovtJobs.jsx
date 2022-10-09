import React from 'react';
import Ocd from '../../component/ocd/ocd';
import Govermentjobs from '../../component/onTabsScreens/Governmentjobstab/Governmentjobs';
import Recentpost from '../../component/Recentpost/Recentpost';
import Search from '../../component/Search/Search';
import Menuebuttonst from "../../component/menuebuttonst/menuebuttonst"
import './GovtJobs.css';
function GovtJobs() {


  return (<>


		<div className='left'>
			<Menuebuttonst />
			<Govermentjobs />
			<Search/>
			<Recentpost />
			<Ocd/>
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