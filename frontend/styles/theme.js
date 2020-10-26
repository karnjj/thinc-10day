import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = responsiveFontSizes(createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#028090',
    },
    gray: {
      main: '#ededed'
    },
    black: {
      main: '#000000'
    },
    lime: {
      main: '#e4fde1'
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  shadows: Array(25).fill('none')
}))

export default theme;