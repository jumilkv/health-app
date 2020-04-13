/* eslint-disable jsx-a11y/iframe-has-title */
import React,{useState,useEffect} from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Style from './Main_CSS';
import image from './Images/corona1.jpg'

const theme = createMuiTheme({
    typography: {
      fontSize: 25,
    },
  });


function AdminHome() {

  const [rows,setRows]=React.useState([]);
  const classes = Style();
  
  useEffect(() => {
  return () => {
    console.log("cleaned up");
  };
  }, []);
  return (
      <div>
          <ThemeProvider theme={theme}>
             <React.Fragment>
                <div className={classes.menu}>
                <div className={classes.head}>
                   <a href='/' style={{textDecoration:'none'}}>
                      <h3 className={classes.mainHead}>Health App</h3>
                  </a>
                </div>
                <div className={classes.subMenu}>
                    <div className={classes.menuItems}>
                        <a href='/register' className={classes.logout}>Register</a>
                    </div>
                    <div className={classes.menuItems}>
                        <a href='/login' className={classes.logout}>Login</a>
                    </div>
                </div>
                </div>
                <div style={{width:'100%'}}>
                    <img src={image} width="100%"/>
                </div>
             </React.Fragment>
          </ThemeProvider>
      </div>
    );
}
export default AdminHome;
