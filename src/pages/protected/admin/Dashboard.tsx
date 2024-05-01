import { FC } from "react";
import { BarChart, LineChart } from "@/components/charts";
import { Grid } from "@/components/grid";
// import { DoughnutCard } from "@/components/ui";
import { barChartOptions, lineChartOptionss } from "@/constants";
import dummy from "@/dummy/aggregator.json";

const Dashboard: FC = () => {
  // component variables
  let labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Received",
        data: labels.map(() => 4),
        backgroundColor: `#2196F3`,
      },
      {
        label: "Declined",
        data: labels.map(() => 5),
        backgroundColor: `#EF1E1E`,
      },
    ],
  };

  const dataa = {
    labels,
    datasets: [
      {
        label: "Received",
        data: labels.map(() => Math.random()),
        lineTension: 0.5,
        pointRadius: 0,
        borderColor: "rgba(52, 122, 226, 0.8)",
        backgroundColor: "rgba(52, 122, 226, 0.2)",
      },
    ],
  };

  return (
    <div className="w-full px-3">
      {/* dougnuts section */}
      <div>
        <h2 className="my-2">Applications Received</h2>

        <div className="w-full h-[250px]">
          <LineChart data={dataa} options={lineChartOptionss} />
        </div>
      </div>

      {/* charts section*/}
      <div className="w-full mt-[34px]">
        <h2>Application Received vs Declined </h2>
        <div className="  w-full">
          {/* <div className="flex items-center gap-x-[18px]">
            <span>Showing Data</span>

            <YearDropdown
              endYear={2026}
              onChange={() => {}}
              selectedYear={2023}
              startYear={2023}
            />
          </div> */}

          <div className="h-[319px] bg-[#F8F9FA] px-4 border py-5 rounded-[5px]">
            <BarChart data={data} options={barChartOptions} />
          </div>
        </div>
      </div>

      {/* table section */}
      <div className="w-full mt-[31px]">
        <Grid data={dummy} pageSize={30} tableStyles={` h-[300px] w-full`} />
      </div>
    </div>
  );
};

export default Dashboard;
