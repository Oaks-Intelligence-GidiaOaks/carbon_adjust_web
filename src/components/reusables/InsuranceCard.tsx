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
  hideCheckBox?: boolean;
  isNested?: boolean;
};

const InsuranceCard = ({ data, hideCheckBox }: InsuranceCardProps) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="w-full group flex gap-x-4 hover:shadow-lg transition-all min-w-[338px] max-w-[560px] overflow-hidden bg-[#DEDEDE]/30 border border-black-main/50 relative rounded-2xl pt-4 pb-4 px-6 bg-no-repeat bg-right-top">
      <div className="size-12 rounded-full overflow-hidden">
        <img src={data.logo} className="w-full h-full object-contain" />
      </div>
      <div>
        <div className="flex items-center gap-x-2">
          <div className="flex justify-between flex-1 items-center">
            <p className="font-poppins text-black text-lg brightness-0">
              {data.package_name}
            </p>
            {!hideCheckBox && (
              <CheckBox
                checked={isChecked}
                className="border-2 border-green-500 rounded-full hover:bg-green-100"
                setIsChecked={(value) => setIsChecked(value)}
              />
            )}
          </div>
        </div>
        <div className="flex items-center gap-x-3 mt-1">
          <div className="flex gap-2 flex-wrap items-center">
            <p className="bg-[#FFE5D3] text-[10px] py-1 px-2 font-poppins rounded">
              {data.location}
            </p>
            <div className="flex gap-x-1 items-center">
              <span className="text-xs font-poppins font-bold">
                {data.rating}
              </span>
              <StarIcon
                fontSize={12}
                className="text-amber-400 text-xs size-3"
              />
            </div>
          </div>
        </div>
        <div className="mt-1 text-grey-swatch-800 font-poppins">
          <p>{data.org_name}</p>
          <p className="mt-1 text-lg font-medium">{data.loan_amount}</p>
        </div>

        <div className="mt-2 flex flex-col justify-between items-start">
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
    </div>
  );
};

export default InsuranceCard;
