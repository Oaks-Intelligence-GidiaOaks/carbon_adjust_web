// import DemandChart from "../../components/charts/DemandChart";
// import Filter from "../../components/reuseable/Filter";
// import YearDropDown from "../../components/reuseable/YearDropDown";
// import FinancialInstitutionGrid from "../../components/grid/FinancialInstitutionGrid";
// import pieChartPlaceholder from "../../assets/epc-rating.svg";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
import FinancePackageCard from "@/components/ui/FinancePackageCard";
// import Card from "@/components/ui/Card";
// import HiaPackageCard from "@/components/ui/HiaPackageCard";
import TopHiaCard from "@/components/ui/TopHiaCard";
// import { ProgressBar } from "@/components/ui";
import {
  chartEPCRatings,
  // columns,
  // dummyHiaPackages,
  epcColors,
  // financeColumns,
  financeIcon,
  finImage1,
  finImage2,
  finImage3,
  finImage4,
  hiaIcon,
  image1,
  image2,
  image3,
  image4,
  insuranceIcon,
  insuranceOptions,
  placeholderHIAPackages,
  subContractors,
  subContractorsIcon,
} from "@/constants";
import PackageCard from "@/components/reusables/PackageCard";
import { Finance } from "@/types/general";
// import { DataTable } from "@/components/tables/DataTable";
import { useEffect, useState } from "react";
import { EpcRatingChart } from "@/components/charts";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { PiArrowUpRight } from "react-icons/pi";
import { FiChevronDown } from "react-icons/fi";
import {
  createSearchParams,
  Link,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { cn } from "@/utils";
import InsuranceCard from "@/components/reusables/InsuranceCard";
import SubContractorCard from "@/components/reusables/SubContractorCard";

const Dashboard = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const userData = useSelector((state: RootState) => state.user.user);

  const tab = searchParams.get("view");

  const [_, setCurrentTab] = useState(tab);
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

  const [__, setTableData] = useState<Finance[]>([]);

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

  const generateRoute = (tab: string) => {
    if (tab === "finance") return "/dashboard/finance";
    if (tab === "insurance") return "/dashboard/insurance";
    if (tab === "hia") return "/dashboard/hia";
    if (tab === "subcontractor") return "/dashboard/subcontractor";
    return "";
  };

  useEffect(() => {
    getData().then((data) => {
      setTableData(data);
    });
  }, []);

  return (
    <div className="pt-6 px-6 pb-20 bg-white">
      {/* New bar chart */}
      <div className="rounded-lg border border-grey-swatch-300 p-5 mb-6">
        <p className="text-lg font-medium font-poppins text-sub-header">
          Retrofitting distribution
        </p>
        <div className="min-h-[320px] w-full flex justify-center items-center">
          <p className="font-poppins">New bar chart goes here</p>
        </div>
      </div>

      {/* categories section */}
      <div className="h-[167px] flex flex-nowrap gap-x-6 rounded-lg border border-grey-swatch-300 mb-10">
        {/* Finance */}
        <div className="font-poppins p-5 pb-0 flex-1 relative after:absolute after:w-[1px] after:h-[80px] after:top-1/2 after:-translate-y-1/2 after:content('hello') after:right-0 after:bg-grey-swatch-400">
          <p className="text-xs">Finance</p>
          <div className="flex gap-8 items-center mt-4">
            <div>
              <p className="font-semibold text-4xl">670</p>
              <p className="text-xs">Total packages</p>
            </div>
            <div className="w-[47px] h-[41px] rounded-lg shadow-md flex justify-center items-center">
              <img className="" src={financeIcon} />
            </div>
          </div>
          <div className="mt-3 flex items-center text-grey-swatch-600">
            <PiArrowUpRight className="text-green-500 text-xs" />
            <span className="text-[10px] inline-block ml-2">3%</span>
            <span className="text-[10px] inline-block ml-2">
              +12 packages this week
            </span>
          </div>
          <div
            onClick={() => {
              if (tab === "finance") {
                setCurrentTab("");
                navigate({
                  pathname: "./",
                });
              } else if (tab === "" || tab === null || tab !== "finance") {
                navigate({
                  pathname: "",
                  search: createSearchParams({
                    view: "finance",
                  }).toString(),
                });
              }
            }}
            className={cn(
              "cursor-pointer py-1 flex gap-x-2 mx-auto items-center justify-center h-[18px] mt-3 bg-[url('/assets/graphics/see-more-btn.svg')] bg-no-repeat bg-contain bg-center",
              tab === "finance" &&
                "bg-[url('/assets/graphics/see-more-btn-active.svg')]"
            )}
          >
            <span
              className={cn(
                "text-xs whitespace-nowrap",
                tab === "finance" && "text-white"
              )}
            >
              See more
            </span>
            <FiChevronDown
              className={cn(
                "text-base transition-all",
                tab === "finance" && "text-white rotate-180 transition-all"
              )}
            />
          </div>
        </div>
        {/* Insurance */}
        <div className="font-poppins p-5 pb-0 flex-1 relative after:absolute after:w-[1px] after:h-[80px] after:top-1/2 after:-translate-y-1/2 after:content('hello') after:right-0 after:bg-grey-swatch-400">
          <p className="text-xs">Insurance</p>
          <div className="flex gap-8 items-center mt-4">
            <div>
              <p className="font-semibold text-4xl">20</p>
              <p className="text-xs">Total packages</p>
            </div>
            <div className="w-[47px] h-[41px] rounded-lg shadow-md flex justify-center items-center">
              <img className="" src={insuranceIcon} />
            </div>
          </div>
          <div className="mt-3 flex items-center text-grey-swatch-600">
            <PiArrowUpRight className="text-green-500 text-xs" />
            <span className="text-[10px] inline-block ml-2">3%</span>
            <span className="text-[10px] inline-block ml-2">
              +12 packages this week
            </span>
          </div>
          <div
            onClick={() => {
              if (tab === "insurance") {
                setCurrentTab("");
                navigate({
                  pathname: "./",
                });
              } else if (tab === "" || tab === null || tab !== "insurance") {
                navigate({
                  pathname: "",
                  search: createSearchParams({
                    view: "insurance",
                  }).toString(),
                });
              }
            }}
            className={cn(
              "cursor-pointer py-1 flex gap-x-2 mx-auto items-center justify-center h-[18px] mt-3 bg-[url('/assets/graphics/see-more-btn.svg')] bg-no-repeat bg-contain bg-center",
              tab === "insurance" &&
                "bg-[url('/assets/graphics/see-more-btn-active.svg')]"
            )}
          >
            <span
              className={cn(
                "text-xs whitespace-nowrap",
                tab === "insurance" && "text-white"
              )}
            >
              See more
            </span>
            <FiChevronDown
              className={cn(
                "text-base transition-all",
                tab === "insurance" && "text-white rotate-180 transition-all"
              )}
            />
          </div>
        </div>
        {/* HIA */}
        <div className="font-poppins p-5 pb-0 flex-1 relative after:absolute after:w-[1px] after:h-[80px] after:top-1/2 after:-translate-y-1/2 after:content('hello') after:right-0 after:bg-grey-swatch-400">
          <p className="text-xs">Home Improvement Agency</p>
          <div className="flex gap-8 items-center mt-4">
            <div>
              <p className="font-semibold text-4xl">15</p>
              <p className="text-xs">Total packages</p>
            </div>
            <div className="w-[47px] h-[41px] rounded-lg shadow-md flex justify-center items-center">
              <img className="" src={hiaIcon} />
            </div>
          </div>
          <div className="mt-3 flex items-center text-grey-swatch-600">
            <PiArrowUpRight className="text-green-500 text-xs" />
            <span className="text-[10px] inline-block ml-2">3%</span>
            <span className="text-[10px] inline-block ml-2">
              +12 packages this week
            </span>
          </div>
          <div
            onClick={() => {
              if (tab === "hia") {
                setCurrentTab("");
                navigate({
                  pathname: "./",
                });
              } else if (tab === "" || tab === null || tab !== "hia") {
                navigate({
                  pathname: "",
                  search: createSearchParams({
                    view: "hia",
                  }).toString(),
                });
              }
            }}
            className={cn(
              "cursor-pointer py-1 flex gap-x-2 mx-auto items-center justify-center h-[18px] mt-3 bg-[url('/assets/graphics/see-more-btn.svg')] bg-no-repeat bg-contain bg-center",
              tab === "hia" &&
                "bg-[url('/assets/graphics/see-more-btn-active.svg')]"
            )}
          >
            <span
              className={cn(
                "text-xs whitespace-nowrap",
                tab === "hia" && "text-white"
              )}
            >
              See more
            </span>
            <FiChevronDown
              className={cn(
                "text-base transition-all",
                tab === "hia" && "text-white rotate-180 transition-all"
              )}
            />
          </div>
        </div>
        {/* Subcontractor */}
        <div className="font-poppins p-5 pb-0 flex-1">
          <p className="text-xs">Subcontractors</p>
          <div className="flex gap-8 items-center mt-4">
            <div>
              <p className="font-semibold text-4xl">500</p>
              <p className="text-xs">Total subcontractors</p>
            </div>
            <div className="w-[47px] h-[41px] rounded-lg shadow-md flex justify-center items-center">
              <img className="" src={subContractorsIcon} />
            </div>
          </div>
          <div className="mt-3 flex items-center text-grey-swatch-600">
            <PiArrowUpRight className="text-green-500 text-xs" />
            <span className="text-[10px] inline-block ml-2">3%</span>
            <span className="text-[10px] inline-block ml-2">
              +12 packages this week
            </span>
          </div>
          <div
            onClick={() => {
              if (tab === "subcontractor") {
                setCurrentTab("");
                navigate({
                  pathname: "./",
                });
              } else if (
                tab === "" ||
                tab === null ||
                tab !== "subcontractor"
              ) {
                navigate({
                  pathname: "",
                  search: createSearchParams({
                    view: "subcontractor",
                  }).toString(),
                });
              }
            }}
            className={cn(
              "cursor-pointer py-1 flex gap-x-2 mx-auto items-center justify-center h-[18px] mt-3 bg-[url('/assets/graphics/see-more-btn.svg')] bg-no-repeat bg-contain bg-center",
              tab === "subcontractor" &&
                "bg-[url('/assets/graphics/see-more-btn-active.svg')]"
            )}
          >
            <span
              className={cn(
                "text-xs whitespace-nowrap",
                tab === "subcontractor" && "text-white"
              )}
            >
              See more
            </span>
            <FiChevronDown
              className={cn(
                "text-base transition-all",
                tab === "subcontractor" &&
                  "text-white rotate-180 transition-all"
              )}
            />
          </div>
        </div>
      </div>
      {tab === "finance" && (
        <>
          <div className="mt-6">
            <div className="py-3">
              <p className="text-lg font-medium font-poppins">
                Recently created packages
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
        </>
      )}
      {tab === "insurance" && (
        <>
          <div className="mt-6">
            <div className="py-3">
              <p className="text-lg font-medium font-poppins">
                Recently created packages
              </p>
            </div>

            <div className="flex items-center overflow-x-scroll gap-3 scrollbar-horizontal">
              <div className="max-w-[50vw] flex gap-x-3">
                {insuranceOptions.map((insurance, i) => (
                  <InsuranceCard
                    data={insurance}
                    key={i}
                    hideCheckBox={true}
                    // setShowSheet={setShowSheet}
                  />
                ))}
              </div>
            </div>
          </div>
        </>
      )}
      {tab === "hia" && (
        <>
          <div className="mt-6">
            <div className="py-3">
              <p className="text-lg font-medium font-poppins">
                Recently created packages
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
        </>
      )}
      {tab === "subcontractor" && (
        <>
          <div className="mt-6">
            <div className="py-3">
              <p className="text-lg font-medium font-poppins">
                Recently added subcontractors
              </p>
            </div>

            <div className="flex items-center overflow-x-scroll h-fit gap-3 scrollbar-horizontal">
              <div className="max-w-[50vw] h-fit flex gap-x-3">
                {/* {dummyHiaPackages.map((pkg: any) => (
              <HiaPackageCard data={pkg} key={pkg._id} />
            ))} */}
                {subContractors.map((subcontractor, i) => (
                  <SubContractorCard
                    data={subcontractor}
                    key={i}
                    hideCheckbox
                  />
                ))}
              </div>
            </div>
          </div>
        </>
      )}
      {tab !== "" && tab !== null && (
        <div className="w-full flex justify-end items-center">
          <Link
            to={generateRoute(tab)}
            className="font-poppins hover:text-ca-blue hover:underline text-sm mt-4"
          >
            See more
          </Link>
        </div>
      )}

      <div className="grid grid-cols-5 mt-10">
        <div className="col-span-3 flex flex-col h-full">
          {/* <span className="text-[18px] flex-1 leading-[20px] font-medium font-poppins text-sub-header ">
            EPC Performance Rating
          </span> */}
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
                Top Aggregators
              </span>
              <button className="text-[14px] leading-[12px] font-normal font-poppins text-main">
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

      {/* <div className="mt-12">
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
            </div>
          </div>

          <div className="flex">
            <button className="flex justify-end text-[14px] leading-[12px] font-normal font-poppins text-[#2196F3]">
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
      <div className="mt-12">
        <h1 className="text-[18px] leading-[20px] font-medium font-poppins text-sub-header py-2">
          Financial Institutions
        </h1>
        <div className="grid grid-cols-4 gap-4 ">
          <div className="col-span-3 w-full">
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

              <button className=" rounded-md py-2 bg-[#1BAF9E] font-poppins text-main px-6 mt-10">
                Start Application
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Dashboard;
