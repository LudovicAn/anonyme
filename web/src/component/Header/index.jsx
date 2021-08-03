import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import AuthService from "src/services/AuthService";
import Account from "./Account";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();

  const handleLogout = () => {
    AuthService.clearToken();
    window.location.reload(false);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" elevation={2}>
        <Toolbar variant="dense">
          <Typography variant="h6" className={classes.title}>
            Cars
          </Typography>

          {AuthService.getAccessToken() ? (
            <Button onClick={handleLogout} variant="text">
              Se déconnecter
            </Button>
          ) : (
            <Account />
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
