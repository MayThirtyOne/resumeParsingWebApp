
import Login from "../auth/Login";
import LogOut from "../auth/LogOut";
import { useAuth0 } from "@auth0/auth0-react";

function MyProfileContent() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (isAuthenticated)
    return (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
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

export default MyProfileContent;
