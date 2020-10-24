import { Fragment } from "react";
import {
  makeStyles,
  Container,
  Typography,
  Icon,
  Grid,
} from "@material-ui/core";
import CustomBut from "./CustomBut";
import {
  Audiotrack,
  BusinessCenter,
  Code,
  Gesture,
  MovieFilter,
  Subject,
} from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    marginTop: "48px",
  },
  paper: {
    width: theme.spacing(16),
    height: theme.spacing(16),
  },
}));

const JobLinks = [
  //name, icon, paths
  ["Design", Gesture, ["/"]],
  ["Writting", Subject, ["/"]],
  ["Video", MovieFilter, ["/"]],
  ["Audio", Audiotrack, ["/"]],
  ["Programming", Code, ["/"]],
  ["Business", BusinessCenter, ["/"]],
];

const SelectJob = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Container maxWidth="xl" className={classes.container}>
        <Grid container justify="center" spacing={2}>
          {JobLinks.map(([name, icon, path], index) => (
            <Grid item key={index}>
              <CustomBut href={path}>
                <Typography>
                  <Icon component={icon} fontSize="large" />
                  <br />
                  {name}
                </Typography>
              </CustomBut>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Fragment>
  );
};
export default SelectJob;
