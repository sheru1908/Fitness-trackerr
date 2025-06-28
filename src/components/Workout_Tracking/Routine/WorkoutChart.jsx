import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, BarElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';

ChartJS.register(LineElement, BarElement, PointElement, LinearScale, Title, CategoryScale);

const WorkoutChart = ({ weightData, frequencyData, historyData }) => {
  const weightChartData = {
    labels: weightData.map(entry => new Date(entry.date).toLocaleDateString()),
    datasets: [
      {
        label: 'Weight Progress',
        data: weightData.map(entry => entry.weight),
        fill: false,
        backgroundColor: 'rgba(144, 202, 249, 0.6)', // Light blue
        borderColor: 'rgba(25, 118, 210, 1)', // Darker blue
        borderWidth: 2,
        pointBackgroundColor: 'rgba(25, 118, 210, 1)', // Darker blue
        pointRadius: 5,
      },
    ],
  };

  const frequencyChartData = {
    labels: frequencyData.map(entry => new Date(entry.date).toLocaleDateString()),
    datasets: [
      {
        label: 'Workout Frequency',
        data: frequencyData.map(entry => entry.count),
        backgroundColor: 'rgba(255, 204, 128, 0.6)', // Light yellow
        borderColor: 'rgba(255, 140, 0, 1)', // Orange
        borderWidth: 2,
        hoverBackgroundColor: 'rgba(255, 204, 128, 0.8)', // Lighter yellow
        hoverBorderColor: 'rgba(255, 140, 0, 1)', // Orange
      },
    ],
  };

  const historyChartData = {
    labels: historyData.map(entry => new Date(entry.date).toLocaleDateString()),
    datasets: [
      {
        label: 'Exercise History',
        data: historyData.map(entry => entry.value),
        fill: false,
        backgroundColor: 'rgba(255, 213, 79, 0.6)', // Light yellow-orange
        borderColor: 'rgba(255, 87, 34, 1)', // Bright orange
        borderWidth: 2,
        pointBackgroundColor: 'rgba(255, 87, 34, 1)', // Bright orange
        pointRadius: 5,
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-8 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Weight Chart */}
        <div className="bg-gradient-to-r from-blue-300 to-blue-500 text-white border rounded-lg p-6 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl mb-6 md:mb-0">
          <h2 className="text-2xl font-semibold mb-4">Workout Progress</h2>
          <div className="mb-8">
            <Line data={weightChartData} />
          </div>
        </div>

        {/* Frequency Chart */}
        <div className="bg-gradient-to-r from-yellow-200 to-yellow-400 text-white border rounded-lg p-6 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl mb-6 md:mb-0">
          <h2 className="text-2xl font-semibold mb-4">Workout Frequency</h2>
          <div className="mb-8">
            <Bar data={frequencyChartData} />
          </div>
        </div>
      </div>

      {/* History Chart */}
      <div className="bg-gradient-to-r from-orange-300 to-orange-500 text-white border rounded-lg p-6 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl mt-6">
        <h2 className="text-2xl font-semibold mb-4">Exercise History</h2>
        <div className="mb-8">
          <Line data={historyChartData} />
        </div>
      </div>
    </div>
  );
};

export default WorkoutChart;
