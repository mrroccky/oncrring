
import React from 'react';
import Ocd from '../../component/ocd/ocd';
import Topmnc from '../../component/onTabsScreens/TopMNCtab/Topmnc';
import Recentpost from '../../component/Recentpost/Recentpost';
import Search from '../../component/Search/Search';
function TopMNC() {
	
	return (
		<>
		<div className='left'>
			<Topmnc />
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
	);
  }
  
  export default TopMNC;










