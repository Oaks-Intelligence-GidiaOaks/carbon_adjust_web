// import DemandChart from "../../components/charts/DemandChart";
// import Filter from "../../components/reuseable/Filter";
// import YearDropDown from "../../components/reuseable/YearDropDown";
// import FinancialInstitutionGrid from "../../components/grid/FinancialInstitutionGrid";
// import pieChartPlaceholder from "../../assets/epc-rating.svg";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
import FinancePackageCard from "@/components/ui/FinancePackageCard";
import Card from "@/components/ui/Card";
// import HiaPackageCard from "@/components/ui/HiaPackageCard";
import TopHiaCard from "@/components/ui/TopHiaCard";
import { ProgressBar } from "@/components/ui";
import {
  chartEPCRatings,
  // columns,
  // dummyHiaPackages,
  epcColors,
  financeColumns,
  finImage1,
  finImage2,
  finImage3,
  finImage4,
  image1,
  image2,
  image3,
  image4,
  placeholderHIAPackages,
} from "@/constants";
import PackageCard from "@/components/reusables/PackageCard";
import { Finance } from "@/types/general";
import { DataTable } from "@/components/tables/DataTable";
import { useEffect, useState } from "react";
import { EpcRatingChart } from "@/components/charts";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";

const Dashboard = () => {
  const userData = useSelector((state: RootState) => state.user.user);
  // const get_hia_packages = useQuery({
  //   queryKey: ["get_hia_packagess"],
  //   queryFn: () => axios.get("package/hia").then((res) => res.data),
  // });

  // const get_finance_packages = useQuery({
  //   queryKey: ["get_finance_packages"],
  //   queryFn: () => axios.get("package/finance").then((res) => res.data.data),
  // });

  // function getCurrentYear() {
  //   return new Date().getFullYear();
  // }

  const [tableData, setTableData] = useState<Finance[]>([]);

  async function getData(): Promise<Finance[]> {
    // Fetch data from your API here.
    return [
      {
        id: "728ed52f",
        logo: finImage1,
        name: "Bank of Carbon Credit",
        apr: "12%",
        loanTerm: "10 years",
        MaxLoanAmount: "£23,000",
      },
      {
        id: "728ed52f",
        logo: finImage4,
        name: "Citibank",
        apr: "12%",
        loanTerm: "10 years",
        MaxLoanAmount: "£23,000",
      },
      {
        id: "728ed52f",
        logo: finImage2,
        name: "Chase Bank",
        apr: "12%",
        loanTerm: "10 years",
        MaxLoanAmount: "£23,000",
      },
      {
        id: "728ed52f",
        logo: finImage3,
        name: "Berkshare Holdings",
        apr: "12%",
        loanTerm: "10 years",
        MaxLoanAmount: "£23,000",
      },
      // ...
    ];
  }

  useEffect(() => {
    getData().then((data) => {
      setTableData(data);
    });
  }, []);

  return (
    <div className="pt-6 px-6 pb-20 bg-white">
      <div className="grid grid-cols-5 ">
        <div className="col-span-3 flex flex-col h-full">
          <span className="text-[18px] flex-1 leading-[20px] font-medium font-poppins text-sub-header ">
            EPC Performance Rating
          </span>
          <div className="relative bg-white shadow-md shadow-blue-main/20 p-4 mt-4 rounded-xl flex h-full">
            <img
              src="/assets/graphics/epc-bg-left.svg"
              className="absolute bottom-0 left-0"
            />
            <img
              src="/assets/graphics/epc-bg-right.svg"
              className="absolute bottom-0 right-0"
            />
            <div className="w-[40%] pt-4 h-full font-poppins text-4xl font-medium">
              <p>
                Your EPC Rating is{" "}
                <span className="text-blue-main font-semibold text-5xl">
                  {userData?.epcRating}
                </span>
              </p>
              <p className="relative text-xl font-normal mx-5 pt-6 w-1/2">
                How you compare to other users
                <img
                  src="/assets/graphics/gold-arrow.svg"
                  alt="arrow"
                  className="absolute top-1/2 -right-12"
                />
              </p>
            </div>
            <div className="flex-1 h-full flex justify-center items-center">
              {/* Chart goes here */}
              {/* <img
                src="/assets/graphics/epc-chart-placeholder.svg"
                className="block w-[200%]"
              /> */}
              <>
                <div className="flex-[0.7] flex justify-center">
                  <EpcRatingChart />
                </div>
                <div className="w-full flex items-end min-[510px]:w-[clamp(100px,10%,160px)]">
                  <div className="p-2 w-full flex flex-wrap justify-center gap-x-3 gap-y-2 min-[510px]:flex-col">
                    {Object.entries(epcColors).map((color, i) => (
                      <div key={i} className="flex gap-x-1 items-center h-fit">
                        <div
                          style={{ background: color[1] }}
                          className={`w-4 h-4 rounded-full flex items-center justify-center`}
                        >
                          <span className="text-sm text-white">{color[0]}</span>
                        </div>
                        <span className="text-sm text-main whitespace-nowrap">
                          {
                            chartEPCRatings[
                              color[0] as keyof typeof chartEPCRatings
                            ]
                          }
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            </div>
          </div>
        </div>

        <div className="col-span-2 px-3">
          <div className="flex flex-col pt-2">
            <div className="flex items-center justify-between ">
              <span className="text-[16px] leading-[20px] font-medium font-poppins text-sub-header">
                Top Home Improvement Agencies
              </span>
              <button className="text-[14px] leading-[12px] font-normal font-poppins text-main text-[#2196F3]">
                See More
              </button>
            </div>

            <div className="p-2 h-full rounded-lg flex flex-col gap-[1px] mt-4 overflow-hidden bg-gray-100">
              <TopHiaCard
                name="Homes Realty"
                image={image1}
                retrofitCount="267,502"
                className="rounded-t"
              />
              <TopHiaCard
                name="Brown Boys Roofing"
                image={image3}
                retrofitCount="217,034"
              />
              <TopHiaCard
                name="Roofing Construction"
                image={image4}
                retrofitCount="193,205"
              />
              <TopHiaCard
                name="Billings Roofing & Solar"
                image={image2}
                retrofitCount="154,005"
                className="rounded-b"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="py-3">
          <p className="text-lg font-medium font-poppins">
            Financial Packages Created
          </p>
        </div>

        <div className="flex items-center overflow-x-scroll gap-3 scrollbar-horizontal">
          <div className="max-w-[50vw] flex gap-x-3">
            {[
              {
                logo: finImage1,
                package_name: "Citibank Financial Solutions",
                max_amount: "43,200",
                interest_rate_type: "Fixed",
                max_repayment_period: "24 ",
              },
              {
                logo: finImage2,
                package_name: "BFinance CreditLink",
                max_amount: "31,000",
                interest_rate_type: "Fixed",
                max_repayment_period: "24 ",
              },
              {
                logo: finImage3,
                package_name: "Chase TransactEase Package",
                max_amount: "11,000",
                interest_rate_type: "Fixed",
                max_repayment_period: "24 ",
              },
              {
                logo: finImage4,
                package_name: "Red Cort CashFlowPro Package",
                max_amount: "19,650",
                interest_rate_type: "Fixed",
                max_repayment_period: "24 ",
              },
            ].map((pkg: any) => (
              <FinancePackageCard data={pkg} home_owner key={pkg._id} />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12">
        <div className="flex justify-between text-center gap-4">
          <div className="flex items-center gap-4">
            <span className="text-[18px] leading-[20px] font-medium font-poppins text-sub-header">
              Top Aggregators
            </span>

            <div className="flex items-center gap-2">
              <span className="text-[14px] leading-[20px] font-poppins text-main font-normal">
                {" "}
                Filter By{" "}
              </span>
              {/* <Filter /> */}
            </div>
          </div>

          <div className="flex">
            <button className="flex justify-end text-[14px] leading-[12px] font-normal font-poppins text-main text-[#2196F3]">
              See More
            </button>
          </div>
        </div>
        <div className="">
          <div className="flex gap-4 overflow-scroll">
            <div className="flex gap-4 mt-4 w-0 overflow-visible">
              <Card
                title={"Cambridgeshire and Peterborough"}
                subtitle="London, England"
              />
              <Card title={"Cornwall and Devon"} subtitle="Clifford, England" />
              <Card
                title={"Dorset and Somerset"}
                subtitle="Liverpool, Merseyside"
              />
              <Card
                title={"West Midlands and Staffordshire"}
                subtitle="Dublin, Ireland"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="py-3">
          <p className="text-lg font-medium font-poppins">
            Home Improvement Agencies(HIA) Packages Created
          </p>
        </div>

        <div className="flex items-center overflow-x-scroll h-fit gap-3 scrollbar-horizontal">
          <div className="max-w-[50vw] h-fit flex gap-x-3">
            {/* {dummyHiaPackages.map((pkg: any) => (
              <HiaPackageCard data={pkg} key={pkg._id} />
            ))} */}
            {placeholderHIAPackages.map((hiaPackage, i) => (
              <div key={i} className="min-w-[403px]">
                <PackageCard
                  data={hiaPackage}
                  hideOverlay
                  key={i}
                  setShowSheet={() => {}}
                  isSelected={false}
                  type="hia"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h1 className="text-[18px] leading-[20px] font-medium font-poppins text-sub-header py-2">
          Financial Institutions
        </h1>
        <div className="grid grid-cols-4 gap-4 ">
          <div className="col-span-3 w-full">
            {/* <FinancialInstitutionGrid /> */}
            <DataTable<Finance, any>
              columns={financeColumns}
              data={tableData}
            />
          </div>
          <div className="w-full py-8 px-6  border-[1px] border-[#E1E1E1] rounded-[10px]">
            <h1 className="text-[20px] leading-[20px] font-medium font-poppins text-main mb-2">
              Start an application{" "}
            </h1>

            <span className="text-[14px] text-inherit/70 leading-[20px] font-normal font-poppins text-main">
              to get access to acquire Carbon Credit, get access to financial
              aid to reduce the Carbon offsets in your home
            </span>

            <div className="mt-4">
              <h1 className="text-sm font-manrope font-medium text-main">
                Application progress
              </h1>

              <ProgressBar
                percentage={23}
                wrapperClassName="h-3 bg-white border border-gray-200 bg-gray-50 w-full mt-2 rounded"
                contentClassName="bg-[#1BAF9E] rounded"
              />

              <button className=" rounded-md py-2 bg-[#1BAF9E] text-white font-poppins text-main px-6 mt-10">
                Start Application
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
