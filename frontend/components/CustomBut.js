import Link from "next/link";
const { Button, makeStyles, fade } = require("@material-ui/core");
const useStyles = makeStyles((theme) => ({
  button: {
    width: theme.spacing(16),
    height: theme.spacing(16),
    "&:hover": {
      background: fade(theme.palette.secondary.main, 0.1),
    },
  },
}));
const CustomBut = ({ href, dynamic, prefetch, ...props }) => {
  const classes = useStyles();
  return (
    <Link href={href} as={dynamic} prefetch={prefetch}>
      <Button className={classes.button} {...props} />
    </Link>
  );
};
export default CustomBut;
