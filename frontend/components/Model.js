import { useEffect, useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { Avatar, Box, Grid, Paper } from "@material-ui/core";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h4">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const Modal = ({ state, cb, detail }) => {
  const handleClose = () => {
    cb(false);
  };

  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={state}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          <b>FPF</b>reelance
        </DialogTitle>
        <DialogContent dividers>
          <Grid container style={{ minWidth: "580px" }}>
            <Grid item xs={4} style={{ display: "flex", justifyContent: "center", alignItems: 'center' }}>
              <Avatar src={detail.imagelink} style={{ width:'150px', height: '150px'}}/>
            </Grid>
            <Grid item xs={8}>
              <div >
                <Typography variant="h6">
                  Name: <span style={{ color: "#028090" }}>{detail.name} </span>
                </Typography>
                <Typography variant="h6">
                  Year of Experience:{" "}
                  <span style={{ color: "#028090" }}>
                    {detail.experienceyear} years{" "}
                  </span>
                </Typography>
                <Typography variant="h6">Educational Background:</Typography>
                <Typography style={{ marginLeft: "3ch", color: "#028090" }}>
                  -{detail.educationbg}
                </Typography>
                <Typography variant="h6">Job Description:</Typography>
                <Typography style={{ marginLeft: "3ch", color: "#028090" }}>
                  -{detail.jobdescription}
                </Typography>
                <Typography style={{ marginLeft: "3ch", color: "#028090" }}>
                  -{detail.workpreview}
                </Typography>
                <Typography variant="h6">Contact:</Typography>
                <Typography style={{ marginLeft: "3ch", color: "#028090" }}>
                  -{detail.contactinfo}
                </Typography>
              </div>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions style={{ backgroundColor: "#A2B3C7" }}>
          <Grid container>
            <Grid
              item
              xs={4}
              justify="center"
              style={{ borderRight: "solid", borderRightColor: "#114B5F" }}
            >
              <Typography variant="h4" style={{ color: "#114B5F" }}>
                <Box style={{ display: "flex", justifyContent: "center" }}>
                  {detail.workday} Days
                </Box>
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography variant="h4" style={{ color: "#114B5F" }}>
                <Box style={{ display: "flex", justifyContent: "center" }}>
                  {detail.price / 100} $
                </Box>
              </Typography>
            </Grid>
          </Grid>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Modal;
