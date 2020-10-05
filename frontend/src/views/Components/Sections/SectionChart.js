import { Divider, Typography } from '@material-ui/core';
import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine,
} from 'recharts';
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";

const data = [
  {
    name: 'Page A', positive: 4000, negative: 2400, neutral: 2400,
  },
  {
    name: 'Page B', positive: 2000, negative: 200, neutral: 240,
  },
  {
    name: 'Page C', positive: -4000, negative: 400, neutral: 200,
  },
];

export default class ChartPosNeg extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/q68cz43w/';

  render() {
    return (
        <div >
            <Divider variant='middle'/>
            <h2 style={{marginLeft:"30px"}}>Hasil:</h2>
            <GridContainer container justify="center" >
           
            <GridItem xs={12} sm={12} md={8} lg={6}>
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
        <ReferenceLine y={0} stroke="#000" />
        <Bar dataKey="positive" fill="#8884d8" />
        <Bar dataKey="negative" fill="#82ca9d" />
      </BarChart>
      </GridItem></GridContainer>
      </div>
    );
  }
}
