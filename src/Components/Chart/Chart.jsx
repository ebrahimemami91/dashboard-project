import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, CartesianGrid, Tooltip } from 'recharts';



import './Chart.css'
export default function chart({data, grid,title}) {
  return (
   <div className="chart">
    <h3 className="chartTitle">{title}</h3>
    <ResponsiveContainer width="100%" aspect={4}>
      <LineChart data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        { grid &&<CartesianGrid stroke="#ccc" strokeDasharray={10} />}
        <XAxis dataKey="name" />
        <Tooltip/> 
      </LineChart>
    </ResponsiveContainer>
  </div> 
  )
}
