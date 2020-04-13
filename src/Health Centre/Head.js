/* eslint-disable jsx-a11y/iframe-has-title */
import React,{useState,useEffect} from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Style from './Style/Home';
import image from '../Images/corona1.jpg'

const theme = createMuiTheme({
    typography: {
      fontSize: 25,
    },
  });


function Head() {
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
                    <h3 className={classes.mainHead}>Health App</h3>
                </div>
                <div className={classes.subMenu}>
                    <div className={classes.menuItems}>
                        <a href='/health-centre/users' className={classes.link}>Users</a>
                        <a href='/health-centre/user-request' className={classes.link} style={{wordSpacing:'-4px',marginLeft:'2rem',marginRight:'2rem'}}>User Requests</a>
                        <a href='/health-centre/health-centres' className={classes.link} style={{wordSpacing:'-4px'}}>Health Centres</a>
                    </div>
                    <div className={classes.menuItems}>
                        <a href='/login' className={classes.logout}>Logout</a>
                    </div>
                </div>
                </div>
             </React.Fragment>
          </ThemeProvider>
      </div>
    );
}
export default Head;