

import React from "react";
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import Home from './screens/Home/Home';
import GovtJobs from './screens/GovtJobs/GovtJobs';
import Navigation from './component/Navbar/Navigation';
import './App.css';
import TopMNC from "./screens/TopMNC/TopMNC";
import InterviewTips from "./screens/InterviewTips/InterviewTips";
import Upcoming from "./screens/Jobs/Upcoming";
import Detailed from "./screens/Detailed/Detailed";
import Profile from "./screens/profile/profile";
import Test from "./Test/Test";
import Publisher from "./screens/Publishrer/Publisher";
import Blog from "./Blog/Blog";



const App =() =>{
  return (
    <>
    
    <Router>
    
     <Navigation />
      {/* <a href="/Product">About</a> */}
        <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/test" element={<Test/>} />
        <Route exact path="/jobs" element={<Upcoming/>} />
        <Route exact path="/profile" element={<Profile/>} /> //user profile
        <Route exact path="/publisher" element={<Publisher/>} />//jobs publisher
        <Route exact path="/topmnc" element={<TopMNC/>} />
        <Route exact path="/govtjobs" element={<GovtJobs/>} />
        <Route exact path="/interviewtips" element={<InterviewTips/>} />
        <Route exact path="/blog" element={<Blog/>} />



        {/* when we click on any jop well pass id then load that id data from db in Detailed screen */}
        <Route exact path="/detailed" element={<Detailed/>} />
        {/* http://localhost:3000/?link */}
        {/* interview tips */}
        </Routes>
    </Router></>
    

  );
}

export default App;
