import React, { PureComponent } from 'react'
import { PieChart, Pie, Sector } from 'recharts';
import { forwardRef } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import CardHeader from '@material-ui/core/CardHeader';
import Divider from '@material-ui/core/Divider';
import CardContent from '@material-ui/core/CardContent';
import './Results.css'

const data01 = [
  { name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 }, { name: 'Group D', value: 200 },
];
const data02 = [
  { name: 'A1', value: 100 },
  { name: 'A2', value: 300 },
  { name: 'B1', value: 100 },
  { name: 'B2', value: 80 },
  { name: 'B3', value: 40 },
  { name: 'B4', value: 30 },
  { name: 'B5', value: 50 },
  { name: 'C1', value: 100 },
  { name: 'C2', value: 200 },
  { name: 'D1', value: 150 },
  { name: 'D2', value: 50 },
];


export default class Results extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/hqnrgxpj/';

  onPieEnter = (data, index) => {
    this.setState({
      activeIndex: index,
    });
  };
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
            <PieChart width={400} height={400}>
              <Pie data={data01} dataKey="value" cx={200} cy={200} outerRadius={60} fill="#8884d8" />
              <Pie data={data02} dataKey="value" cx={200} cy={200} innerRadius={70} outerRadius={90} fill="#82ca9d" label />
            </PieChart>
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