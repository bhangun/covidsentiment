import { Container, Divider } from '@material-ui/core';
import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine,
} from 'recharts';
import Badge from '../../../components/Badge/Badge.js';
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import ResultTable from './ResultTable.js';

/* const data = [
  {
    name: 'Page A', positive: 4000, negative: 2400, neutral: 2400,
  },
  {
    name: 'Page B', positive: 2000, negative: 200, neutral: 240,
  },
  {
    name: 'Page C', positive: -4000, negative: 400, neutral: 200,
  },
]; */

export const ResultChart=({result, ...props})=> {
  const { polarity, 
    isHoax,
   } = result
  const data = [{ name: "Kontent", 
      positive:result.positive,
      negative:result.negative}
    ]

  return (
    <div >
      <Divider variant='middle'/>
      {/* <h2 style={{marginLeft:"30px"}}>Hasil:</h2> */}
      <GridContainer container justify="center" >
        <div >
          <span><div style={{fontSize:30}}>Polarity</div>
            <Badge color="primary" >
              <div style={{fontSize:30}}>{polarity}</div>
            </Badge> 
          </span>
<div>
          <Badge color="warning"><div style={{fontSize:20}}>{isHoax}</div></Badge>
          </div>
        </div>
        <GridItem  xs={12} sm={12} md={8} lg={6}>
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
            <Bar dataKey="positive"  fill="#82ca9d"/>
            <Bar dataKey="negative"  fill="#8884d8"/>
          </BarChart>
        </GridItem>
        <GridItem xs={10} >
          <ResultTable result={result} />
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default ResultChart
