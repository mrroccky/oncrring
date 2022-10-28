import React from 'react'
import { Link } from 'react-router-dom';
import Apply from '../Apply/Apply';
import Loading from '../Loading/Loading';
import ShareThisJob from '../ShareThisJob/ShareThisJob';
import './Detaildedcard.css'

function Detaildedcard(props) {
	  const { JobPost } = props;
    var date=JobPost.date;
    var onlydate =date.split(" ")[0];
  return (
	<>

      <div className='postCard' >
        <div className='tcard'><h1 className='font' >{JobPost ? JobPost.tital : <span> nothing to show  </span>}</h1></div>
        <span className='postDate'>PostDate:{onlydate} by </span>
      <Link style={{ color: 'black', textDecoration: 'none' }} to={'/publisher?name=' + JobPost.publisher_name} >
        <span style={{ color: 'var(--link)'}} className='postBy'>{JobPost.publisher_name}</span>
        </Link>
        <div className='postImg'>{JobPost ? <img src={"https://saynadb.000webhostapp.com/oncrring/uploads/" + JobPost.image} /> : <Loading/>}</div>
        {/* <h2 className='font400'>{JobPost.descreption}</h2> */}
        {JobPost.descreption.split("\n").map(function (descreption) {
            return (
              <>   
                <h2 className='font400'>{descreption}</h2>
              </>
            )
          })}
          <Apply linkcontent={JobPost.applylink}/>
        <ShareThisJob jobdetail={JobPost.descreption}/>
      </div>
     
	</>
  )
}

export default Detaildedcard