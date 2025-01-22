import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

// Register required components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const SmoothLineChart = ({color}) => {
  const data = {
    labels: ["May 12", "May 13", "May 14", "May 15", "May 16", "May 17", "May 18"],
    datasets: [
      {
        data: [20, 50, 7, 100, 30, 80, 100], // Keep numeric values
        borderColor: color, 
        borderWidth:3,
        pointBackgroundColor: "transparent",
        pointBorderWidth: 0,
        tension: 0.5,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: false, // Disable legend
    },
    scales: {
      x: {
        display: false, // Hide x-axis
      },
      y: {
        display: false, // Hide y-axis
      },
    },
    elements: {
      line: {
        borderJoinStyle: "round", // Smooth edges
      },
    },
  };

  return (
    <div style={{ width: "100%", height: "30px" }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default SmoothLineChart;
