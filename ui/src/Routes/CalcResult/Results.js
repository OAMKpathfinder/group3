import React, { Component } from 'react';
// import { PieChart, Pie, Sector } from 'recharts';
// import { forwardRef } from 'react';
// import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper';
import Chart1 from './RoundChart1.js';
import HomeIcon from '@material-ui/icons/Home';
import LayersIcon from '@material-ui/icons/Layers';
import Graph from './Graph.js';
import BatteryCharging50Icon from '@material-ui/icons/BatteryCharging50';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import ReactDataGrid from 'react-data-grid';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import img1 from './4.png';
import CardContent from '@material-ui/core/CardContent';
import axios from 'axios';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import './Results.css';

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
      key: 'objectarea',
      name: 'Object area',
      width: 100,
    },
    {
      key: 'presentvalue',
      name: 'Current Value',
      width: 110,
    },
    {
      key: 'newvalue',
      name: 'New Value',
      width: 100,
    },
  ];
  const urls = [
    'https://pathfinderserverrestapi.azurewebsites.net/objects',
    'https://pathfinderserverrestapi.azurewebsites.net/materials',
    'https://pathfinderserverrestapi.azurewebsites.net//buildingstouserdetail/gtdet/19',
  ];

class Results extends Component {
  constructor() {
    super();
    this.getDataList = this.getDataList.bind(this);
    this.state = {
      lstDataList: [],
    };

    this.CreateGrid = this.CreateGrid.bind(this);

    this.selected_row = 0;
    this.state = {
      lstDataList: [],
    };
    this.lstObjectDataList = [];
    this.lstMaterialsDataList = [];
    this.getDataList();
  }

  componentDidMount() {
    this.getDataList();
  }

  getDataList() {
    axios.get(baseclsUrl).then(res => {
      const _lstDataList = res.data;
      if (_lstDataList.length > 0) {
        this.setState({ lstDataList: _lstDataList });
        console.log(_lstDataList);
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
        />
      </div>
    );
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

  render() {
    return (
      <Card className="card">
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Card className="card-build">
              <CardActionArea>
                <CardMedia className="media" title="Contemplative Reptile">
                  <img alt="" src={img1} className="img" />
                </CardMedia>
                <CardContent>
                  <Typography gutterBottom variant="body1" component="h2">
                    Condominium (Historic), 1930
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Manual
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Paper className="paper">
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
                        <HomeIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Age of the Building: 87 years" secondary="Jan 9, 1932" />
                  </ListItem>
                  <ListItem className="list-item">
                    <ListItemAvatar>
                      <Avatar className="area">
                        <LayersIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Area: 230 &#13217;"
                      secondary="Total area of the building"
                    />
                  </ListItem>
                  <ListItem className="list-item">
                    <ListItemAvatar className="energy">
                      <Avatar>
                        <BatteryCharging50Icon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Energy loss severity: High"
                      secondary="Efficiency of the building"
                    />
                  </ListItem>
                </List>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={5}>
            <Card className="card1">
              <div className="chart">
                <Graph />
              </div>
            </Card>
          </Grid>
        </Grid>
        <Divider />
        <Grid container spacing={1}>
          <Grid item xs={8}>
            <Card className="card1">
            <this.CreateGrid />
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card className="card1">
              <div className="chart">
                <Chart1 />
              </div>
            </Card>
          </Grid>
        </Grid>
      </Card>
    );
  }
}

export default Results;
