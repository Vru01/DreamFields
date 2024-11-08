import { scale } from 'chroma-js';
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Science', value: 400 },
  { name: 'Math', value: 300 },
  { name: 'History', value: 300 },
  { name: 'Art', value: 200 },
  { name: 'Biology', value: 300 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#243fa2'];

const PieChartComponent = () => {
  return (
    <div
      style={{
        textAlign: 'end',
        transform: 'scale(0.9)',
        zIndex: 10,
        display: 'flex',
        justifyContent: 'flex-end', // Aligns to the right horizontally
        alignItems: 'flex-start',
        marginTop: '-100px',
      }}
    >
      {/* <h2 className="w-full">Weightage of Recommendations</h2> */}
      <PieChart height={500} width={500}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
          outerRadius={150}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        {/* <Legend /> */}
      </PieChart>
    </div>
  );
};

export default PieChartComponent;
