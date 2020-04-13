/* eslint-disable jsx-a11y/iframe-has-title */
import React,{useState,useEffect} from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Style from './Style/Home';
import image from '../Images/corona1.jpg';
import Head from './Head';

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
               <Head/>
                <div style={{width:'100%'}}>
                    <img src={image} width="100%"/>
                </div>
             </React.Fragment>
          </ThemeProvider>
      </div>
    );
}
export default AdminHome;