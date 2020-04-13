/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-expressions */
import React ,{useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import {ThemeProvider ,createMuiTheme} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FormGroup from '@material-ui/core/FormGroup';  
import Input from '@material-ui/core/Input';
import AppConstants from '../Utils/AppConstants';
import CircularProgress from '@material-ui/core/CircularProgress';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Divider from '@material-ui/core/Divider';
import Radio from '@material-ui/core/Radio';
import Modal from 'react-awesome-modal';
import Cookie from "js-cookie";
import Style from './Style/Modal';

const token = Cookie.get('token');

const theme = createMuiTheme({
  palette: {
    common: {
      black: "#000",
      white: "#fff",
      indigo:"#2c387e"
    },
    type: "light",
    primary:{
      light: "#7986cb",
      main: "#357a38",
      dark: "#303f9f",
      contrastText: "#fff"
    },
    secondary:{
    light: "#ff4081",
    main: "#f50057",
    dark: "#c51162",
    contrastText: "#fff"}},
    spacing:10,
    typography: {
    fontSize: 20,
  },
})

export default function BranchModal(props) {
  const classes = Style();
  const[state,setState]=useState({'name':''});
  const[stateId,setStateId]=useState('');
  const[states,setStates]=useState([]);
  const [stageLoading, setStageLoading] = useState(false);
  const [stateLoading, setStateLoading] = useState(false);
  const [errors,setErrors]=useState({name:false});
  const [errorMessage,setErrorMessage]=useState({name:''});
  const [stateErrorMessage, setStateErrorMessage] = useState({status:false,message:''});
  const type = props.type === 'Edit ' ? 'Update' : 'Add'
  const[error,setError]=useState("")

  const fetchstates = async() => {
    setStateLoading(true);
    setStateLoading(false);
  }
  
  React.useEffect(()=>{
      async function fetchData(){
            if(props.data.branch_id !== undefined){
                const { branch_name} = props.data;
                setState({name:branch_name.toUpperCase()})
            }
            await fetchstates();
        }
        fetchData();
      },[props.data])
      React.useEffect(() => {
        return () => {
          console.log("cleaned up");
        };
      }, []);

  const handleDeptHandle = e => {
    let filterType = [];
    states.map((type) => {
      if(type.state_id === parseInt(e.target.value)){
        if(type.checked){
          type.checked = false;
          setStateId('');
        } else {
          type.checked = true;
          setStateId(e.target.value);
        }
      } else if(type.checked){
        type.checked = false;
      }
      filterType.push(type)

    })
    setStates(filterType)
  }
     
  const updateBranchQueue = (branchId) => {
    console.log("-----", branchId)
    fetch(AppConstants.KAFKA_SERVICE_URL_DOMAIN + AppConstants.BRANCH_MASTER_SYNC, {
      method: "POST",
      body: JSON.stringify({branch_id: branchId})
    })
  }

  const handleInputChange = async(event) => {
        let reg = /^[#\\@\\$%\\^\\&*\\|\\\\//.\]\\)\\(;:,+"'_\\=!><?\-\\[`~{}]|`~.\\\/_\]]+$/g;
        let result = reg.test(event.target.value[event.target.value.length - 1])
        if(result === false){
          if(event.target.value.length > 30){
            setErrors({...errors,"name":true})
            setErrorMessage({...errorMessage,"name":"Maximum 30 characters are allowed"})
          } else {
            const { value, name } = event.target;
            setState({...state,[name]:value.toUpperCase()});
            setErrors({...errors,"name":false})
            setErrorMessage({...errorMessage,"name":''})
          }
        } else {
          setErrors({...errors,"name":true})
          setErrorMessage({...errorMessage,"name":"Special characters are not allowed"})
        }
  }

  const reset = () => {
    setError('');
    if(props.data.branch_name !== undefined){
      setState({...state,name:props.data.branch_name.toUpperCase()});
      states.filter(state => parseInt(props.data.state_id)=== state.state_id?state.checked=true:state.checked=false)
      setStates(states);
      setStateId(props.data.state_id)
    } else {
      states.filter(state => state.checked=false)
      setStates(states);
      setStateId(0)
      setState({...state,name:''});
    }
  }

  const handleSubmit = async(event) => {
    setError('');
    if(state.name === '' || state.name === undefined){
      setErrors({...errors,"name":true})
      setErrorMessage({...errorMessage,"name":"Required"})
    }  else if(stateId === undefined || stateId === 0 || stateId === ''){
      setStateErrorMessage({...stateErrorMessage, status: true, message:'Select a state'})
    } else {
      setStateErrorMessage({...stateErrorMessage, status: false, message:''})
        let URL = '';
        let method = '';
        let message = '';
        setStageLoading(true);
        let isExist = false;
        let headers = {};
        let body = {};
        if(props.data.branch_id !== undefined){
            URL= AppConstants.BACK_END_URL_DOMAIN + AppConstants.BRANCHES.toLowerCase() + '/update/';
            method= 'PUT';
            message = "'" + state.name.toUpperCase() + "' updated successfully";
            headers = {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${Cookie.get('token')}`,
            }
            body = {
              'branchId': parseInt(props.data.branch_id),
              'name' : state.name.toUpperCase(),
              'stateId': stateId
            }
            await fetch(AppConstants.BACK_END_URL_DOMAIN+AppConstants.BRANCHES.toLowerCase()+'/getByName/'+state.name,{
              method:'get',
              headers: {
                'Authorization': `Bearer ${Cookie.get('token')}`,
              }
            })
            .then(res => res.json())
            .then(data => {
              if(data.length > 0){
                if(data[0].branch_id !== props.data.branch_id){
                  isExist = true;
                }
              }
        });
        } else {
            URL= AppConstants.BACK_END_URL_DOMAIN + AppConstants.BRANCHES.toLowerCase();
            method= 'POST';
            message = "'" + state.name.toUpperCase() + "' added successfully";
            headers = {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${Cookie.get('token')}`,
            }
            body = {
              'name' : state.name.toUpperCase(),
              'stateId': stateId
            }
            await fetch(AppConstants.BACK_END_URL_DOMAIN+AppConstants.BRANCHES.toLowerCase() + '/getByName/' + state.name,{
              method:'get',
              headers: {
                'Authorization': `Bearer ${Cookie.get('token')}`,
              }
            })
            .then(res => res.json())
            .then(data => {
              if(data.length > 0){
                  isExist = true;
              }
        });
        }
        if(!isExist){
          await fetch(URL, {
            method: method,
            body: JSON.stringify(body),
            headers: headers
          })
          .then(res => res.json())
          .then(res => {
            if (res) {
                reset();
                setStageLoading(false);
                if(method === 'POST'){
                  updateBranchQueue(res.id)
                }
                else{
                  updateBranchQueue(props.data.branch_id)
                }
                props.closeModal(true,message);
            } else {
                const error = new Error(res.error);
                setStageLoading(false);
                throw error;
            }
          })
          .catch(err => {
                setError('Invalid data. Please try again');
                setStageLoading(false);
          });
        } else {
          setErrors({...errors,"name":true})
          setErrorMessage({...errorMessage,"name":"Course specification already exists"})
          setStageLoading(false);
        }
    }
  }
   
  return (
    <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <div className={classes.paper}>
        <form required error={error}  onSubmit={(e) => { e.preventDefault(); handleSubmit(); } } component="fieldset" className={classes.form} >
        <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="standard-required"
            label="Request"
            name="name"
            autoComplete="off"
            onFocus={()=>{setErrors({...errors,"name":false});
            setErrorMessage({...errorMessage,"name":""})}} 
            error={errors["name"]}
            helperText={errorMessage["name"]}
            autoFocus
            value={state.name}
            onChange={handleInputChange}
          />
          <div className={classes.formButton}>  
          <Button variant="contained" fullWidth className={classes.reset} onClick={reset}  disabled={stateLoading || stageLoading}>
                {type === 'Add'?'Clear':'Reset'}
              </Button>

              <Button
                type="submit"
                variant="contained"
                color="red"
                disabled={stateLoading || stageLoading}
                fullWidth
                id='submit'
                className={classes.submit}
              >
                {type} {stageLoading ? <CircularProgress size={15} color="primary" className={classes.submitLoadingIcon} /> : '' }
              </Button>
          </div>
        </form>
      </div>
      <Divider className={classes.dividerBottom}/>
    </Container>
    </ThemeProvider>
  );
}