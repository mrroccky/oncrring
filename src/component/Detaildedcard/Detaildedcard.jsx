import React from 'react'
import Loading from '../Loading/Loading';
import Socialbuttons from '../Socialbuttons/Socialbuttons';
import './Detaildedcard.css'

function Detaildedcard(props) {
	  const { JobPost } = props;
  return (
	<>

      <div className='postCard' >
        <div className='tcard'><h1 className='postTital' >{JobPost ? JobPost.tital : <span> error </span>}</h1></div>
        <span className='postDate'>{JobPost.date} by </span>
        <span className='postBy'>{JobPost.publisher_name}</span>
        <div className='postImg'>{JobPost ? <img src={"/oncrring/uploads/" + JobPost.image} /> : <Loading/>}</div>
        <h2 className='postDesc'>{JobPost.descreption}</h2>
        <Socialbuttons />
      </div>
     
	</>
  )
}

export default Detaildedcard