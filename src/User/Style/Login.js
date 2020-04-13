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
        marginLeft:'2rem',
        color:'#fff',
        textDecoration:'none'
    },
    mainHead:{
        padding:'.5rem',
        border:'3px solid #fff',
        color:'#fff',
        textDecoration:'none'
    },
    container:{
        display:'flex',
        margin:'5rem'
    },
    loginContainer:{
        marginRight:'2rem',
        background:'#ffecec',
        padding:'4rem',
        width:'40rem',
        borderRadius:'1rem',
        boxShadow:"2px 2px 16px -3px grey"
    },
    sideImage:{
        overflow:'hidden',
        width:'35rem',
        boxShadow:'2px 5px 20px 5px grey',
        borderRadius:'1rem',
    },
    formButton:{
        display:'flex',
        marginTop:'2rem',
    },
    submit:{
        color: '#fff',
        background: '#7c2333',
        fontWeight: 'bold',
      '&:hover':{
        color: '#fff',
        background: '#9f3447',
      }
    },
});
