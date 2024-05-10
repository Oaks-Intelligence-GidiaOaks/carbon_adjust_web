import { DataTable } from "@/components/tables/DataTable";
import FinancePackageCard from "@/components/ui/FinancePackageCard";
import {
  briefcaseIcon,
  docIcon,
  financeColumns,
  finImage1,
  finImage2,
  finImage3,
  finImage4,
  institutionIcon,
} from "@/constants";
import { Finance as FinanceType } from "@/types/general";
import { useEffect, useState } from "react";
import { PiArrowUpRight } from "react-icons/pi";

type Props = {};

const Finance = ({}: Props) => {
  const [tableData, setTableData] = useState<FinanceType[]>([]);

  async function getData(): Promise<FinanceType[]> {
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
      {/* categories section */}
      <div className="h-[167px] flex flex-nowrap gap-x-6 rounded-lg border border-grey-swatch-300 mb-10">
        {/* Total packages  */}
        <div className="font-poppins p-5 pb-0 flex-1 relative after:absolute after:w-[1px] after:h-[80px] after:top-1/2 after:-translate-y-1/2 after:content('hello') after:right-0 after:bg-grey-swatch-400">
          <div className="flex gap-8 items-start mt-4">
            <div>
              <p className="font-semibold text-4xl">670</p>
              <p className="text-xs">Total packages</p>
            </div>
            <div className="w-[47px] h-[41px] rounded-lg shadow-md flex justify-center items-center">
              <img className="" src={briefcaseIcon} />
            </div>
          </div>
          <div className="mt-3 flex items-center text-grey-swatch-600">
            <PiArrowUpRight className="text-green-500 text-xs" />
            <span className="text-[10px] inline-block ml-2">3%</span>
            <span className="text-[10px] inline-block ml-2">
              +12 packages this week
            </span>
          </div>
        </div>
        {/* Total applications */}
        <div className="font-poppins p-5 pb-0 flex-1 relative after:absolute after:w-[1px] after:h-[80px] after:top-1/2 after:-translate-y-1/2 after:content('hello') after:right-0 after:bg-grey-swatch-400">
          <div className="flex gap-8 items-start mt-4">
            <div>
              <p className="font-semibold text-4xl">20</p>
              <p className="text-xs">Total applications</p>
            </div>
            <div className="w-[47px] h-[41px] rounded-lg shadow-md flex justify-center items-center">
              <img className="" src={docIcon} />
            </div>
          </div>
          <div className="mt-3 flex items-center text-grey-swatch-600">
            <PiArrowUpRight className="text-green-500 text-xs" />
            <span className="text-[10px] inline-block ml-2">3%</span>
            <span className="text-[10px] inline-block ml-2">
              +12 packages this week
            </span>
          </div>
        </div>
        {/* finance institutions */}
        <div className="font-poppins p-5 pb-0 flex-1 relative">
          <div className="flex gap-8 items-start mt-4">
            <div>
              <p className="font-semibold text-4xl">15</p>
              <p className="text-xs">Finance Institutions</p>
            </div>
            <div className="w-[47px] h-[41px] rounded-lg shadow-md flex justify-center items-center">
              <img className="" src={institutionIcon} />
            </div>
          </div>
          <div className="mt-3 flex items-center text-grey-swatch-600">
            <PiArrowUpRight className="text-green-500 text-xs" />
            <span className="text-[10px] inline-block ml-2">3%</span>
            <span className="text-[10px] inline-block ml-2">
              +12 packages this week
            </span>
          </div>
        </div>
      </div>
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
                <FinancePackageCard
                  isPlaceholder={true}
                  data={pkg}
                  home_owner
                  key={pkg._id}
                />
              ))}
            </div>
          </div>
        </div>
      </>

      <div className="mt-12">
        <h1 className="text-[18px] leading-[20px] font-medium font-poppins text-sub-header py-2">
          Financial Institutions
        </h1>
        <div className="grid grid-cols-4 gap-4 ">
          <div className="col-span-4 w-full">
            {/* <FinancialInstitutionGrid /> */}
            <DataTable<FinanceType, any>
              columns={financeColumns}
              data={tableData}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finance;
