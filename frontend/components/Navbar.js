import { Fragment, useEffect, useState } from "react";
import {
  AppBar,
  Container,
  InputBase,
  makeStyles,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
  fade,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { useRouter } from "next/router";
import Link from "next/link";
import CateBar from "./CateBar";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.secondary.main,
    backgroundColor: "#ffffff",
    flexGrow: 1,
  },
  toolbar: {
    minHeight: 64,
    padding: 0,
  },
  catebar: {
    minHeight: 40,
  },
  title: {
    color: "black",
    flexGrow: 1,
  },
  border: {
    borderBottomStyle: "solid",
    borderBottomWidth: "1px",
    borderBottomColor: fade(theme.palette.common.black, 0.2),
  },
  a: {
    color: theme.palette.common.black,
    textDecoration: "none",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: theme.palette.secondary.main,
    backgroundColor: theme.palette.common.white,
    "&:hover": {
      backgroundColor: fade(theme.palette.common.black, 0.05),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "black",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const HideOnScroll = ({ children, window }) => {
  const trigger = useScrollTrigger({ target: window ? window() : undefined });
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const Navbar = (props) => {
  const classes = useStyles();
  const router = useRouter();
  const [value, setValue] = useState("");
  const handleKey = (e) => {
    if (e.keyCode == 13) {
      router.push(`/search/${value}`)
    }
  }
  return (
    <Fragment>
      {/* <HideOnScroll {...props}> */}
      <AppBar className={classes.root} position="static">
        <div className={classes.border}>
          <Container maxWidth="lg">
            <Toolbar className={classes.toolbar}>
              <Typography variant="h6" className={classes.title}>
                <Link href="/">
                  <a className={classes.a}>
                    <b>FPF</b>reelance
                  </a>
                </Link>
              </Typography>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <Search color="secondary" />
                </div>
                <InputBase
                  placeholder="Search…"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  onKeyDown={handleKey}
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ "aria-label": "search" }}
                />
              </div>
            </Toolbar>
          </Container>
        </div>
        {router.pathname !== "/" && <CateBar />}
      </AppBar>
      {/* </HideOnScroll> */}
    </Fragment>
  );
};

export default Navbar;
