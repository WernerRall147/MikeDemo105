import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { SurfForecast } from '../models/SurfModels';
import '../styles/WaveHeightChart.css';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface WaveHeightChartProps {
  forecast: SurfForecast;
}

const WaveHeightChart: React.FC<WaveHeightChartProps> = ({ forecast }) => {
  const hourlyData = forecast.hourly;
  
  // Extract data for the chart
  const labels = hourlyData.map(hour => hour.time);
  const waveHeights = hourlyData.map(hour => hour.waveHeight);
  const windSpeeds = hourlyData.map(hour => hour.windSpeed / 10); // Scale down for better visualization
  
  const chartData = {
    labels,
    datasets: [
      {
        label: 'Wave Height (m)',
        data: waveHeights,
        borderColor: '#1E88E5',
        backgroundColor: 'rgba(30, 136, 229, 0.2)',
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#1E88E5',
        pointBorderColor: '#fff',
        pointRadius: 4,
      },
      {
        label: 'Wind Speed (km/h)',
        data: windSpeeds,
        borderColor: '#FF8F00',
        backgroundColor: 'rgba(255, 143, 0, 0.1)',
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#FF8F00',
        pointBorderColor: '#fff',
        pointRadius: 4,
        yAxisID: 'y1',
      }
    ],
  };
  
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              if (context.dataset.label === 'Wind Speed (km/h)') {
                // Convert back to actual wind speed value
                label += (context.parsed.y * 10).toFixed(1) + ' km/h';
              } else {
                label += context.parsed.y.toFixed(1) + ' m';
              }
            }
            return label;
          }
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Wave Height (m)'
        },
        grid: {
          color: 'rgba(200, 200, 200, 0.2)',
        },
        ticks: {
          callback: function(value: any) {
            return value.toFixed(1) + 'm';
          }
        }
      },
      y1: {
        beginAtZero: true,
        position: 'right' as const,
        title: {
          display: true,
          text: 'Wind Speed (km/h)'
        },
        grid: {
          drawOnChartArea: false,
        },
        ticks: {
          callback: function(value: any) {
            // Convert back to actual wind speed value
            return (value * 10).toFixed(0) + 'km/h';
          }
        }
      }
    },
  };

  return (
    <div className="wave-chart-container">
      <Line data={chartData} options={options} className="wave-chart" />
    </div>
  );
};

export default WaveHeightChart;
