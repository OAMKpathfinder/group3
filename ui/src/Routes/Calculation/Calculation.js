//import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import ReactDataGrid from 'react-data-grid';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Buildings from './Buildings.js';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import FormatColorTextIcon from '@material-ui/icons/FormatColorText';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import Typography from '@material-ui/core/Typography';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import ListItem from '@material-ui/core/ListItem';
import Filter1Icon from '@material-ui/icons/Filter1';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import HomeIcon from '@material-ui/icons/Home';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Button from '@material-ui/core/Button';
import './Calculation.css';

// eslint-disable-next-line
const baseclsUrl =
  'https://pathfinderserverrestapi.azurewebsites.net//buildingstouserdetail/gtdet/19';

const columns = [
  {
    key: 'buildingstouserdetailid',
    name: 'ID',
    width: 50,
  },
  {
    key: 'objectname',
    name: 'Object name',

    width: 150,
  },
  {
    key: 'curmatname',
    name: 'Present Material',
    width: 150,
  },
  {
    key: 'newmatname',
    name: 'New Material',
    width: 150,
  },
  {
    key: 'numberofobjects',
    name: 'Number of Objects',
    width: 150,
  },
  {
    key: 'objectarea',
    name: 'Object area',
    width: 100,
  },
  {
    key: 'presentvalue',
    name: 'Current Value',
    width: 150,
  },
  {
    key: 'newvalue',
    name: 'New Value',
    width: 150,
  },
];

// eslint-disable-next-line
const urls = [
  'https://pathfinderserverrestapi.azurewebsites.net/objects',
  'https://pathfinderserverrestapi.azurewebsites.net/materials',
  'https://pathfinderserverrestapi.azurewebsites.net//buildingstouserdetail/gtdet/19',
];

