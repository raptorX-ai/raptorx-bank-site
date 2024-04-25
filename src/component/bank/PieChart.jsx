import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const PieChart = ({ data }) => {
  const chartContainer = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    
    chartInstance.current = new Chart(chartContainer.current, {
      type: 'pie',
      data: data,
      options: {
        plugins: {
          legend: {
            position: 'bottom', // Position legend at the bottom
          },
        },
        aspectRatio: 3.5, // Set aspect ratio for the chart
        responsive: true, // Enable responsiveness
        maintainAspectRatio: true, // Do not maintain aspect ratio
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data]);

  return <canvas ref={chartContainer} width={500} height={500} />;
};

export default PieChart;
