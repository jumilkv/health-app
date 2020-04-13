import { makeStyles,withStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontSize: 25,
  },
});
export default makeStyles({
    menu:{
        display:'flex',
        justifyContent:'space-between',
        background: '#7c2333',
        color: '#fff',
        height:'4rem',
        fontWeight:'bold',
        fontFamily:'monospace', 
        fontSize:'18px',
        alignItems: 'center',
    },
    subMenu:{
        display:'flex',
        justifyContent:'flex-end',
    },
    menuItems:{
        marginRight:'2rem'
    },
    link:{
        color: '#fff',
        textDecoration:'none'
    },
    logout:{
        color: '#fff',
        textDecoration:'none',
        border:'1px solid #fff',
        padding:'.5rem'
    },
    head:{
        marginLeft:'2rem'
    },
    mainHead:{
        padding:'.5rem',
        border:'3px solid #fff'
    }
});
