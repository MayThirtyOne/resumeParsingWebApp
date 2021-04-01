import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import LockOpenIcon from "@material-ui/icons/LockOpen";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function Login() {
  const classes = useStyles();
  const { loginWithRedirect } = useAuth0();

  return (
    <div>
      <Box textAlign="center">
        {" "}
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<LockOpenIcon />}
          onClick={() => loginWithRedirect()}
        >
          Login Now
        </Button>
      </Box>
    </div>
  );
}

export default Login;
