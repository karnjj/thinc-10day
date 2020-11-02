import { Card, Container, Grid, makeStyles, Paper } from "@material-ui/core";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import FilterCard from "../../components/FIlterCard";
import Navbar from "../../components/Navbar";
import JobCard from "../../components/JobCard";
const useStyles = makeStyles((theme) => ({
  card: {
    position: "sticky",
  },
}));

const Category = () => {
  const classes = useStyles();
  const router = useRouter();
  const [data, setData] = useState([]);
  const [filter,setFilter] = useState({
    minExp : 0,
    maxExp : 10,
    minCost : 0,
    maxCost : 1000000,
    delTime : 365,
    bg : {
      Under: false,
      Tech: false,
      BA: false,
      MA: false,
      PHD: false,
      Any: true,
    }
  })
  const { key } = router.query;

  useEffect(async () => {
    if (key !== undefined) {
      const res = await fetch(`http://127.0.0.1:8000/api/search/${key}`);
      const { data } = await res.json();
      setData(data);
    }
  }, [key]);

  const filterData = data?.filter((task) => {
    const cost = (task.price/100 <= filter.maxCost) && (task.price/100 >= filter.minCost)
    const day = (task.experienceyear <= filter.maxExp) && (task.experienceyear >= filter.minExp)
    const delTime = (task.workday <= filter.delTime)
    let bg = filter.bg.Any
    if(task.educationbg === 'UNDERGRADUATE' && filter.bg.Under) bg = true
    if(task.educationbg === 'TECHNICAL COLLEGE' && filter.bg.Tech) bg = true
    if(task.educationbg === 'BA' && filter.bg.BA) bg = true
    if(task.educationbg === 'MA' && filter.bg.MA) bg = true
    if(task.educationbg === 'PHD' && filter.bg.PHD) bg = true
    return cost && day && delTime && bg 
  })

  return (
    <div style={{ backgroundColor: "#E5F4E3" }}>
      <Navbar />
      <Grid container>
        <Grid item xs={12}>
          <br />
          <Container maxWidth="lg">
            <Grid container spacing={4}>
              <Grid item xs={3}>
                <FilterCard cb={setFilter}/>
              </Grid>
              <Grid item xs={9}>
                <Paper variant="outlined" style={{ backgroundColor: "#fff" }}>
                  <Grid
                    container
                    spacing={3}
                    style={{ margin: "12px", width: "calc(100% - 24px)", minHeight: '500px'}}
                  >
                    {filterData.map((detail,index) => {
                      return (
                        <Grid item key={index}>
                          <JobCard detail={detail} />
                        </Grid>
                      );
                    })}
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
};

export default Category;
