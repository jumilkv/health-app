import { makeStyles,withStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontSize: 25,
  },
});
export default makeStyles({
  root: {
    width: '92%',
    overflowX: 'auto',
    marginLeft:30,
    marginTop:30,
    height:'85vh',
    fontFamily:'monospace',
    },

  table: {
    minWidth: 700,
    fontFamily:'monospace',
    },

  tableHead:{
    height:'30',
    background:'#dbbcc2',
    color:'#000',
    fontWeight:'bold',
    top:0,
    fontSize:'16px',
    fontFamily:'monospace',
    },

  tableWrapper: {
    overflow: 'auto',
    maxHeight:'79vh',
    },

   tableRowData: {
    '&:hover': {
         background: "#ededf2",
    },
    fontFamily:'monospace',      
   },

   tableRowStatusData: {
    textAlign:'left',
    '&:hover': {
         background: "#ededf2",
    }      
   },

   actions:{
        display:'flex'
   },

   deleteIcon:{
       color:'red',
   },

   editIcon:{
       color:'blue',
       marginRight:20,
       cursor: 'pointer',
   },

   add:{
        bottom:60,
        right:20,
        position:'fixed',
        color:'white',
        display:'flex',
        flexFlow:'column wrap',
        justifyContent:'space between'
   },

   modalClose:{
    fontWeight:'bold',
    marginRight:10,
    color:'red',
    cursor: 'pointer',
},
   addIcons:{
    bottom:460,
    right:20,
    position:'fixed',
    //color:'white',
    display:'flex',
    flexFlow:'column wrap',
},

addIcon:{
  bottom:380,
  right:20,
  position:'fixed',
  //color:'white',
  display:'flex',
  flexFlow:'column wrap',
  
     
},

  error: {
    backgroundColor: theme.palette.error.dark,
  },

  icon: {
    fontSize: 20,
  },

  close: {
    padding: theme.spacing(0.5),
  },

  cursor:{
    cursor: 'pointer',
  },
  rowData:{
    fontFamily:'monospace',
    wordBreak: 'break-all'
  },
  modal:{
    height: 550,
    width:'100%',
    overflow: 'auto',
    marginTop:'5rem',
    position:'fixed'

    },
    
    modalMain:{
        height: 530,
        overflow: 'hidden',
        marginBottom:'15rem',
        paddingBottom:'15rem',
        position:'fixed'
    },
    modalHead:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        width:'100%',
        position:'fixed',
        background: '#46A746',
        // borderRadius:'.6rem .6rem 0 0',
        boxShadow: '0px 1px 12px 0px #778977',
        color: '#fff',
    },
    modalTitle:{
        paddingLeft:40,
        fontWeight:'bold',
        textTransform: 'capitalize',
        fontFamily:'monospace',
        paddingBottom:'1rem'
    },
    modalClose:{
        fontWeight:'bold',
        marginRight:10,
    },
    butt:{
      background:'#6b91e3',
          boxShadow: '0px 0px 3px 4px rgba(193, 206, 220, 0.63)',
          '&:hover': {
              background: "#1d55cf",
              color:'white',
         }
    },
    switch:{
        paddingLeft:'1rem',
        flexDirection: 'row-reverse'
    },
    loadingIcon: {
      top: "50%",
      left: "50%",
      position: "absolute",
  }
});
