import { Fragment } from "react";
import {
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import Navbar from "../components/Navbar";
import SelectJob from '../components/SelectJob'

const useStyles = makeStyles((theme) => ({
  paper: {
    paddingTop: "150px",
    paddingBottom: "150px",
    textAlign: "center",
    backgroundColor: "#ededed",
  },
}));

const Index = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Navbar />
      <Grid container>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Container maxWidth="lg">
              <Typography variant="h1">
                Find your <b>perfect</b> freelance
              </Typography>
              <Typography variant="h2">
                for your <b>perfect</b> work
              </Typography>
            </Container>
            <SelectJob />
          </Paper>
        </Grid>
      </Grid>
    </Fragment>
  );
};
export default Index;
