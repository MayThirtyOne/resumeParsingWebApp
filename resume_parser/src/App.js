
import './App.css';
import UploadResume from "./components/UploadResume";
import EditResume from "./components/EditResume";
import SearchJobs from "./components/SearchJobs";
import MyApplications from "./components/MyApplications";
import MyProfile from "./components/MyProfile";
import MySettings from "./components/MySettings";
import LogOut from "./components/LogOut";
import HomePage from "./components/HomePage";

import {BrowserRouter as Router, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      
    <div>
    <Route path = "/" exact component = {HomePage}/>
    <Route path = "/upload" component = {UploadResume}/>
    <Route path = "/edit" component = {EditResume}/>
    <Route path = "/search" component = {SearchJobs}/>
    <Route path = "/myapplications" component = {MyApplications}/>
    <Route path = "/profile" component = {MyProfile}/>
    <Route path = "/settings" component = {MySettings}/>
    <Route path = "/logout" component = {LogOut}/>
    </div>
    
    </Router>
    
  );
}

export default App;
