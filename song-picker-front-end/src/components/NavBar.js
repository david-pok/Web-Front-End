import React, { useState } from "react";
import {
  Menu,
  MenuItem,
  Button,
  Toolbar,
  AppBar,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import { Link } from "react-router-dom";
import AudiotrackIcon from "@material-ui/icons/Audiotrack";
import newlogogreen from "../newlogogreen.png";

const useStyles = makeStyles(theme => ({
  appBar: {
    // backgroundColor: "#5B7648",
    // color: "#E2FFCE",
    justifyContent: "space-around"
  },
  menuButton: {
    padding: 0,
    position: "absolute",
    "&:hover": {
      backgroundColor: "none"
    }
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
    margin: "auto",
    marginRight: "1.5%",
    width: 50,
    height: 50
  },
  menuIcon: {
    position: "absolute",
    color: "#000000"
  },
  icon: {
    position: "absolute",
    right: "3rem"
  },
  linkBut: {
    textDecoration: "none"
  },
  menuItems: {
    color: "#ffffff"
    // color: theme.palette.primary
  },
  logo: {
    width: "15%",
    height: "0.01%",
    // flexGrow: 1,
    // textAlign: "center",
    margin: "auto",
    // marginRight: "1.5%",
       [theme.breakpoints.down(1000)]: {
        width: "30%",
        height: "0.08%",
    },
    [theme.breakpoints.down(700)]: {
      width: "50%",
      height: "0.2%",
  },
  }
}));

const NavBar = () => {
  const classes = useStyles();
  // const history = useHistory();

  //used to toggle our drop down menu
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState();
  const recordButtonPosition = event => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(true);
  };
  let closeMenu = () => {
    setMenuOpen(false);
  };

  const logOut = () => {
    // history.push("/");
    localStorage.clear("token");
    localStorage.clear("user_id");
    localStorage.clear("message");
    // setToknd(null);
  };
  return (
    <div>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Button className={classes.menuButton} onClick={recordButtonPosition}>
            <AccountBoxIcon className={classes.menuIcon} fontSize="large" />
          </Button>
          <Menu anchorEl={anchorEl} open={menuOpen} onClose={closeMenu}>
            <Link className={classes.linkBut} to="/dashboard">
              <MenuItem className={classes.menuItems} onClick={closeMenu}>
                {" "}
                Dashboard{" "}
              </MenuItem>
            </Link>
            <Link className={classes.linkBut} to="/search">
              <MenuItem className={classes.menuItems} onClick={closeMenu}>
                {" "}
                Suggestions{" "}
              </MenuItem>
            </Link>
            <Link className={classes.linkBut} to="/edit">
              <MenuItem className={classes.menuItems} onClick={closeMenu}>
                {" "}
                Edit Profile{" "}
              </MenuItem>
            </Link>
            <a
              className={classes.linkBut}
              href="https://github.com/Build-Week-Spotify-1"
            >
              <MenuItem className={classes.menuItems} onClick={closeMenu}>
                {" "}
                GitHub{" "}
              </MenuItem>
            </a>
            <a
              className={classes.linkBut}
              href="https://diddleslip.github.io/Front-End/"
            >
              <MenuItem className={classes.menuItems} onClick={closeMenu}>
                {" "}
                About{" "}
              </MenuItem>
            </a>

            <Link className={classes.linkBut} onClick={logOut} to="/">
              <MenuItem className={classes.menuItems} onClick={closeMenu}>
                {" "}
                Logout{" "}
              </MenuItem>
            </Link>
          </Menu>

          {/* <Typography variant="h4" className={classes.title}>
            SONGIFY
          </Typography> */}

          <img src={newlogogreen} className={classes.logo} />
          <AudiotrackIcon className={classes.icon} fontSize="large" />
          {/* <logo className={classes.icon} /> */}
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default NavBar;
