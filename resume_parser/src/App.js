import "./App.css";
import UploadResume from "./components/UploadResume";
import EditResume from "./components/EditResume";
import SearchJobs from "./components/SearchJobs";
import MyApplications from "./components/MyApplications";
import MyProfile from "./components/MyProfile";
import MySettings from "./components/MySettings";
import HomePage from "./components/HomePage";
import Login from "./components/auth/Login";
import LogOut from "./components/auth/LogOut";
import { useAuth0 } from "@auth0/auth0-react";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (isAuthenticated)
    return (
      <Router>
        <div>
          <Route path="/" exact component={HomePage} />
          <Route path="/upload" component={UploadResume} />
          <Route path="/edit" component={EditResume} />
          <Route path="/search" component={SearchJobs} />
          <Route path="/myapplications" component={MyApplications} />
          <Route path="/profile" component={MyProfile} />
          <Route path="/settings" component={MySettings} />
          <Route path="/logout" component={LogOut} />
        </div>
      </Router>
    );
  else
    return (
      <div>
        <h1>Profile Contents here!</h1>
        <Login />
        <LogOut />
      </div>
    );
}

export default App;
