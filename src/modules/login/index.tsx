import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100wh",
    height: "100vh",
  },
});

interface LoginProps {}

const Login: React.FunctionComponent<LoginProps> = () => {
  const classes = useStyles();
  return <div className={classes.root}>Login page</div>;
};

export default Login;
