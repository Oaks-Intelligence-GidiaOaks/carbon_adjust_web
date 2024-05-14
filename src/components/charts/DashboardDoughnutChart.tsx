// import { Doughnut } from "react-chartjs-2";

// function DashboardDoughnutChart() {

//  const data = {...}

//  const options = {...}

//  const plugins = [{
//      beforeDraw: function(chart: any) {
//       var width = chart.width,
//           height = chart.height,
//           ctx = chart.ctx;
//           ctx.restore();
//           var fontSize = (height / 160).toFixed(2);
//           ctx.font = fontSize + "em sans-serif";
//           ctx.textBaseline = "top";
//           var text = "Foo-bar",
//           textX = Math.round((width - ctx.measureText(text).width) / 2),
//           textY = height / 2;
//           ctx.fillText(text, textX, textY);
//           ctx.save();
//      }
//    }]

//   return (

//         <Doughnut
//           type="doughnut"
//           data={data}
//           options{options}
//           plugins={plugins}
//          />
//   );
// }

import { formatLargeNumber } from "@/utils";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const plugins = [
  {
    id: "customText2",
    beforeDraw: function (chart: any) {
      var width = chart.width,
        height = chart.height,
        ctx = chart.ctx;
      ctx.restore();
      var fontSize = (height / 160).toFixed(2);
      ctx.font = fontSize + "em sans-serif";
      ctx.textBaseline = "top";
      const formattedNumber = formatLargeNumber(2603);
      var text = formattedNumber,
        textX = Math.round((width - ctx.measureText(text).width) / 2),
        textY = height / 2.5;
      ctx.fillText(text, textX, textY);
      ctx.save();
    },
  },
  {
    id: "customText",
    beforeDraw: function (chart: any) {
      var width = chart.width,
        height = chart.height,
        ctx = chart.ctx;
      ctx.restore();
      var fontSize = (height / 200).toFixed(2);
      ctx.font = fontSize + "em sans-serif";
      ctx.textBaseline = "top";
      var text = "users",
        textX = Math.round((width - ctx.measureText(text).width) / 2),
        textY = height / 2;
      ctx.fillText(text, textX, textY);
      ctx.save();
    },
  },
];

export const options: any = {
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
};

const data = {
  labels: [
    "Heating",
    "Cooling",
    "SHS",
    "Insulation",
    "Lighting",
    "Energy Efficiency",
    "Other",
  ],
  datasets: [
    {
      label: "",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export function DashboardDoughnutChart() {
  return <Doughnut data={data} options={options} plugins={plugins} />;
}
