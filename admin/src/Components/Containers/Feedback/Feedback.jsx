import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import feedbackData from '../../../assets/Data/feedbackData';

// Register the components
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const Feedback = ({ className }) => {
  const data = {
    labels: feedbackData.map(item => item.label),
    datasets: [
      {
        label: 'Feedback',
        data: feedbackData.map(item => item.count),
        backgroundColor: [
          'rgba(54, 162, 235, 0.6)',  // Brighter blue
          'rgba(255, 206, 86, 0.6)',  // Brighter yellow
          'rgba(255, 99, 132, 0.6)',  // Brighter red
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom', // Position the legend below the chart
        labels: {
          font: {
            size: 14, // Adjust the font size if necessary
            color: '#000', // Adjust the font color if necessary
          },
        },
      },
    },
    animation: {
      duration: 1500, // Animation duration
    },
  };

  return (
    <div className={`mx-1 bg-custom-light-blue rounded-xl p-4 ${className} w-1/5 `}>
      <h2 className='mb-5'>Feedback</h2>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default Feedback;
