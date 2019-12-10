import React from 'react'
import { forwardRef } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent'
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import MaterialTable from 'material-table'
import DeleteIcon from '@material-ui/icons/Delete';
import Search from '@material-ui/icons/Search';
import Check from '@material-ui/icons/Check';
import AddBox from '@material-ui/icons/AddBox';
import Clear from '@material-ui/icons/Clear';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import axios from 'axios';

const tableIcons = {
  Delete: forwardRef((props, ref) => <DeleteIcon {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <EditIcon {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),

};

const useStyles = makeStyles(theme => ({
  card: {
    marginTop: '20px',
    width: '100%',
    margin: '5px'
  },
  text: {
    marginLeft: '15px',
    width: '30%',
  },
  button: {
    width: '20%',
    margin: '20px'
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));






function Materials() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    columns: [
      { title: 'Id', field: 'materialsid' },
      { title: 'abbreviation', field: 'abbreviation' },
      { title: 'Material', field: 'materialname' },
      { title: 'U-Value', field: 'coefficient', type: 'numeric' }
    ],
    data:[]
  });
  



  axios.get(`https://pathfinderserverrestapi.azurewebsites.net/materials`).then(res => {
    const _lstMaterilas = res.data;


    state.data = _lstMaterilas;
    //alert(state.data[0]);

  });


  return (
    <Card className={classes.card}>
      <CardHeader
        title="Materials"
      />
      <Divider />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Building materials with the corresponding heat transmittance values are available on this page.
          </Typography>
      </CardContent>
      <Paper className={classes.root}>
        <form noValidate autoComplete="off">
          <TextField className={classes.text} id="filled-basic" label="Material name" variant="filled" />
          <TextField className={classes.text} id="filled-basic" label="Heat transmittance value" variant="filled" />
          <Button className={classes.button} variant="contained" color="primary">
            Add
        </Button>
        </form>
        <Divider />
        <div>
          <div className={classes.demo}>
            <MaterialTable
              icons={tableIcons}
              title="Materials"
              columns={state.columns}
              data={state.data}
              editable={{
                onRowAdd: newData =>
                  new Promise(resolve => {
                    setTimeout(() => {
                      resolve();
                      setState(prevState => {
                        const data = [...prevState.data];
                        data.push(newData);
                        return { ...prevState, data };
                      });
                    }, 600);
                  }),
                onRowUpdate: (newData, oldData) =>
                  new Promise(resolve => {
                    setTimeout(() => {
                      resolve();
                      if (oldData) {
                        setState(prevState => {
                          const data = [...prevState.data];
                          data[data.indexOf(oldData)] = newData;
                          return { ...prevState, data };
                        });
                      }
                    }, 600);
                  }),
                onRowDelete: oldData =>
                  new Promise(resolve => {
                    setTimeout(() => {
                      resolve();
                      setState(prevState => {
                        const data = [...prevState.data];
                        data.splice(data.indexOf(oldData), 1);
                        return { ...prevState, data };
                      });
                    }, 600);
                  }),
              }}
            />
          </div>
        </div>
      </Paper>
    </Card>
  );
}

export default Materials;
