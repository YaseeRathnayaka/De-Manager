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
          'rgba(75, 192, 192, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(255, 99, 132, 0.2)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
    ],
   
  };

  return (
    <div className={`mx-1 bg-custom-light-blue rounded-xl p-4 ${className} w-1/5`}>
      <h2>Feedback</h2>
      <Doughnut data={data} className='mt-11' />
    </div>
  );
};

export default Feedback;
