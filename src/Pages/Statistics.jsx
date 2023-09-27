import React from 'react';
// import { PieChart, Pie } from 'recharts';

const Statistics = () => {
    const donateData = JSON.parse(localStorage.getItem('linkon'));
    let donated = donateData.length;
    console.log(donated);
    let donatedPercent = donated*100/12;
    let notDonated = 100 - donatedPercent;
    console.log(donatedPercent, notDonated);

    const data = [
        { name: 'donated', value: donatedPercent },
        { name: 'notDonated', value: notDonated }
    ];

    const COLORS = ['#0088FE', '#00C49F'];
    return (
        <div>
            <PieChart width={700} height={700}>
            <Pie data={data} dataKey="value" outerRadius={250} fill="green" />
        </PieChart>
        </div>
    )
}

export default Statistics;