import React from 'react'
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';
import ShareThisJob from '../ShareThisJob/ShareThisJob';
import './Detaildedcard.css'

function Detaildedcard(props) {
	  const { JobPost } = props;
  return (
	<>

      <div className='postCard' >
        <div className='tcard'><h1 className='font' >{JobPost ? JobPost.tital : <span> nothing to show  </span>}</h1></div>
        <span className='postDate'>{JobPost.date} by </span>
      <Link style={{ color: 'black', textDecoration: 'none' }} to={'/publisher?name=' + JobPost.publisher_name} >
        <span style={{ color: 'var(--link)'}} className='postBy'>{JobPost.publisher_name}</span>
        </Link>
        <div className='postImg'>{JobPost ? <img src={"https://saynadb.000webhostapp.com/oncrring/uploads/" + JobPost.image} /> : <Loading/>}</div>
        <h2 className='font400'>{JobPost.descreption}</h2>
        <ShareThisJob jobdetail="this is detail"/>
      </div>
     
	</>
  )
}

export default Detaildedcard