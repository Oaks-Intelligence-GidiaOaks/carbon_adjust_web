import { cn } from "@/utils";
import CheckBox from "../ui/CheckBox";

type Props = {
  status: string;
};

const HIAApplicationStatus = ({ status }: Props) => {
  return (
    <div className="max-w-[397px] w-full bg-grey-swatch-500 h-[2px] rounded relative">
      <div
        className={cn(
          "absolute h-full bg-green-500 top-0 left-0",
          status === "APPLIED" && "w-0",
          status === "under-review" && "w-1/2",
          status === "APPROVED" && "w-full",
          status === "approved/accepted" && "w-full"
        )}
      ></div>
      <div className="absolute -top-[7px] w-full h-full left-0 flex justify-between">
        <div className="relative">
          <p className="absolute -top-5 left-0 text-xs font-poppins">Applied</p>
          <CheckBox
            checked={[
              "APPLIED",
              "under-review",
              "APPROVED",
              "approved/accepted",
            ].includes(status)}
            className={cn(
              "border-2 border-grey-swatch-500 rounded-full",
              [
                "APPLIED",
                "under-review",
                "APPROVED",
                "approved/accepted",
              ].includes(status) && "bg-green-500 border-green-500"
            )}
            iconStyle="text-white"
          />
        </div>
        <div className="relative">
          <p className="absolute -top-5 text-xs font-poppins whitespace-nowrap -translate-x-[calc(50%-16px)]">
            Under review
          </p>
          <CheckBox
            checked={["under-review", "APPROVED", "approved/accepted"].includes(
              status
            )}
            className={cn(
              "border-2 border-grey-swatch-500 rounded-full",
              ["under-review", "APPROVED", "approved/accepted"].includes(
                status
              ) && "bg-green-500 border-green-500"
            )}
            iconStyle="text-white"
          />
        </div>
        <div className="relative">
          <p className="absolute -top-5 right-0 text-xs font-poppins">
            Approved
          </p>
          <CheckBox
            checked={[
              "APPROVED",
              "approved/accepted",
              "approved/accepted",
            ].includes(status)}
            className={cn(
              "border-2 border-grey-swatch-500 rounded-full",
              ["APPROVED", "approved/accepted"].includes(status) &&
                "bg-green-500 border-green-500"
            )}
            iconStyle="text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default HIAApplicationStatus;
