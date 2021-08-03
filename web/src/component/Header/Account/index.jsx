import React, { useState, useEffect } from "react";
import { Button, Popover, TextField } from "@material-ui/core";

import "./style.scss";

import useFetch from "src/services/HookFetch";
import AuthService from "src/services/AuthService";

const Account = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [dataSt, load] = useFetch("/user");
  const [toSend, setToSend] = useState({
    name: "",
  });

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (item) => {
    setToSend({ ...toSend, name: item.target.value });
  };

  const handleConnexion = () => {
    load(toSend, "post");
  };

  useEffect(() => {
    if (dataSt.data.length > 0) {
      AuthService.setAccessToken(Math.random());
      window.location.reload(false);
    }
  }, [dataSt.data]);

  return (
    <div>
      <Button
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        Connexion
      </Button>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <div className="main_connexion">
          <TextField
            label="Login"
            variant="filled"
            size="small"
            className="block-field"
            value={toSend.name}
            onChange={handleChange}
          />
          {/* <TextField
            label="Mot de passe"
            type="password"
            variant="filled"
            size="small"
            className="block-field"
            disabled
          /> */}
          <Button
            color="primary"
            variant="contained"
            disableElevation
            onClick={handleConnexion}
          >
            Connexion
          </Button>
        </div>
      </Popover>
    </div>
  );
};

export default Account;
