import { Fragment } from "react";
import {
  AppBar,
  Container,
  InputBase,
  makeStyles,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
  fade
} from "@material-ui/core";
import { Search } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#ffffff",
    flexGrow: 1,
  },
  toolbar: {
    minHeight: 64,
  },
  title: {
    color: "black",
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: theme.palette.secondary.main,
    backgroundColor: theme.palette.common.white,
    '&:hover': {
      backgroundColor: fade(theme.palette.common.black, 0.05),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'black',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
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
  return (
    <Fragment>
      <HideOnScroll {...props}>
        <AppBar className={classes.root}>
          <Container maxWidth="lg">
            <Toolbar className={classes.toolbar}>
              <Typography variant="h6" className={classes.title}>
                <b>FPF</b>reelance
              </Typography>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <Search color='secondary' />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ "aria-label": "search" }}
                />
              </div>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      <Toolbar className={classes.toolbar} />
    </Fragment>
  );
};

export default Navbar;
