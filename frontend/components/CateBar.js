import { Fragment, useEffect, useState } from "react";
import {
  Container,
  makeStyles,
  fade,
  Tabs,
  Tab,
} from "@material-ui/core";
import { useRouter } from "next/router";
import Link from 'next/link'

const JobLinks = [
  //name, paths
  ["Design", ["/categories/design"]],
  ["Writing", ["/categories/writing"]],
  ["Video", ["/categories/video"]],
  ["Audio", ["/categories/audio"]],
  ["Programming", ["/categories/programming"]],
  ["Business", ["/categories/business"]],
];

const useStyles = makeStyles((theme) => ({
    border: {
      borderBottomStyle: "solid",
      borderBottomWidth: "1px",
      borderBottomColor: fade(theme.palette.common.black, 0.2),
    },
  }));

const CateBar = () => {
  const classes = useStyles() 
  const router = useRouter()
  const { name } = router.query
  const [value, setValue] = useState(-1)
  const [thisPage, setThisPage] = useState(-1)
  useEffect(() => {
    if(name !== undefined) {
      var idx = JobLinks.findIndex((path) => path[1][0].slice(-name.length) === name)
      setValue(idx)
      setThisPage(idx)
    }
  },[name])
  return (
    <div className={classes.border}>
      <Container maxWidth="lg">
        <Tabs 
          value={value}
          variant='scrollable'
          scrollButtons="auto"
        >
          {JobLinks.map(([name, path], index) => (
            <Link href={`/categories/[name]`} as={path[0]} passHref>
              <Tab
                key={index}
                data-key={index}
                onMouseOver={() => setValue(index)}
                onMouseOut={() => setValue(thisPage)}
                label={name}
                indicatorColor="secondary"
                textColor="secondary"
                fullWidth
              ></Tab>
            </Link>
          ))}
        </Tabs>
      </Container>
    </div>
  );
};

export default CateBar