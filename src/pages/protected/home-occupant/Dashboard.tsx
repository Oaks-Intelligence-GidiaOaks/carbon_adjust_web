// import DemandChart from "../../components/charts/DemandChart";
// import Filter from "../../components/reuseable/Filter";
// import YearDropDown from "../../components/reuseable/YearDropDown";
// import FinancialInstitutionGrid from "../../components/grid/FinancialInstitutionGrid";
// import pieChartPlaceholder from "../../assets/epc-rating.svg";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
import FinancePackageCard from "@/components/ui/FinancePackageCard";
import Card from "@/components/ui/Card";
import HiaPackageCard from "@/components/ui/HiaPackageCard";
import TopHiaCard from "@/components/ui/TopHiaCard";
import { ProgressBar } from "@/components/ui";

const image =
  "https://th.bing.com/th/id/R.3d6a2ad56bc3403c5cfcc3efe09b741b?rik=gnNKMMZSvZ3uMA&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-microsoft-logo-iconlogobrand-logoiconslogos-251519939091wmudn.png&ehk=1%2fl4i5MeDLTCpvZhUZlCefvhSzsGR16HIPqagpDxYDg%3d&risl=&pid=ImgRaw&r=0";
const image2 =
  "https://th.bing.com/th/id/R.a2d4d66ef94dd85d56a082816b30f3e6?rik=KfrbgNT4gOOP3Q&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fapple-logo-transparent-png%2fapple-logo-transparent-png-10.png&ehk=sXHp47rdJ7jzwYOZuUZwbWhT8m3wcoEbbTof%2fX6I6LU%3d&risl=&pid=ImgRaw&r=0";
const image3 =
  "https://th.bing.com/th/id/OIP.m1ar389tpEOAFN1NTurqvwAAAA?rs=1&pid=ImgDetMain";
const image4 =
  "https://th.bing.com/th/id/R.c741810f9c33cf1dcc57c99d72e0a88f?rik=cpqlbe4biPOuAA&riu=http%3a%2f%2fwww.freelogovectors.net%2fwp-content%2fuploads%2f2018%2f03%2freal_madrid_cub_de_futbol-logo.png&ehk=0leBxEk7hblAGXb64NVnUz83tfO1n%2bVtT9C3rBadqUM%3d&risl=&pid=ImgRaw&r=0";

const Dashboard = () => {
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
                <span className="text-blue-main font-semibold text-5xl">C</span>
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
              <img
                src="/assets/graphics/epc-chart-placeholder.svg"
                className="block w-[200%]"
              />
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
                name="Microsoft Corporation"
                image={image}
                retrofitCount="267,502"
                className="rounded-t"
              />
              <TopHiaCard
                name="Apple Inc."
                image={image2}
                retrofitCount="217,034"
              />
              <TopHiaCard
                name="Tesla Inc."
                image={image3}
                retrofitCount="193,205"
              />
              <TopHiaCard
                name="Real Madrid CF"
                image={image4}
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
                logo: image,
                package_name: "Double rumble 4 one",
                max_amount: "21,000",
                interest_rate_type: "Fixed",
                max_repayment_period: "24 ",
              },
              {
                logo: image2,
                package_name: "Special combo",
                max_amount: "21,000",
                interest_rate_type: "Fixed",
                max_repayment_period: "24 ",
              },
              {
                logo: image3,
                package_name: "Double rumble 4 one",
                max_amount: "21,000",
                interest_rate_type: "Fixed",
                max_repayment_period: "24 ",
              },
              {
                logo: image4,
                package_name: "Double rumble 4 one",
                max_amount: "21,000",
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
        <div className="grid grid-cols-3 gap-4 mt-4">
          <Card />
          <Card />
          <Card />
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
            {[
              {
                logo: image,
                package_name: "Double rumble 4 one",
                services: [
                  "Window retrofitting",
                  "Door retrofitting",
                  "Roof retrofitting",
                  "Energy  retrofitting",
                ],
                locations: [
                  "London",
                  "Lagos",
                  "Dublin",
                  "Brentwood",
                  "Manchester",
                ],
              },
              {
                logo: image2,
                package_name: "Double rumble 4 one",
                services: [
                  "Window retrofitting",
                  "Door retrofitting",
                  "Roof retrofitting",
                  "Energy  retrofitting",
                ],
                locations: [
                  "London",
                  "Lagos",
                  "Dublin",
                  "Brentwood",
                  "Manchester",
                ],
              },
              {
                logo: image3,
                package_name: "Double rumble 4 one",
                services: [
                  "Window retrofitting",
                  "Door retrofitting",
                  "Roof retrofitting",
                  "Energy  retrofitting",
                ],
                locations: [
                  "London",
                  "Lagos",
                  "Dublin",
                  "Brentwood",
                  "Manchester",
                ],
              },
              {
                logo: image4,
                package_name: "Double rumble 4 one",
                services: [
                  "Window retrofitting",
                  "Door retrofitting",
                  "Roof retrofitting",
                  "Energy  retrofitting",
                ],
                locations: [
                  "London",
                  "Lagos",
                  "Dublin",
                  "Brentwood",
                  "Manchester",
                ],
              },
            ].map((pkg: any) => (
              <HiaPackageCard data={pkg} key={pkg._id} />
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
