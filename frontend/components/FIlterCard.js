import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  InputAdornment,
  makeStyles,
  MenuItem,
  OutlinedInput,
  Select,
  Slider,
  Typography,
} from "@material-ui/core";
import { Fragment, useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    maxWidth: "9ch",
  },
  budget: {
    display: "flex",
    flexDirection: "row",
  },
  checkboxlabel: {
    fontSize: "0.8rem",
    color: "#114B5F",
  },
  button: {
    color: "#F45B69",
    borderColor: "#F45B69",
  },
  search: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: 'flex-end'
  },
}));

const FilterCard = ({cb}) => {
  const classes = useStyles();
  const [value, setValue] = useState([0, 10]);
  const [minCost, setMinCost] = useState(undefined);
  const [maxCost, setMaxCost] = useState(undefined);
  const [delTime, setDelTime] = useState(365);
  const [check, setCheck] = useState({
    Under: false,
    Tech: false,
    BA: false,
    MA: false,
    PHD: false,
    Any: true,
  });
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleCheck = (event) => {
    if (event.target.name === "Any" && event.target.checked ) {
      setCheck({
        Under: false,
        Tech: false,
        BA: false,
        MA: false,
        PHD: false,
        Any: true,
      });
    } else {
      setCheck({ ...check, [event.target.name]: event.target.checked, Any: false });
    }
  };
  const handleDelivery = (event) => {
    setDelTime(event.target.value);
  };
  const onSubmit = () => {
    const filterdata =  {
      minExp : value[0],
      maxExp : value[1],
      minCost : (minCost === undefined) ? 0 : minCost,
      maxCost : (maxCost === undefined) ? 1000000 : maxCost,
      delTime : delTime,
      bg : check
    }
    cb(filterdata)
  }
  return (
    <Fragment>
      <Card>
        <CardHeader title="Filter" />
        <CardContent>
          <Grid container>
            <Grid item xs={8}>
              <Typography gutterBottom>YEAR OF EXPIRIENCE</Typography>
            </Grid>
            <Grid item xs={4} className={classes.search}>
              <Typography variant='caption'>{value[0]}-{value[1]}</Typography>
            </Grid>
          </Grid>
          <Slider
            value={value}
            onChange={handleChange}
            valueLabelDisplay="off"
            getAriaValueText={() => `${value}`}
            min={0}
            max={10}
            step={1}
          />
          <Typography gutterBottom>BUDGET</Typography>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item xs={6}>
              <FormControlLabel
                label={
                  <Typography style={{ marginRight: "1ch" }}>Min.</Typography>
                }
                labelPlacement="start"
                control={
                  <FormControl variant="outlined" size="small">
                    <OutlinedInput
                      id="min-budget"
                      onChange={(e) => setMinCost(e.target.value)}
                      value={minCost}
                      endAdornment={
                        <InputAdornment position="end">$</InputAdornment>
                      }
                    />
                  </FormControl>
                }
              />
            </Grid>
            <Grid item xs={6}>
              <FormControlLabel
                label={
                  <Typography style={{ marginRight: "1ch" }}>Max.</Typography>
                }
                labelPlacement="start"
                control={
                  <FormControl variant="outlined" size="small">
                    <OutlinedInput
                      id="max-budget"
                      value={maxCost}
                      onChange={(e) => setMaxCost(e.target.value)}
                      endAdornment={
                        <InputAdornment position="end">$</InputAdornment>
                      }
                    />
                  </FormControl>
                }
              />
            </Grid>
          </Grid>
          <Typography gutterBottom>EDUCATIONAL BACKGROUND</Typography>
          <FormGroup style={{ marginLeft: "2px" }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={check.Under}
                  onChange={handleCheck}
                  name="Under"
                  style={{ paddingBottom: "4px", paddingTop: "4px" }}
                />
              }
              label={
                <Typography className={classes.checkboxlabel}>
                  UNDERGRADUATE
                </Typography>
              }
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={check.Tech}
                  onChange={handleCheck}
                  name="Tech"
                  style={{ paddingBottom: "4px", paddingTop: "4px" }}
                />
              }
              label={
                <Typography className={classes.checkboxlabel}>
                  TECHNICAL COLLEGE
                </Typography>
              }
            />
            <FormGroup row>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={check.BA}
                    onChange={handleCheck}
                    name="BA"
                    style={{ paddingBottom: "4px", paddingTop: "4px" }}
                  />
                }
                label={
                  <Typography className={classes.checkboxlabel}>
                    B.A.
                  </Typography>
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={check.MA}
                    onChange={handleCheck}
                    name="MA"
                    style={{ paddingBottom: "4px", paddingTop: "4px" }}
                  />
                }
                label={
                  <Typography className={classes.checkboxlabel}>
                    M.A.
                  </Typography>
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={check.PHD}
                    onChange={handleCheck}
                    name="PHD"
                    style={{ paddingBottom: "4px", paddingTop: "4px" }}
                  />
                }
                label={
                  <Typography className={classes.checkboxlabel}>
                    PH.D.
                  </Typography>
                }
              />
            </FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={check.Any}
                  onChange={handleCheck}
                  name="Any"
                  style={{ paddingBottom: "4px", paddingTop: "4px" }}
                />
              }
              label={
                <Typography className={classes.checkboxlabel}>
                  ANY EDUCATIONAL BACKGROUND
                </Typography>
              }
            />
          </FormGroup>
          <Grid container spacing={2}>
            <Grid item xs={7}>
              <Typography gutterBottom>DELIVERY TIME</Typography>
              <FormControl
                size="small"
                variant="outlined"
                style={{ maxWidth: "18ch" }}
              >
                <Select value={delTime} onChange={handleDelivery}>
                  <MenuItem value={365}>ANY TIME</MenuItem>
                  <MenuItem value={1}>EXPRESS 24 HR.</MenuItem>
                  <MenuItem value={3}>WITHIN 3 DAYS</MenuItem>
                  <MenuItem value={7}>WITHIN 7 DAYS</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={5} className={classes.search}>
              <Button variant="outlined" className={classes.button} onClick={() => onSubmit()}>
                Search
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Fragment>
  );
};
export default FilterCard;
