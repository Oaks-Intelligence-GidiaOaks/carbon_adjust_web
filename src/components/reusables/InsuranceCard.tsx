import { StarIcon } from "@heroicons/react/20/solid";
import { Button } from "../ui";
import { Dispatch, SetStateAction, useState } from "react";
import CheckBox from "../ui/CheckBox";

export type InsuranceCardProps = {
  data: {
    org_name: string;
    location: string;
    rating: string;
    package_name: string;
    created_at: string;
    repayment_date: string;
    logo: string;
    loan_amount?: string;
  };
  setShowSheet?: Dispatch<SetStateAction<boolean>>;
  isNested?: boolean;
};

const InsuranceCard = ({ data }: InsuranceCardProps) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="w-full group hover:shadow-lg transition-all max-w-[560px] overflow-hidden bg-white border border-black-main/50 relative rounded-2xl pt-4 pb-4 px-6 bg-no-repeat bg-right-top">
      <div className="flex items-center gap-x-2">
        <div className="size-8">
          <img src={data.logo} className="w-full h-full object-contain" />
        </div>
        <div className="flex justify-between flex-1 items-center">
          <p className="font-poppins text-black text-lg brightness-0">
            {data.package_name}
          </p>
          <CheckBox
            checked={isChecked}
            className="border-2 border-green-500 rounded-full hover:bg-green-100"
            setIsChecked={(value) => setIsChecked(value)}
          />
        </div>
      </div>
      <div className="flex items-center gap-x-3 mt-2">
        <div className="flex gap-2 flex-wrap items-center">
          <p className="bg-[#FFE5D3] text-[10px] py-1 px-2 font-poppins rounded">
            {data.location}
          </p>
          <div className="flex gap-x-1 items-center">
            <span className="text-xs font-poppins font-bold">
              {data.rating}
            </span>
            <StarIcon fontSize={12} className="text-amber-400 text-xs size-3" />
          </div>
        </div>
      </div>
      <div className="mt-3 text-grey-swatch-800">
        <p>{data.org_name}</p>
        <p className="mt-1 font-medium text-lg">{data.loan_amount}</p>
      </div>

      <div className="mt-4 flex flex-col gap-2 justify-between items-start">
        <p className="text-green-500 text-xs font-poppins">
          Repayment date: {data.repayment_date}
        </p>
        <Button
          variant={"link"}
          className="font-poppins font-light underline bg-transparent text-xs px-0"
        >
          Reviews
        </Button>
      </div>
    </div>
  );
};

export default InsuranceCard;
