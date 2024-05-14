import { FC, useState } from "react";
import OrgDashboardDetailsCard from "@/components/reusables/OrgDashboardDetailsCard";
import { formatLargeNumber, getLastFiveYears } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/api/axiosInstance";
import MainActionSubHeader from "@/components/reusables/MainActionSubHeader";
import { StackedLineChart } from "@/components/charts/StackedLineChart";
import InsuranceApplicationsGrid from "@/components/grid/InsuranceApplicationsGrid";
import { Dropdown } from "@/components/ui";

const Dashboard: FC = () => {
  const insuranceApplications = useQuery({
    queryKey: ["get-applications"],
    queryFn: () => axiosInstance.get(`/applications/insurance`),
  });

  const [yearSelector, setYearSelector] = useState({
    label: new Date().getFullYear(),
    value: new Date().getFullYear(),
  });

  return (
    <div className="w-full px-3">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-6">
        <OrgDashboardDetailsCard
          title="Applications"
          value={formatLargeNumber(3500)}
          viewAllUrl="/aggregator/database"
          percentageValue={-3}
          icon={
            <div className="size-7 flex justify-center items-center bg-yellow-100 rounded-lg">
              <img src="/assets/icons/org-dashboard/doc.svg" />
            </div>
          }
        />
        <OrgDashboardDetailsCard
          title="Packages"
          value={formatLargeNumber(500)}
          viewAllUrl="/aggregator/projects"
          percentageValue={1}
          icon={
            <div className="size-7 flex justify-center items-center bg-purple-100 rounded-lg">
              <img src="/assets/icons/org-dashboard/project.svg" />
            </div>
          }
        />
        <OrgDashboardDetailsCard
          title="Staff"
          value={formatLargeNumber(300)}
          viewAllUrl="/aggregator/devices"
          percentageValue={2}
          icon={
            <div className="size-7 flex justify-center items-center bg-green-100 rounded-lg">
              <img src="/assets/icons/org-dashboard/staff.svg" />
            </div>
          }
        />
        <OrgDashboardDetailsCard
          title="Carbon Offset"
          value={formatLargeNumber(20)}
          viewAllUrl="/aggregator/staff"
          percentageValue={1}
          icon={
            <div className="size-7 flex justify-center items-center bg-green-100 rounded-lg">
              <img src="/assets/icons/org-dashboard/devices.svg" />
            </div>
          }
        />
      </div>
      {/* Chart */}

      <div className="my-10">
        <div className="flex justify-between">
          <p className="font-poppins font-bold pb-8 text-main text-xl">
            Applications
          </p>
          <Dropdown
            name="yearSelector"
            wrapperClassName={"w-20 border border-gray-500 shadow-lg"}
            value={yearSelector}
            onOptionChange={(value) => setYearSelector(value)}
            options={getLastFiveYears()}
          />
        </div>
        <StackedLineChart />
        <div className="mt-6 flex justify-center gap-x-3 items-center"></div>
      </div>

      {/* Subheader */}
      <MainActionSubHeader
        title="Create a package"
        buttonText="Create Package"
        subTitle="Create packages to allow users see and apply to your services"
        actionUrl="/insurance/packages/add"
      />
      {/* table section */}
      <div className="flex gap-4 flex-wrap">
        {
          insuranceApplications.isSuccess &&
            insuranceApplications.data?.data.data.applications.length >= 1 && (
              <InsuranceApplicationsGrid
                data={insuranceApplications.data?.data.data.applications}
                isUpdating={
                  insuranceApplications.isLoading ||
                  insuranceApplications.isFetching
                }
              />
            )
          // aggApplications.data?.data.data.applications.map(
          //   (app: any, i: number) => <AggAppCard app={app} key={i} />
          // )
        }
      </div>
    </div>
  );
};

export default Dashboard;
