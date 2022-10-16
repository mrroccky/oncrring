import React from 'react'
import './ShareThisJob.css'
function ShareThisJob() {
  return (
    <>
   <div className='parant'>
    <div className='sharepalet'>
      <WhatsappButton />
      <ShareOnTeligram />
      <CopyShareLink />
      </div>
    </div>      
    </>
  )
  // <a href="whatsapp://send?text= Please Visit http://ad-test.easygov.co.in/PanAdvertisement"  rel="nofollow noopener" target="_blank" className="share-icon"><img src="/img/share-icon.png" style={{height:'36px'}}/>Share via Whatsapp</a>

}

export default ShareThisJob;


//copy on clickboard button
function CopyShareLink() {
  return (
    <>
      <a onClick={() => Copy()}><img width={30} height={30} className='ShareClipboard' src='Images/clipboard.svg' /></a>
    </>
  )
}
function Copy() {
  var data = "hey there thos is text for copying"
  navigator.clipboard.writeText(data)
  alert(" 🚀🚀🚀Link Copyed to 📋📋 ClipBoard now you can share😎👌")
}


//whatsaap button for web
function WhatsappButton() {
  var waplink = "https://web.whatsapp.com/send?text="
  var jobdetail = "😎🚀🚀🚀🚀🚀"
  var CurrentPath = window.location.href
  var massage = waplink.concat(" ", jobdetail, " ", CurrentPath)
  return (<>
    <a href={massage} ><img width={30} height={30} className='ShareWhatsapp' src='Images/w.png' /></a>
  </>)
}

//share on teligram button

function ShareOnTeligram() {
  var teliLink = "https://telegram.me/share/url?url="
  var JobDetails = "🚀🚀🚀🚀🚀🚀Imageurl"
  var currentPath = window.location.href
  var massage = teliLink.concat(" ", JobDetails, " Apply Now ", currentPath)

  return (
    <>
      <a href={massage}><img width={30} height={30} className='ShareTeligram' src='Images/t.png' /></a>
    </>
  )
}