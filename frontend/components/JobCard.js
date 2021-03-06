import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  makeStyles,
  CardContent,
  Grid,
  CardHeader,
  Avatar,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
import Link from "next/link";
import { Fragment, useState } from "react";
import Modal from './Model'

const useStyles = makeStyles((theme) => ({
  card: {
    display: "inline-block",
    border: "solid",
    borderWidth: "2px",
    borderColor: "#114B5F",
    width: "272px",
  },
  media: {
    height: "125px",
  },
  avatar: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    border: "solid",
    borderWidth: "2px",
    borderColor: "#114B5F",
    borderRadius: "50%",
  },
  caption: {
    color: "#028090",
  },
  name: {
    color: "#114B5F",
  },
  cardHeader: {
    paddingTop: "4px",
    paddingBottom: "4px",
  },
  cardContent: {
    paddingTop: "0",
    paddingBottom: "8px",
    height: "48px",
  },
  cardFooter: {
    borderTop: "solid",
    borderTopWidth: "1px",
    borderTopColor: "#114B5F",
  },
  button: {
    marginLeft: "auto",
  },
  a: {
    color: "#114B5F",
    textDecoration: "none",
  },
}));

const JobCard = ({ detail }) => {
  const classes = useStyles()
  const [state,setState] = useState(false)
  return (
    <Fragment>
      <Card className={classes.card} square>
        <CardActionArea
          onClick={() => setState(true)}
        >
          <CardMedia className={classes.media} image={detail.imagelink} />
          <CardHeader
            avatar={<Avatar className={classes.avatar} src={detail.imagelink} />}
            title={
              <Typography variant="subtitle2" className={classes.name}>
                {detail.name}
              </Typography>
            }
            subheader={
              <Typography variant="caption" className={classes.caption}>
                {detail.experienceyear} Years Expirience
              </Typography>
            }
            className={classes.cardHeader}
          />
          <CardContent className={classes.cardContent}>
            <Typography variant="body2" color="textSecondary" component="p">
              {detail.jobdescription}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.cardFooter}>
          <Button 
            className={classes.button}
            onClick={() => setState(true)}
          >
            <Typography className={classes.a}>
              Starting At <b>{detail.price / 100}$</b>
            </Typography>
          </Button>
        </CardActions>
      </Card>
      <Modal state={state} cb={setState} detail={detail}/>
    </Fragment>
  );
};

export default JobCard;
