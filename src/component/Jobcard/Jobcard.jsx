import React from 'react'
import './Jobcard.css';
import Loading from '../Loading/Loading';
import { Link } from 'react-router-dom'
function Jobcard(props) {
  const { JobPost } = props;
  var date=JobPost.date;
    var onlydate =date.split(" ")[0];
  return (
    

    // <Jobcard key={JobPost.id} JobPost={JobPost} />
    <>
      <Link style={{ color: 'black', textDecoration: 'none' }} to={'/detailed?links=' + JobPost.links} >
        <div className='postCard' >
          {/* <h1>{JobPost.id}</h1> */}
          <span className='font100' style={{marginLeft:'20px'}}>PostDate:{onlydate} by </span>
          <span className='font100' style={{ color: 'var(--link)'}}>{JobPost.publisher_name}</span>
          <div className='postImg'>{JobPost ? <img src={"https://saynadb.000webhostapp.com/oncrring/uploads/" + JobPost.image} /> : <Loading />}</div>
          <div className='tcard'><h1 className='font' >{JobPost ? JobPost.tital : <span> error </span>}</h1></div>
          
          {/* {JobPost.descreption.split("\n").map(function (descreption) {
            return (
              <>   
                <h2 className='font400' style={{"maxLines":'2' ,"text-overflow": "ellipsis","overflow": "hidden","display": "-webkit-box", "max-height":"62px"}}>{descreption}</h2>
              </>
            )
          })} */}
        </div>
      </Link>

    </>

  )
}

export default Jobcard    