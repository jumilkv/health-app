/* eslint-disable jsx-a11y/iframe-has-title */
import React,{useState,useEffect} from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Style from './Style/Login';
import image from '../Images/background.jpeg'

const theme = createMuiTheme({
    typography: {
      fontSize: 25,
    },
  });


function AdminHome() {

  const classes = Style();

  const handleLogin = (e) => {
    // window.location = '/admin-home'
    // window.location = '/health-centre-home'
    window.location = '/user-home'
  }
  
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
                <a className={classes.head} href='/'>
                    <h3 className={classes.mainHead}>Health App</h3>
                </a>
                <div className={classes.subMenu}>
                    <div className={classes.menuItems}>
                        <a href='/' className={classes.logout}>Home</a>
                    </div>
                    <div className={classes.menuItems}>
                        <a href='/register' className={classes.logout}>Register</a>
                    </div>
                </div>
                </div>
                <div className={classes.container}>
                    <div className={classes.loginContainer}>
                    <form required 
                              onSubmit={(e) => { e.preventDefault(); handleLogin(); } } component="fieldset"
                             >
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="standard-required"
                            label="Email"
                            name="email"
                            autoComplete="off"
                            // onFocus={()=>{setErrors({...errors,"name":false});
                            // setErrorMessage({...errorMessage,"name":""})}} 
                            // error={errors["name"]}
                            // helperText={errorMessage["name"]}
                            autoFocus
                            // value={state.name}
                            // onChange={handleInputChange}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="standard-required"
                            label="Password"
                            name="password"
                            type="password"
                            autoComplete="off"
                            // onFocus={()=>{setErrors({...errors,"name":false});
                            // setErrorMessage({...errorMessage,"name":""})}} 
                            // error={errors["name"]}
                            // helperText={errorMessage["name"]}
                            // autoFocus
                            // value={state.name}
                            // onChange={handleInputChange}
                        />
                        <div className={classes.formButton}>  
                            <Button
                                type="submit"
                                variant="contained"
                                color="red"
                                onClick={handleLogin}
                                // disabled={stateLoading || stageLoading}
                                fullWidth
                                id='submit'
                                className={classes.submit}
                            >
                                Login
                            </Button>
                        </div>
                        </form>
                    </div>
                    <div className={classes.sideImage}>
                        <h2>Login</h2>
                        <img src={image} width="100%" height="100%" style={{borderRadius:'1rem',objectFit:'cover'}}/>
                    </div>
                </div>
             </React.Fragment>
          </ThemeProvider>
      </div>
    );
}
export default AdminHome;
