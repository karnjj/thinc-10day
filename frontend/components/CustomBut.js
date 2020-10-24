const { Button, makeStyles, fade } = require("@material-ui/core")
const useStyles = makeStyles((theme) => ({
    button : {
        '&:hover': {
            background: fade(theme.palette.secondary.main, 0.10),
         },
    }
}))
const CustomBut = ({ children, href }) => {
    const classes = useStyles()
    return (
    <Button href={href} className={classes.button}>{children}</Button>
    )
}
export default CustomBut