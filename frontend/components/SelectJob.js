import { 
  Button,
  makeStyles,
  Container,
  Typography,
  Icon,
 } from "@material-ui/core";
import { Fragment } from "react";
import CustomBut from './CustomBut'
import { Audiotrack, BusinessCenter, Code, Gesture, MovieFilter, Subject } from '@material-ui/icons'
const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '48px'
  },
  papergroup: {
    display: 'flex',
    justifyContent: 'center',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

const JobLinks = [
  //name, icon, paths
  ['Design', Gesture, ['/']],
  ['Writting', Subject, ['/']],
  ['Video', MovieFilter, ['/']],
  ['Audio', Audiotrack, ['/']],
  ['Programming', Code, ['/']],
  ['Business', BusinessCenter, ['/']],
]

const SelectJob = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Container maxWidth="xl" className={classes.container}>
        <div className={classes.papergroup}>
          {JobLinks.map(([name, icon, path]) => (
            <CustomBut href={path}>
              <Typography>
                <Icon component={icon} fontSize='large' /><br/>
                {name}
              </Typography>
            </CustomBut>
          ))}
        </div>
      </Container>
    </Fragment>
  );
};
export default SelectJob;
