import React from 'react';

import Chart from '../Chart/Chart';
// import './ChartBar.css';

const ExpensesChart = props =>{
    const chartDataPoints = [
        { label: 'Jan', value: '0'},
        { label: 'Feb', value: '0'},
        { label: 'March', value: '0'},
        { label: 'Apr', value: '0'},
        { label: 'May', value: '0'},
        { label: 'June', value: '0'},
        { label: 'July', value: '0'},
        { label: 'August', value: '0'},
        { label: 'Septemeber', value: '0'},
        { label: 'October', value: '0'},
        { label: 'November', value: '0'},
        { label: 'December', value: '0'},
        { label: 'Jan', value: '0'},
        { label: 'Feb', value: '0'},
        { label: 'March', value: '0'},
        { label: 'Apr', value: '0'},
        { label: 'May', value: '0'},
        { label: 'June', value: '0'},
        { label: 'July', value: '0'},
        { label: 'August', value: '0'},
        { label: 'Septemeber', value: '0'},
        { label: 'October', value: '0'},
        { label: 'November', value: '0'},
        { label: 'December', value: '0'},
    ];

    for (const expense of props.expenses) {
        const expenseMonth = expense.date.getMonth(); // starting at 0 => January => 0
        chartDataPoints[expenseMonth].value += expense.amount;
      }
    
      return <Chart dataPoints={chartDataPoints} />;
}

export default ExpensesChart;