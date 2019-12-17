import React, { PureComponent } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: 'Walls', Old: 4000, New: 2400, amt: 2400,
  },
  {
    name: 'Windows', Old: 3000, New: 1398, amt: 2210,
  },
  {
    name: 'Floors', Old: 2000, New: 9800, amt: 2290,
  },
  {
    name: 'Doors', Old: 2780, New: 3908, amt: 2000,
  }
];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

  render() {
    return (
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Old" fill="#99bbff" />
        <Bar dataKey="New" fill="#b3ff99" />
      </BarChart>
    );
  }
}
