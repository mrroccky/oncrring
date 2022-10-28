
import InterstaialAdbypropeler from '../../Ads/InterstaialAdbypropeler';
import Revenuehistaddsidebanner from '../../Ads/revenuehistaddsidebanner';
import RevenuehitstopbarAdd from '../../Ads/RevenuehitstopbarAdd';
import Footer from '../../component/Footer/Footer';
import Ocd from '../../component/ocd/ocd';
import Interviewtips from '../../component/onTabsScreens/Interviewtipstab/Interviewtips';
import Recentpost from '../../component/Recentpost/Recentpost';
import Search from '../../component/Search/Search';
import './InterviewTips.css';



const InterviewTips = () => {
	return (
		<>
<RevenuehitstopbarAdd/>
		<div className='left'>
			<Interviewtips />
			<Search />
			<Recentpost />
			<Ocd />
			<Footer/>
			<InterstaialAdbypropeler/>
		</div>
		<div className='right'>
			<Recentpost />
			<Search />
			<Ocd />
			<Revenuehistaddsidebanner/>

		</div>



	</>
	)
}


export default InterviewTips;