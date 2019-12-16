// import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import ReactDataGrid from 'react-data-grid';
import axios from 'axios';
import './Objects.css';
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
import ObjectSlider from './ObjectSlider.js'
import BatteryCharging50Icon from '@material-ui/icons/BatteryCharging50';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

const baseclsUrl = 'https://pathfinderserverrestapi.azurewebsites.net/objects';

const columns = [
  {
    key: 'objectsid',
    name: 'ID',
    width: 150,
  },
  {
    key: 'abbreviation',
    name: 'abbreviation',

    width: 250,
  },
  {
    key: 'objectname',
    name: 'Object name',
    width: 300,
  },
  {
    key: 'formula',
    name: 'formula',
    width: 150,
  },
];

class objects extends Component {
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
        this.myDivformula.value = '';
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
      .delete('https://pathfinderserverrestapi.azurewebsites.net/objects/' + this.myDivid.value)
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
      objectname: this.myDivName.value,
      formula: this.myDivformula.value,
    };

    if (this.frmStatus === 1) {
      axios
        .post('https://pathfinderserverrestapi.azurewebsites.net/objects/', PostData)
        .then(res => {
          this.getDataList();
        });
    }
    if (this.frmStatus === 0) {
      axios
        .put(
          'https://pathfinderserverrestapi.azurewebsites.net/objects/' + this.myDivid.value,
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

  CreateGrid() {
    return (
      <div>
        <ReactDataGrid
          columns={columns}
          rowGetter={i => this.state.lstDataList[i]}
          rowsCount={this.state.lstDataList.length}
          onRowClick={this.rowselect}
          enableCellSelect={false}
        />
      </div>
    );
  }

  rowselect(iRowIdx) {
    if (iRowIdx === -99) {
    } else {
      if (this.state.lstDataList.length > 0 && this.frmStatus === 0) {
        this.selected_row = iRowIdx;
        let cust = this.state.lstDataList[iRowIdx];
        this.myDivid.value = cust['objectsid'];
        this.myDivAbbr.value = cust['abbreviation'];
        this.myDivName.value = cust['objectname'];
        this.myDivformula.value = cust['formula'];
      }
    }
  }

  render() {
    return (
      <div className="container">
        <Grid container spacing={3}>
          <Grid item xs={5}>
            <Paper className="paper3">
              <div className="paper-content">
                <Typography variant="h6" component="h3">
                  Objects:
                </Typography>
                <Typography variant="caption" component="p">
                  This page gives you an opportunity to add, edit or delete objects that
                  Pathfinder offers for calculation.
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
                          disabled
                        />
                        <label>Abbreviation</label>
                      </div>
                    </ListItemText>
                  </ListItem>
                  <ListItem className="list-item">
                    <ListItemAvatar className="energy">
                      <Avatar>
                        <BubbleChartIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText>
                      <div className="input-field">
                        <input type="text" name="objectname" ref={c => (this.myDivName = c)} />
                        <label>Object Name</label>
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
                        <input name="formula" ref={c => (this.myDivformula = c)} style={{ height: 100, width: 300}}/>
                        <label>Formula</label>
                      </div>
                    </ListItemText>
                  </ListItem>
                  <ListItem className="list-item">
                    <ListItemText>
                      <Button
                        variant="contained"
                        className="btn3"
                        color="primary"
                        onClick={this.handleNewClick}
                        ref={c => (this.btnNew = c)}
                      >
                        New
                      </Button>

                      <Button
                        variant="contained"
                        className="btn3"
                        color="primary"
                        onClick={this.handleDelClick}
                        ref={c => (this.btnDel = c)}
                      >
                        Delete
                      </Button>

                      <Button
                        variant="contained"
                        className="btn3"
                        color="primary"
                        onClick={this.handleSaveClick}
                        ref={c => (this.btnSave = c)}
                      >
                        Save
                      </Button>
                      <Button
                        variant="contained"
                        className="btn3"
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
              <div className="slider3">
                <ObjectSlider />
              </div>
              <this.CreateGrid />
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default objects;
