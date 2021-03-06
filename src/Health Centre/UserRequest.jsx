import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import TableRow from '@material-ui/core/TableRow';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';
import CircularProgress from '@material-ui/core/CircularProgress';
import {withRouter} from 'react-router';
import Cookie from "js-cookie";
import BranchModal from './UserModal';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import PrintIcon from '@material-ui/icons/Print';
import IconButton from '@material-ui/core/IconButton'
import { parseAsync } from 'json2csv';
import GetAppIcon from '@material-ui/icons/GetApp';
import CustomizedSnackbars from './snack';
import Modal from 'react-awesome-modal';
import AppConstants from '../Utils/AppConstants';
import Style from './Style/Useres';
import Head from './Head';
import { Item } from 'semantic-ui-react';
const moment = require('moment');
const token = Cookie.get('token');

const theme = createMuiTheme({
    typography: {
      fontSize: 25,
    },
  });


function Branches(props) {

  const [rows,setRows]=React.useState([]);
  const classes = Style();
  const [url,setUrl]=useState("");
  const [totalCount,setTotalCount] = useState({status:false,message:''})
  const [order, setOrder] = useState('asc');
  const [orderField, setOrderField] = useState('');
  const [stageLoading, setStageLoading] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);
  const [modalData, setModalData] = React.useState({});
  const [modalName, setModalName] = React.useState('');
  const[success,setSuccess]=useState({status:false,message:''})
  const [hide,setHide]=useState({print:false})
  const [orderBy, setOrderBy] = React.useState('');
  const columns = [
            { id: 'branch_name', label: 'User Name', minWidth: 170 },
            { id: 'emp_count', label: 'Email', align: 'left' },
            { id: 'emp_count', label: 'Phone', align: 'left' },
            { id: 'emp_count', label: 'Address', align: 'left' },
            { id: 'emp_count', label: 'Purpose', align: 'left' },
            { id: 'emp_count', label: 'Requested On', align: 'left' },
            { id: 'emp_count', label: 'Status', align: 'left' },
            // { id: 'state_name', label: AppConstants.STATE, align: 'left' },
            // { id: 'created_on', label: AppConstants.CREATED_ON, align: 'left' },
  ];
  
  const handleRequestSort = async(event, property,id) => {
      setOrder(order === 'desc' ? 'asc' : 'desc');
      setOrderField(id);
      setOrderBy(property.label);

    //   await fetch(AppConstants.BACK_END_URL_DOMAIN+AppConstants.BRANCHES + '/' + AppConstants.SORT+'/'+id+'/'+order ,{
    //     method:'GET',
    //     headers: {
    //       'Authorization': `Bearer ${token}`,
    //     }
    //   })
    //   .then(res => res.json())
    //   .then(data => {
    //     setRows(data)
    //   });
  };

  const handleHide=()=>{
      setHide({print:true})
    
  }
  const createSortHandler = (property,id) => event => {
    handleRequestSort(event, property,id);
  };

  const createdOn = (createdDate) => {
    const date = new Date(createdDate).toDateString();
    const time = new Date(createdDate).toLocaleTimeString();
    var momentObj = moment(time,["h:mm:ss a"])
    return date + ' ' + momentObj.format("hh:mm:ss a");
  }

  const addOrUpdate = (type,data) => (event) => {
    setModalData({});
    if(type === 'edit'){
        setModalShow(true)
        setModalData(data);
        setModalName('Edit ')
    } else {
        setModalShow(true)
        setModalData({});
        setModalName('Add ')
    }
}

  function downloadText(myData){
      const fields = ['branch_name','emp_count','state_name', 'created_on'];
      const opts = { fields };
       myData.filter(item => {
        item.created_on = moment(item.created_on).format("ddd D MMM YYYY, h:mm:ss a");
       });
      parseAsync(myData,opts)
      .then((csv)=>{
        var blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        var url = URL.createObjectURL(blob);
        setUrl(url)
      })
      .catch(err=>{console.log(err)})
    }

  const closeModal = async(status,message) => {
      setModalShow(false);
      setSuccess({status:false,message:''})
      setSuccess({status:status,message:message})
      if(orderField !== ''){
        // await fetch(AppConstants.BACK_END_URL_DOMAIN+AppConstants.BRANCHES + '/' + AppConstants.SORT+'/'+orderField+'/'+(order === 'asc'?'desc':'asc') ,{
        //   method:'GET',
        //   headers: {
        //     'Authorization': `Bearer ${Cookie.get('token')}`,
        //   }
        // })
        // .then(res => res.json())
        // .then(data => {
        //   setRows(data)
        // });
      } else {
        // await fetch(AppConstants.BACK_END_URL_DOMAIN+AppConstants.BRANCHES,{
        //   method:'get',
        //   headers: {
        //     'Authorization': `Bearer ${Cookie.get('token')}`,
        //   }
        // }).then(res => res.json())
        // .then(data => {setRows(data);downloadText(data)})
      }
  }

  const printMe=()=>{
    if(hide.print==true){
        window.frames["print_frame"].document.body.innerHTML = document.getElementsByClassName(classes.root)[0].innerHTML;
        window.frames["print_frame"].window.print();
        setHide({print:false})
    }
  }

  useEffect(()=>{
  async function fetchData(){
    // await fetch(AppConstants.BACK_END_URL_DOMAIN+AppConstants.BRANCHES,{
    //   method:'get',
    //   headers: {
    //     'Authorization': `Bearer ${Cookie.get('token')}`,
    //   }
    // }).then(res => res.json())
    //   .then(async (data) => {
    //     setRows(data);downloadText(data);setStageLoading(false);
    //   })

  }
  fetchData()
  },{})
  
  useEffect(() => {
  return () => {
    console.log("cleaned up");
  };
  }, []);
  
  useEffect(()=>{
    printMe(hide.print)
    },[hide])

  return (
      <div>
          <ThemeProvider theme={theme}>
          <Head/>
          {!stageLoading?
             <React.Fragment>
             <h2 style={{color:'#7c2333', fontFamily:'monospace'}}>User Requests</h2>
                <Paper className={classes.root} >
                    <div className={classes.tableWrapper}>
                        <Table stickyHeader  aria-label="sticky table">
                            <TableHead  >
                                <TableRow>
                                    {columns.map((column,index) => (
                                        <TableCell
                                            className={classes.tableHead}
                                            key={column.id}
                                            align={column.align}
                                            style={{ minWidth: column.minWidth }}
                                            sortDirection={orderBy === column.label ? order : false}
                                        > 
                                          {column.id == 'branch_name' || column.id =='created_on' || column.id =='state_name' || column.id == 'emp_count'?  
                                              <TableSortLabel
                                                  direction={order}
                                                  onClick={createSortHandler(columns[index],column.id)}
                                                  hideSortIcon={hide.print}
                                                  active={orderBy === column.label && !hide.print}
                                                >
                                                  {column.label}
                                              </TableSortLabel> 
                                             :column.label
                                          }
                                        </TableCell>
                                        )
                                    )}
                                    {!hide.print?<TableCell  className={classes.tableHead} align='left'>{AppConstants.ACTION}</TableCell>:''}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                rows.map(ro=> {
                                return (
                                    <TableRow hover  tabIndex={-1} className={classes.rowData} >
                                    {columns.map(column => {
                                     const value = ro[column.id];
                                    return (
                                          column.id=='created_on'?
                                            <TableCell className={classes.rowData}>
                                              {createdOn(value)}
                                            </TableCell>
                                          :<TableCell key={column.id} align={column.align} className={classes.rowData}>
                                              {value}
                                          </TableCell>
                                    );
                                    })}
                                    {!hide.print?
                                          <TableCell className={classes.tableRowData}>
                                            <Tooltip title={`Edit branch (`+ro.branch_name+`)`} placement="right">
                                                <EditIcon  className={classes.editIcon} onClick={addOrUpdate('edit',ro)}/>                                             
                                            </Tooltip>
                                          </TableCell>
                                    :''}
                                    </TableRow>
                                );
                                })}
                            </TableBody>
                        </Table>
                        <iframe name="print_frame" width="0" height="0" frameborder="0" src="about:blank"></iframe>
                    </div>
                </Paper>

                <Tooltip title="Print list of user request" placement="top">
                  <Fab  aria-label="add" onClick={()=>handleHide()} className={classes.addIcons}>
                        <PrintIcon />
                  </Fab>
                  </Tooltip>
                  <a href={url} download={'branches.csv'}>
                  <Tooltip title="Download list of user request as .csv" placement="top">
                    <Fab
                        className={classes.addIcon}
                        aria-label="download"
                        onClick={()=>downloadText(rows)}
                        >
                      <GetAppIcon />
                    </Fab>
                  </Tooltip>
                  </a>     
                  {success.status?<CustomizedSnackbars message={success.message} variant='success' id='errorMessage'/>:""}
              </React.Fragment>: <CircularProgress size={50} color="primary" className={classes.loadingIcon} />
              }    
          </ThemeProvider>
      </div>
    );
}
export default withRouter(Branches)