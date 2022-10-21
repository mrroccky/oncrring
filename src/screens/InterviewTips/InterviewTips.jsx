
import Footer from '../../component/Footer/Footer';
import Ocd from '../../component/ocd/ocd';
import Interviewtips from '../../component/onTabsScreens/Interviewtipstab/Interviewtips';
import Recentpost from '../../component/Recentpost/Recentpost';
import Search from '../../component/Search/Search';
import './InterviewTips.css';



const InterviewTips = () => {
	return (
		<>


		<div className='left'>
			<Interviewtips />
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


export default InterviewTips;