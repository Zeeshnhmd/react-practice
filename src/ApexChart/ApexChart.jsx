import React from 'react';
import Chart from 'react-apexcharts';

const ApexChart = () => {
	const chartOptions = {
		series: [
			{
				name: 'Online Customers',
				data: [0, 29, 10, 36, 68, 25, 45],
			},
			{
				name: 'Store Customers',
				data: [0, 10, 8, 15, 13, 20, 13],
			},
		],
		options: {
			color: ['#6ab04c', '#2980b9'],
			chart: {
				background: 'transparent',
			},
			dataLabels: {
				enabled: false,
			},
			stroke: {
				curve: 'smooth',
			},
			xaxis: {
				line: { show: true },
				categories: ['l', 'll', 'lll', 'lV', 'V', 'Vl', 'Vll'],
			},
			yaxis: { line: { show: true } },
			legend: {
				position: 'top',
			},
			grid: {
				show: true,
			},
		},
	};
	return (
		<div>
			<Chart
				options={chartOptions.options}
				series={chartOptions.series}
				type="line"
				height="600px"
				width="100%"
			/>
		</div>
	);
};

export default ApexChart;
