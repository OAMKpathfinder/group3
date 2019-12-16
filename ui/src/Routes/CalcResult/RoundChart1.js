import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, Legend } from 'recharts';

const data = [
  {
    name: 'Walls', uv: 31.47, pv: 2400, fill: '#8884d8',
  },
  {
    name: 'Windows', uv: 26.69, pv: 4567, fill: '#83a6ed',
  },
  {
    name: 'Doors', uv: 15.69, pv: 1398, fill: '#8dd1e1',
  }
];

const style = {
  top: 0,
  left: 250,
  lineHeight: '24px',
};


export default class RoundChart1 extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/9km41z5z/';

  render() {
    return (
      <RadialBarChart width={500} height={300} cx={150} cy={150} innerRadius={20} outerRadius={140} barSize={10} data={data}>
        <RadialBar minAngle={15} label={{ position: 'insideStart', fill: '#fff' }} background clockWise dataKey="uv" />
        <Legend iconSize={10} width={120} height={140} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
      </RadialBarChart>
    );
  }
}
