import React from 'react'
import './ShareThisJob.css'
function ShareThisJob(props) {
  var detais =props.jobdetail
  return (
    <>
   <div className='parant'>
    <div className='sharepalet'>
      <WhatsappButton jobdetail={detais}/>
      <ShareOnTeligram jobdetail={detais}/>
      <CopyShareLink jobdetail={detais}/>
      </div>
    </div>      
    </>
  )
  // <a href="whatsapp://send?text= Please Visit http://ad-test.easygov.co.in/PanAdvertisement"  rel="nofollow noopener" target="_blank" className="share-icon"><img src="/img/share-icon.png" style={{height:'36px'}}/>Share via Whatsapp</a>

}

export default ShareThisJob;


//!copy on clickboard button
function CopyShareLink(props) {
  var detais =props.jobdetail
  return (
    <>
      <a onClick={() => Copy(detais)}><img width={30} height={30} className='ShareClipboard' src='images/clipboard.svg' /></a>
    </>
  )
}
function Copy(detais ) {
  
  var data = detais
  navigator.clipboard.writeText(data)
  alert(" 🚀🚀🚀Link Copyed to 📋📋 ClipBoard now you can share😎👌")
}

//!whatsaap button for web
function WhatsappButton(props) {
  var waplink = "https://web.whatsapp.com/send?text="
  var jobdetail = props.jobdetail
  var CurrentPath = window.location.href
  var massage = waplink.concat(" ", jobdetail, " ", CurrentPath)
  return (<>
    <a href={massage} ><img width={30} height={30} className='ShareWhatsapp' src='images/w.png' /></a>
  </>)
}

//!share on teligram button
function ShareOnTeligram(props) {
  var teliLink = "https://telegram.me/share/url?url="
  var JobDetails =  props.jobdetail
  var currentPath = window.location.href
  var massage = teliLink.concat(" ", JobDetails, " Apply Now ", currentPath)
  return (
    <>
      <a href={massage}><img width={30} height={30} className='ShareTeligram' src='images/t.png' /></a>
    </>
  )
}