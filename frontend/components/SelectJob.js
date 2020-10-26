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
import Link from "next/router";
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
  ["Design", Gesture, ["/categories/design"]],
  ["Writting", Subject, ["/categories/writting"]],
  ["Video", MovieFilter, ["/categories/video"]],
  ["Audio", Audiotrack, ["/categories/audio"]],
  ["Programming", Code, ["/categories/programing"]],
  ["Business", BusinessCenter, ["/categories/business"]],
];

const SelectJob = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Container maxWidth="xl" className={classes.container}>
        <Grid container justify="center" spacing={2}>
          {JobLinks.map(([name, icon, path], index) => (
            <Grid item key={index}>
              <CustomBut 
                href={`/categories/[name]`}
                dynamic={path[0]}
              >
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
