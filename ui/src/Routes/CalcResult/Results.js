import React, { Component } from 'react'
// import { PieChart, Pie, Sector } from 'recharts';
// import { forwardRef } from 'react';
// import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import CardHeader from '@material-ui/core/CardHeader';
import Divider from '@material-ui/core/Divider';
import CardContent from '@material-ui/core/CardContent';
import axios from 'axios';
import './Results.css'

const baseclsUrl = 'https://pathfinderserverrestapi.azurewebsites.net//buildingstouserdetail/gtdet/19';



class Results extends Component {
  constructor() {
    super();
    this.getDataList = this.getDataList.bind(this);
    this.state = {
        lstDataList: []
    };
    this.getDataList();
  }

  getDataList() {
    axios.get(baseclsUrl).then(res => {
        const _lstDataList = res.data;
        if (_lstDataList.length > 0) {

            this.setState({ lstDataList: _lstDataList });
            console.log(this.lstDataList);
        }


    });
  }
  
  render() {
    return (
      <Card className='card'>
        <CardHeader
          title="Results"
        />
        <Divider />
        <CardContent>
          {/* <div className="progress">
            <LinearProgress />
          </div> */}
          <Divider />
          <div className='results'>
          <div className='av'>
            <Typography className='text'>
              Area:
            </Typography>
          </div>
          <br></br>
          <div classname='av'>
            <Typography className='text'>
              Current value:
            </Typography>
          </div>
          <br></br>
          <div className='av'>
            <Typography className='text'>
              New value:
            </Typography>
          </div>
          </div>
        </CardContent>
      </Card>
    );
    }
  }

export default Results;