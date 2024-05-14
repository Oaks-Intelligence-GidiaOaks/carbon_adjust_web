import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

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
  maintainAspectRatio: true,
  plugins: {
    legend: {
      display: false,
      position: "top" as const,
    },
    title: {
      display: false,
      text: "Chart.js Bar Chart",
    },
  },
  scales: {
    x: {
      ticks: {
        font: {
          family: "Poppins", // Add your font here to change the font of your legend label
        },
      },
    },
    y: {
      ticks: {
        font: {
          family: "Poppins", // Add your font here to change the font of your legend label
        },
      },
    },
  },
};

const labels = [
  "Heating",
  "Cooling",
  "SHS",
  "Insulation",
  "Lighting",
  "Energy Efficiency",
  "Other",
];

export const data = {
  labels,
  datasets: [
    {
      label: "",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(206, 231, 253, 1)",
      hoverBackgroundColor: "rgba(14, 136, 246, 1)",
      borderRadius: 10,
      width: 20,
      maxBarThickness: 33,
    },
  ],
};

export function VerticalBarChart() {
  return <Bar options={options} data={data} />;
}
