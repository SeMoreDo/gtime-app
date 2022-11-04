import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRadio: false,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Energía trazada',
    },
  },
};

const labels = ['Marzo', 'Abril', 'Mayo'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Alena',
      data: [22.08,20.45,18.83],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Río Escondido',
      data: [405.66,379.23,410.59],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'Granja Solar',
      data: [516.28,542.33,596.64],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    }
  ],
};

export default function Chart() {
  return <Bar width={400}
  height={300} options={options} data={data} />;
}