class calculate extends Component {
  constructor() {
    super();

    this.getDataList = this.getDataList.bind(this);
    // this.getObjectsList = this.getObjectsList.bind(this);
    // this.getMaterialList = this.getMaterialList.bind(this);

    this.frmStatus = 0;

    this.rowselect = this.rowselect.bind(this);

    //btn handler
    this.handleNewClick = this.handleNewClick.bind(this);
    this.handleDelClick = this.handleDelClick.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
    this.handleCancelClick = this.handleCancelClick.bind(this);
    this.handleCalcClick = this.handleCalcClick.bind(this);

    this.showButt = this.showButt.bind(this);

    this.CreateGrid = this.CreateGrid.bind(this);
    this.butChange = this.butChange.bind(this);
    this.selected_row = 0;
    this.state = {
      lstDataList: [],
    };
    this.lstObjectDataList = [];
    this.lstMaterialsDataList = [];
    this.lstBuildingType = [];
    this.lstBldToUser = [];
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
        this.btnNew.style.visibility = 'hidden';
        this.btnDel.style.visibility = 'hidden';
        this.btnSave.style.visibility = 'visible';
        this.btnCancel.style.visibility = 'visible';
        // this.myDivObj.value = 0;
        //this.myDivMat.value = 0;
        this.myDivNumber.value = 0;
        this.myDivArea.value = 0;
        //this.myDivNewMat.value = 0;
        break;

      default:
        break;
    }
  }
  handleCalcClick() {
    if (this.frmStatus === 0) {
      Promise.all([
        fetch(
          'https://pathfinderserverrestapi.azurewebsites.net/buildingstouserdetail/bdusrclc/19',
        ),
        fetch('https://pathfinderserverrestapi.azurewebsites.net//buildingstouserdetail/gtdet/19'),
      ])
        .then(async ([aa, bb]) => {
          // eslint-disable-next-line
          const a = await aa.json();
          const b = await bb.json();

          this.setState({ lstDataList: b });
          //this.lstObjectDataList =b;
          //this.lstMaterialsDataList=c;
          //return [a  ]
        })
        .then(responseText => {
          //  alert( JSON.stringify(this.lstObjectDataList) );
          console.log(responseText);
          this.CreateGrid();
          this.rowselect(0);
        })
        .catch(err => {
          console.log(err);
        });

      // axios.get('https://pathfinderserverrestapi.azurewebsites.net/buildingstouserdetail/bdusrclc/:buildingstouserid').then(res => {
      //     const _lstDataList = res.data;
      //     if (_lstDataList.length > 0) {

      //         this.setState({ lstDataList: _lstDataList });
      //         this.rowselect(0);
      //         this.CreateGrid();
      //     }

      // });
    }
  }
  handleNewClick() {
    this.frmStatus = 1;
    this.showButt();
  }
  handleDelClick() {
    axios
      .delete(
        'https://pathfinderserverrestapi.azurewebsites.net/buildingstouserdetail/' +
          this.myDivid.value,
      )
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
      objectsid: this.myDivObj.value,
      materialsid: this.myDivMat.value,
      numberofobjects: this.myDivNumber.value,
      objectarea: this.myDivArea.value,
      newmaterialsid: this.myDivNewMat.value,
    };

    if (this.frmStatus === 1) {
      axios
        .post('https://pathfinderserverrestapi.azurewebsites.net/buildingstouserdetail/', PostData)
        .then(res => {
          this.getDataList();
        });
    }
    if (this.frmStatus === 0) {
      axios
        .put(
          'https://pathfinderserverrestapi.azurewebsites.net/buildingstouserdetail/' +
            this.myDivid.value,
          PostData,
        )
        .then(res => {
          this.getDataList();
        });
    }

    this.frmStatus = 0;
    this.showButt();
  }
  butChange() {
    const PostData = {
      buildingtypeid: this.myDivBudType.value,
      buildingage: 10,
    };
    axios
      .put('https://pathfinderserverrestapi.azurewebsites.net/buildingstouser/19', PostData)
      .then(res => {
        //this.getDataList();
      });
  }
  getDataList() {
    // axios.get(baseclsUrl).then(res => {
    //     const _lstDataList = res.data;
    //     if (_lstDataList.length > 0) {

    //         this.setState({ lstDataList: _lstDataList });
    //         this.rowselect(0);
    //         this.CreateGrid();
    //     }

    // });

    // Promise.all(urls.map(url =>

    //     fetch(url)
    //         .then(checkStatus)
    //         .then(parseJSON)
    //         .catch(error => console.log('There was a problem!', error))
    // ))
    //     .then(data => {
    //         JSON.stringify(data[0].message);
    //         this.lstObjectDataList = data[0].message;
    //         this.lstMaterialsDataList = data[1].message;
    //         this.setState({ lstDataList: data[2].message });

    //     });

    Promise.all([
      fetch('https://pathfinderserverrestapi.azurewebsites.net//buildingstouserdetail/gtdet/19'),
      fetch('https://pathfinderserverrestapi.azurewebsites.net/objects'),
      fetch('https://pathfinderserverrestapi.azurewebsites.net/materials'),
      fetch('https://pathfinderserverrestapi.azurewebsites.net/buildingstouser/bdusr/19'),
      fetch('https://pathfinderserverrestapi.azurewebsites.net/buildingtypes'),
    ])
      .then(async ([aa, bb, cc, dd, ee]) => {
        const a = await aa.json();
        this.lstObjectDataList = await bb.json();
        this.lstMaterialsDataList = await cc.json();
        this.lstBldToUser = await dd.json();
        this.lstBuildingType = await ee.json();
        this.setState({ lstDataList: a });
        //this.lstObjectDataList =b;
        //this.lstMaterialsDataList=c;
        //return [a  ]
      })
      .then(responseText => {
        // alert( JSON.stringify(this.lstObjectDataList) );
        console.log(responseText);
        this.rowselect(0);
      })
      .catch(err => {
        console.log(err);
      });
  }

  getObjectsList() {
    axios.get('https://pathfinderserverrestapi.azurewebsites.net/objects').then(res => {
      const _lstDataList = res.data;
      if (_lstDataList.length > 0) {
        this.lstObjectDataList = _lstDataList;
      }
    });
  }
  getMaterialList() {
    axios.get('https://pathfinderserverrestapi.azurewebsites.net/materials').then(res => {
      const _lstDataList = res.data;
      if (_lstDataList.length > 0) {
        this.lstMaterialsDataList = _lstDataList;
      }
    });
  }

  rowselect(iRowIdx) {
    if (iRowIdx === -99) {
    } else {
      if (this.state.lstDataList.length > 0 && this.frmStatus === 0) {
        this.selected_row = iRowIdx;
        let cust = this.state.lstDataList[iRowIdx];
        this.myDivid.value = cust['buildingstouserdetailid'];
        this.myDivObj.value = cust['objectsid'];
        this.myDivMat.value = cust['materialsid'];
        this.myDivNewMat.value = cust['newmaterialsid'];
        this.myDivArea.value = cust['objectarea'];
        this.myDivNumber.value = cust['numberofobjects'];
        //alert( JSON.stringify(this.lstBldToUser) );
        let butus = this.lstBldToUser[0];
        this.myDivBudType.value = butus['buildingtypeid'];
        this.myDiNewVal.value = butus['newvalue'];
        this.myDivPrVal.value = butus['presentvalue'];
      }
    }
  }

  render() {
    return (
      <div>
        <Card className="card">
          <Grid container spacing={3}>
            <Grid item xs={5}>
              <div>
                <Buildings />
              </div>
            </Grid>
            <Grid item xs={7}>
              <Paper className="paper5">
                <div className="paper-content">
                  <Typography variant="h6" component="h3">
                    Calculation:
                  </Typography>
                  <Typography variant="caption" component="p">
                    This page gives you an opportunity to add, edit or delete building types that
                    Pathfinder offers for calculation.
                  </Typography>
                  <List className="list">
                  <ListItem className="list-item">
                      <ListItemAvatar>
                        <Avatar className="two">
                          <HomeIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText className="text">
                        <Typography variant="body2" component="h2">
                          Choose building type:
                        </Typography>
                        <select
                          className="select-css"
                          ref={c => (this.myDivBudType = c)}
                          width={100}
                          onChange={this.butChange}
                        >
                          {this.lstBuildingType.map(team => (
                            <option key={team.typename} value={team.buildingtypeid}>
                              {team.typename}
                            </option>
                          ))}
                        </select>
                      </ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem className="list-item">
                      <ListItemAvatar >
                        <Avatar className="one">
                          <AssignmentTurnedInIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText>
                        <div className="input-field">
                          <input
                            type="number"
                            name="idField"
                            ref={c => (this.myDivid = c)}
                            style={{ width: 250 }}
                            disabled
                          />
                          <label>ID</label>
                        </div>
                      </ListItemText>
                    </ListItem>
                    <ListItem className="list-item">
                      <ListItemAvatar >
                        <Avatar className="three">
                          <WbIncandescentIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText className="text">
                        <Typography variant="body2" component="h2">
                          Choose object:
                        </Typography>
                        <select className="select-css" ref={c => (this.myDivObj = c)}>
                          {this.lstObjectDataList.map(team => (
                            <option key={team.objectname} value={team.objectsid}>
                              {team.objectname}
                            </option>
                          ))}
                        </select>
                      </ListItemText>
                    </ListItem>
                    <ListItem className="list-item">
                      <ListItemAvatar>
                        <Avatar className="four">
                          <BubbleChartIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText className="text">
                        <Typography variant="body2" component="h2">
                          Choose material for the object:
                        </Typography>
                        <select className="select-css" ref={c => (this.myDivMat = c)} width={100}>
                          {this.lstMaterialsDataList.map(team => (
                            <option key={team.materialname} value={team.materialsid}>
                              {team.materialname}
                            </option>
                          ))}
                        </select>
                      </ListItemText>
                    </ListItem>
                    <ListItem className="list-item ">
                      <ListItemAvatar >
                        <Avatar className="five">
                          <BubbleChartIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText className="text">
                        <Typography variant="body2" component="h2">
                          Choose new material to compare:
                        </Typography>
                        <select className="select-css" ref={c => (this.myDivNewMat = c)}>
                          {this.lstMaterialsDataList.map(team => (
                            <option key={team.materialname} value={team.materialsid}>
                              {team.materialname}
                            </option>
                          ))}
                        </select>
                      </ListItemText>
                    </ListItem>
                    <ListItem className="list-item">
                      <ListItemAvatar >
                        <Avatar className="six">
                          <FormatColorTextIcon/>
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText>
                        <div className="input-field">
                          <input
                            type="number"
                            placeholder="0.00"
                            step="0.01"
                            name="objectarea"
                            ref={c => (this.myDivArea = c)}
                            style={{ width: 250 }}
                          />
                          <label>Area</label>
                        </div>
                      </ListItemText>
                    </ListItem>
                    <ListItem className="list-item">
                      <ListItemAvatar >
                        <Avatar className="seven">
                          <Filter1Icon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText>
                        <div className="input-field">
                          <input
                            type="number"
                            placeholder="0"
                            step="1"
                            name="numberofobjects"
                            ref={c => (this.myDivNumber = c)}
                            style={{ width: 250 }}
                          />
                          <label>Number of objects</label>
                        </div>
                      </ListItemText>
                    </ListItem>
                    {/* <ListItem className="list-item">
                      <ListItemAvatar>
                        <Avatar className="house">
                          <AssignmentTurnedInIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText>
                        <p>present val</p>
                        <div className="input-field">
                          <input
                            type="number"
                            name="PresentVal"
                            ref={c => (this.myDivPrVal = c)}
                            style={{ width: 100, borderColor: 'gray', borderWidth: 1 }}
                            disabled
                          />
                          <label for="password">Current Value</label>
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
                        <p>new val</p>
                        <div className="input-field">
                          <input
                            type="number"
                            name="PresentVal"
                            ref={c => (this.myDiNewVal = c)}
                            style={{ width: 100, borderColor: 'gray', borderWidth: 1 }}
                            disabled
                          />
                          <label>New value</label>
                        </div>
                      </ListItemText>
                    </ListItem> */}

                    <ListItem className="list-item">
                      <ListItemText>
                        <Button
                          variant="contained"
                          className="btn2"
                          color="primary"
                          onClick={this.handleNewClick}
                          ref={c => (this.btnNew = c)}
                        >
                          New
                        </Button>

                        <Button
                          variant="contained"
                          className="btn2"
                          color="primary"
                          onClick={this.handleDelClick}
                          ref={c => (this.btnDel = c)}
                        >
                          Delete
                        </Button>

                        <Button
                          variant="contained"
                          className="btn2"
                          color="primary"
                          onClick={this.handleSaveClick}
                          ref={c => (this.btnSave = c)}
                        >
                          Save
                        </Button>
                        <Button
                          variant="contained"
                          color="primary"
                          className="btn2"
                          onClick={this.handleCancelClick}
                          ref={c => (this.btnCancel = c)}
                        >
                          Cancel
                        </Button>
                        <Link to="/result">
                          <Button
                            variant="contained"
                            color="primary"
                            className="btn2"
                            onClick={this.handleCalcClick}
                          >
                            Calculate
                          </Button>
                        </Link>
                      </ListItemText>
                    </ListItem>
                  </List>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </Card>
        <Card className="card2">
          <this.CreateGrid />
        </Card>
      </div>
    );
  }
}

export default calculate;
