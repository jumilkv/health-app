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


function UserRegistration() {

  const classes = Style();
  
  const [state, setState] = useState({
                                        firstName:'',
                                        lastName:'',
                                        address:'',
                                        pincode:'',
                                        area:'',
                                        district:'',
                                        state:'',
                                        email:'',
                                        phone:'',
                                        password:''
                                    })
    const [errors,setErrors]=useState({name:false});
    const [errorMessage,setErrorMessage]=useState({name:''});
    const [stateErrorMessage, setStateErrorMessage] = useState({status:false,message:''});

  const handleUserRegistration = async(e) => {
      e.preventDefault();
      if(state.firstName === ''){
        setErrors({...errors,"firstName":true})
        setErrorMessage({...errorMessage,"firstName":"Required"})
      } else if(state.lastName === ''){
        setErrors({...errors,"lastName":true})
        setErrorMessage({...errorMessage,"lastName":"Required"})
      } else if(state.address === ''){
        setErrors({...errors,"address":true})
        setErrorMessage({...errorMessage,"address":"Required"})
      } else if(state.pincode === ''){
        setErrors({...errors,"pincode":true})
        setErrorMessage({...errorMessage,"pincode":"Required"})
      } else if(state.area === ''){
        setErrors({...errors,"area":true})
        setErrorMessage({...errorMessage,"area":"Required"})
      } else if(state.district === ''){
        setErrors({...errors,"district":true})
        setErrorMessage({...errorMessage,"district":"Required"})
      } else if(state.state === ''){
        setErrors({...errors,"state":true})
        setErrorMessage({...errorMessage,"state":"Required"})
      } else if(state.email === ''){
        setErrors({...errors,"email":true})
        setErrorMessage({...errorMessage,"email":"Required"})
      } else if(state.phone === ''){
        setErrors({...errors,"phone":true})
        setErrorMessage({...errorMessage,"phone":"Required"})
      } else if(state.password === ''){
        setErrors({...errors,"password":true})
        setErrorMessage({...errorMessage,"password":"Required"})
      } else {
        // await fetch('http://localhost:8888/user',{
        //     method:'POST',
        //     body: JSON.stringify(state),
        //     headers: {name:'jumil'}
        //   })
        //   .then(res => res.json())
        //   .then(data => {
        //   });
        window.location = '/login'
      }
  }

  const handleInputChange = async(event) => {
        const { value, name } = event.target;
        setState({...state,[name]:value});
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
                        <a href='/login' className={classes.logout}>Login</a>
                    </div>
                </div>
                </div>
                <div className={classes.container}>
                    <div className={classes.loginContainer}>
                    <form required  autocomplete="off"
                            // error={error}  onSubmit={(e) => { e.preventDefault(); handleSubmit(); } } component="fieldset" className={classes.form}
                             >
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="standard-required"
                            label="First Name"
                            name="firstName"
                            autoComplete="off"
                            onFocus={()=>{setErrors({...errors,"firstName":false});
                            setErrorMessage({...errorMessage,"firstName":""})}} 
                            error={errors["firstName"]}
                            helperText={errorMessage["firstName"]}
                            autoFocus
                            value={state.firstName}
                            onChange={handleInputChange}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="standard-required"
                            label="Last Name"
                            name="lastName"
                            autoComplete="off"
                            onFocus={()=>{setErrors({...errors,"lastName":false});
                            setErrorMessage({...errorMessage,"lastName":""})}} 
                            error={errors["lastName"]}
                            helperText={errorMessage["lastName"]}
                            value={state.lastName}
                            onChange={handleInputChange}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="standard-required"
                            label="Address"
                            name="address"
                            autoComplete="off"
                            onFocus={()=>{setErrors({...errors,"address":false});
                            setErrorMessage({...errorMessage,"address":""})}} 
                            error={errors["address"]}
                            helperText={errorMessage["address"]}
                            value={state.address}
                            onChange={handleInputChange}ii 
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="standard-required"
                            label="Pincode"
                            name="pincode"
                            autoComplete="off"
                            onFocus={()=>{setErrors({...errors,"pincode":false});
                            setErrorMessage({...errorMessage,"pincode":""})}} 
                            error={errors["pincode"]}
                            helperText={errorMessage["pincode"]}
                            value={state.pincode}
                            onChange={handleInputChange}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="standard-required"
                            label="Area"
                            name="area"
                            autoComplete="off"
                            onFocus={()=>{setErrors({...errors,"area":false});
                            setErrorMessage({...errorMessage,"area":""})}} 
                            error={errors["area"]}
                            helperText={errorMessage["area"]}
                            value={state.area}
                            onChange={handleInputChange}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="standard-required"
                            label="District"
                            name="district"
                            autoComplete="off"
                            onFocus={()=>{setErrors({...errors,"district":false});
                            setErrorMessage({...errorMessage,"district":""})}} 
                            error={errors["district"]}
                            helperText={errorMessage["district"]}
                            value={state.district}
                            onChange={handleInputChange}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="standard-required"
                            label="State"
                            name="state"
                            autoComplete="off"
                            onFocus={()=>{setErrors({...errors,"state":false});
                            setErrorMessage({...errorMessage,"state":""})}} 
                            error={errors["state"]}
                            helperText={errorMessage["state"]}
                            value={state.state}
                            onChange={handleInputChange}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="standard-required"
                            label="Email"
                            name="email"
                            autoComplete="off"
                            onFocus={()=>{setErrors({...errors,"email":false});
                            setErrorMessage({...errorMessage,"email":""})}} 
                            error={errors["email"]}
                            helperText={errorMessage["email"]}
                            value={state.email}
                            onChange={handleInputChange}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="standard-required"
                            label="Phone Number"
                            name="phone"
                            autoComplete="off"
                            onFocus={()=>{setErrors({...errors,"phone":false});
                            setErrorMessage({...errorMessage,"phone":""})}} 
                            error={errors["phone"]}
                            helperText={errorMessage["phone"]}
                            value={state.phone}
                            onChange={handleInputChange}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="standard-required"
                            label="Password"
                            name="password"
                            autoComplete="off"
                            type="password"
                            onFocus={()=>{setErrors({...errors,"password":false});
                            setErrorMessage({...errorMessage,"password":""})}} 
                            error={errors["password"]}
                            helperText={errorMessage["password"]}
                            value={state.password}
                            onChange={handleInputChange}
                        />
                        <div className={classes.formButton}>  
                            <Button
                                type="submit"
                                variant="contained"
                                color="red"
                                // disabled={stateLoading || stageLoading}
                                fullWidth
                                id='submit'
                                className={classes.submit}
                                onClick={handleUserRegistration}
                            >
                                Register
                            </Button>
                        </div>
                        </form>
                    </div>
                    <div className={classes.sideImage}>
                        <h2>Register</h2>
                        <img src={image} width="100%" height="100%" style={{borderRadius:'1rem',objectFit:'cover'}}/>
                    </div>
                </div>
             </React.Fragment>
          </ThemeProvider>
      </div>
    );
}
export default UserRegistration;
