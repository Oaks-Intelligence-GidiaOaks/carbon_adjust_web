import { StarIcon } from "@heroicons/react/20/solid";
import { Button } from "../ui";
import { Dispatch, SetStateAction, useState } from "react";
import CheckBox from "../ui/CheckBox";

export type SubContractorProps = {
  data: {
    org_name: string;
    location: string;
    rating: string;
    services: string[];
    created_at: string;
    homes_retrofitted: string;
    logo: string;
  };
  setShowSheet?: Dispatch<SetStateAction<boolean>>;
  isNested?: boolean;
};

const SubContractorCard = ({ data, isNested }: SubContractorProps) => {
  const [isChecked, setIsChecked] = useState(false);
  return !isNested ? (
    <div className="w-full group hover:shadow-lg transition-all max-w-[560px] overflow-hidden bg-white border border-black-main/50 relative rounded-2xl pt-4 pb-4 px-6 bg-no-repeat bg-right-top">
      <div className="flex items-center gap-x-2">
        <div className="size-8">
          <img src={data.logo} className="w-full h-full object-contain" />
        </div>
        <div className="flex justify-between flex-1 items-center">
          <p className="font-poppins text-black text-lg brightness-0">
            {data.org_name}
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
      <div className="pt-6 line-clamp-2 text-ellipsis font-poppins font-normal text-[#000000ß]">
        {data.services.reduce((prev, curr, i, arr) => {
          if (i === arr.length - 1) {
            return prev + curr;
          }
          return prev + curr + ", ";
        }, "")}
      </div>
      <div className="mt-1 flex justify-between items-center">
        <p className="text-green-500 text-xs font-poppins">
          {data.homes_retrofitted} Homes Retrofitted | {data.created_at}
        </p>
        <Button
          variant={"link"}
          className="font-poppins font-light underline bg-transparent text-xs px-0"
        >
          Reviews
        </Button>
      </div>
    </div>
  ) : (
    <div className="w-full group hover:shadow-lg transition-all max-w-[560px] overflow-hidden bg-white border border-black-main/50 relative pt-4 pb-4 px-6 bg-no-repeat bg-right-top">
      <div className="flex items-center gap-x-2">
        <div className="size-8">
          <img src={data.logo} className="w-full h-full object-contain" />
        </div>
        <div className="flex justify-between flex-1 items-center">
          <p className="font-poppins text-black text-lg brightness-0">
            {data.org_name}
          </p>
          <div className="flex gap-x-1 items-center">
            <span className="text-xs font-poppins font-bold">
              {data.rating}
            </span>
            <StarIcon fontSize={12} className="text-amber-400 text-xs size-3" />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-x-3 mt-2">
        <div className="flex gap-2 flex-wrap items-center">
          <p className="bg-[#FFE5D3] text-[10px] py-1 px-2 font-poppins rounded">
            {data.location}
          </p>
        </div>
      </div>
      <div className="mt-1 flex justify-between items-center">
        <p className="text-green-500 text-xs font-poppins">
          {data.homes_retrofitted} Homes Retrofitted | {data.created_at}
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

export default SubContractorCard;
