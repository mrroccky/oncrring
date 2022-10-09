

import React from "react";
import { BrowserRouter as Router , Routes, Route, Link } from "react-router-dom";
import Home from './screens/Home/Home';
import GovtJobs from './screens/GovtJobs/GovtJobs';
import Navigation from './component/Navbar/Navigation';
import './App.css';
import TopMNC from "./screens/TopMNC/TopMNC";
import InterviewTips from "./screens/InterviewTips/InterviewTips";
import Jobs from "./screens/Jobs/Jobs";
import Detailed from "./screens/Detailed/Detailed";
import Profile from "./screens/profile/profile";
import Horeku from "./screens/horeku";



const App =() =>{
  return (
    <>
    
    <Router>
    
     <Navigation />
      {/* <a href="/Product">About</a> */}
        <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/horeku" element={<Horeku/>} />
        <Route exact path="/jobs" element={<Jobs/>} />
        <Route exact path="/profile" element={<Profile/>} />
        <Route exact path="/topmnc" element={<TopMNC/>} />
        <Route exact path="/govtjobs" element={<GovtJobs/>} />
        <Route exact path="/interviewtips" element={<InterviewTips/>} />

        {/* when we click on any jop well pass id then load that id data from db in Detailed screen */}
        <Route exact path="/detailed" element={<Detailed/>} />
        {/* interview tips */}
        </Routes>
    </Router></>
    

  );
}

export default App;
