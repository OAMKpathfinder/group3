//import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import ReactDataGrid from 'react-data-grid';
import axios from 'axios';
import './Materials.css';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import FormatColorTextIcon from '@material-ui/icons/FormatColorText';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import LayersIcon from '@material-ui/icons/Layers';
import BatteryCharging50Icon from '@material-ui/icons/BatteryCharging50';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
const baseclsUrl = 'https://pathfinderserverrestapi.azurewebsites.net/materials';

const columns = [
  {
    key: 'materialsid',
    name: 'ID:',
    width: 100,
  },
  {
    key: 'abbreviation',
    name: 'Abbreviation:',

    width: 150,
  },
  {
    key: 'materialname',
    name: 'Material:',
    width: 200,
  },
  {
    key: 'coefficient',
    name: 'U-value:',
    width: '30%',
  },
];

class materials extends Component {
  constructor() {
    super();
    this.getDataList = this.getDataList.bind(this);

    this.frmStatus = 0;

    this.rowselect = this.rowselect.bind(this);

    //btn handler
    this.handleNewClick = this.handleNewClick.bind(this);
    this.handleDelClick = this.handleDelClick.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
    this.handleCancelClick = this.handleCancelClick.bind(this);

    this.showButt = this.showButt.bind(this);

    this.CreateGrid = this.CreateGrid.bind(this);

    this.selected_row = 0;
    this.state = {
      lstDataList: [],
    };
    this.getDataList();
  }

  CreateGrid() {
    return (
      <div>
        <ReactDataGrid
          columns={columns}
          rowGetter={i => this.state.lstDataList[i]}
          rowsCount={this.state.lstDataList.length}
          onRowClick={this.rowselect}
        />
      </div>
    );
  }
  showButt() {
    switch (this.frmStatus) {
      case 0:
        this.btnNew.style.visibility = 'visible';
        this.btnDel.style.visibility = 'visible';
        this.btnSave.style.visibility = 'visible';
        this.btnCancel.style.visibility = 'visible';
        break;
      case 1:
        this.btnNew.style.visibility = 'visible';
        this.btnDel.style.visibility = 'hidden';
        this.btnSave.style.visibility = 'visible';
        this.btnCancel.style.visibility = 'visible';

        this.myDivid.value = 0;
        this.myDivAbbr.value = '';
        this.myDivName.value = '';
        this.myDivcoefficient.value = 0;
        break;

      default:
        break;
    }
  }
  handleNewClick() {
    this.frmStatus = 1;
    this.showButt();
  }
  handleDelClick() {
    axios
      .delete('https://pathfinderserverrestapi.azurewebsites.net/materials/' + this.myDivid.value)
      .then(res => {
        this.getDataList();
      });
  }
  handleCancelClick() {
    this.frmStatus = 0;
    this.showButt();
    this.rowselect(this.selected_row);
  }
  handleSaveClick() {
    const PostData = {
      materialname: this.myDivName.value,
      coefficient: this.myDivcoefficient.value,
    };

    if (this.frmStatus === 1) {
      axios
        .post('https://pathfinderserverrestapi.azurewebsites.net/materials/', PostData)
        .then(res => {
          this.getDataList();
        });
    }
    if (this.frmStatus === 0) {
      axios
        .put(
          'https://pathfinderserverrestapi.azurewebsites.net/materials/' + this.myDivid.value,
          PostData,
        )
        .then(res => {
          this.getDataList();
        });
    }

    this.frmStatus = 0;
    this.showButt();
  }

  getDataList() {
    axios.get(baseclsUrl).then(res => {
      const _lstDataList = res.data;
      if (_lstDataList.length > 0) {
        this.setState({ lstDataList: _lstDataList });
        this.rowselect(0);
        this.CreateGrid();
      }
    });
  }

  rowselect(iRowIdx) {
    if (iRowIdx === -99) {
    } else {
      if (this.state.lstDataList.length > 0 && this.frmStatus === 0) {
        this.selected_row = iRowIdx;
        let cust = this.state.lstDataList[iRowIdx];
        this.myDivid.value = cust['materialsid'];
        this.myDivAbbr.value = cust['abbreviation'];
        this.myDivName.value = cust['materialname'];
        this.myDivcoefficient.value = cust['coefficient'];
      }
    }
  }

  render() {
    return (
      <div className="container">
        <Grid container spacing={3}>
          <Grid item xs={5}>
            <Paper className="paper1">
              <div className="paper-content">
                <Typography variant="h6" component="h3">
                  Building information:
                </Typography>
                <Typography variant="caption" component="p">
                  A condominium is one of a group of housing units where the homeowners own their
                  individual unit space, and all the dwellings share ownership of common use areas.
                </Typography>
                <List className="list">
                  <ListItem className="list-item">
                    <ListItemAvatar>
                      <Avatar className="house">
                        <AssignmentTurnedInIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText>
                      <div className="input-field">
                        <input
                          type="number"
                          name="idField"
                          ref={c => (this.myDivid = c)}
                          style={{ width: 150 }}
                          disabled
                        />
                        <label>ID</label>
                      </div>
                    </ListItemText>
                  </ListItem>
                  <ListItem className="list-item">
                    <ListItemAvatar>
                      <Avatar className="area">
                        <FormatColorTextIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText>
                      <div className="input-field">
                        <input
                          type="text"
                          name="abbreviation"
                          ref={c => (this.myDivAbbr = c)}
                          style={{ width: 150 }}
                          disabled
                        />
                        <label>Abbreviation</label>
                      </div>
                    </ListItemText>
                  </ListItem>
                  <ListItem className="list-item">
                    <ListItemAvatar className="energy">
                      <Avatar>
                        <BubbleChartIcon/>
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText>
                      <div className="input-field">
                        <input
                          type="text"
                          name="materialname"
                          ref={c => (this.myDivName = c)}
                          style={{ width: 200, borderColor: 'gray', borderWidth: 1 }}
                        />
                        <label>Material</label>
                      </div>
                    </ListItemText>
                  </ListItem>
                  <ListItem className="list-item">
                    <ListItemAvatar className="energy">
                      <Avatar>
                        <BatteryCharging50Icon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText>
                      <div className="input-field">
                        <input
                          type="number"
                          placeholder="0.00"
                          step="0.01"
                          name="coefficient"
                          ref={c => (this.myDivcoefficient = c)}
                          style={{ width: 200, borderColor: 'gray', borderWidth: 1 }}
                        />
                        <label>U-Value</label>
                      </div>
                    </ListItemText>
                  </ListItem>
                  <ListItem className="list-item">
                    <ListItemText>
                      <Button
                        variant="contained"
                        className="btn1"
                        color="primary"
                        onClick={this.handleNewClick}
                        ref={c => (this.btnNew = c)}
                      >
                        New
                      </Button>

                      <Button
                        variant="contained"
                        className="btn1"
                        color="primary"
                        onClick={this.handleDelClick}
                        ref={c => (this.btnDel = c)}
                      >
                        Delete
                      </Button>

                      <Button
                        variant="contained"
                        className="btn1"
                        color="primary"
                        onClick={this.handleSaveClick}
                        ref={c => (this.btnSave = c)}
                      >
                        Save
                      </Button>

                      <Button
                        variant="contained"
                        className="btn1"
                        color="primary"
                        onClick={this.handleCancelClick}
                        ref={c => (this.btnCancel = c)}
                      >
                        Cancel
                      </Button>
                    </ListItemText>
                  </ListItem>
                </List>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={7}>
            <Card className="card">
              <this.CreateGrid />
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default materials;
