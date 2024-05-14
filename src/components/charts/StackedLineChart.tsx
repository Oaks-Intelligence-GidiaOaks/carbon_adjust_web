import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  // Title,
  // Tooltip,
  // Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
// import { defaults } from 'react-chartjs-2';

// defaults.font.family = 'font name...';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler
  // Title
  // Tooltip
  // Legend
);

export const options = {
  responsive: true,
  interaction: {
    mode: "index" as const,
    intersect: false,
  },
  stacked: false,
  plugins: {
    // title: {
    //   display: true,
    //   text: "Chart.js Line Chart - Multi Axis",
    // },
    legend: {
      display: false,
    },
  },
  elements: {
    line: {
      tension: 0.4, // bezier curves
    },
  },
  tooltips: {
    font: {
      family: "Poppins", // Add your font here to change the font of your legend label
    },
    backgroundColor: "#f5f5f5",
    titleFontColor: "#333",
    bodyFontColor: "#666",
    bodySpacing: 4,
    xPadding: 12,
    mode: "nearest",
    intersect: 0,
    position: "nearest",
  },
  scales: {
    y: {
      type: "linear" as const,
      display: true,
      position: "left" as const,
      ticks: {
        font: {
          family: "Poppins", // Add your font here to change the font of your legend label
        },
      },
    },
    x: {
      ticks: {
        font: {
          family: "Poppins", // Add your font here to change the font of your legend label
        },
      },
    },
    // y1: {
    //   type: "linear" as const,
    //   display: true,
    //   position: "right" as const,
    //   grid: {
    //     drawOnChartArea: false,
    //   },
    // },
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Received",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: "rgb(243, 245, 255, 0.7)",
      backgroundColor: "rgba(243, 245, 255, 0.7)",
      yAxisID: "y",
      fill: true,
    },
    {
      label: "Approved",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: "rgb(249, 151, 138, 0.8)",
      backgroundColor: "rgba(249, 151, 138, 0.8)",
      yAxisID: "y",
      fill: true,
    },
    {
      label: "Rejected",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: "rgb(205, 228, 254, 0.6)",
      backgroundColor: "rgba(205, 228, 254, 0.6)",
      yAxisID: "y",
      fill: true,
    },
  ],
};

export function StackedLineChart() {
  return <Line options={options} data={data} />;
}
