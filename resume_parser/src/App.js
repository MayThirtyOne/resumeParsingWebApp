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
import { makeStyles } from "@material-ui/core/styles";
import { Alert, AlertTitle } from "@material-ui/lab";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    flexGrow: 1,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function App() {
  const classes = useStyles();
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
      <div
        style={{
          backgroundColor: "#b3f0ff",
        }}
      >
        <Grid
          container
          spacing={3}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: "100vh" }}
        >
          <Grid item xs={8}>
            <Box>
              <Card className={classes.root} variant="outlined">
                <CardContent>
                  <Box textAlign="center">
                    <Typography
                      className={classes.title}
                      color="textSecondary"
                      gutterBottom
                    >
                      Not Authenticated
                    </Typography>
                  </Box>

                  <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    <strong>Please Login To Continue!</strong>
                  </Alert>
                </CardContent>
                <CardContent>
                  <Login />
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </div>
    );
}

export default App;
