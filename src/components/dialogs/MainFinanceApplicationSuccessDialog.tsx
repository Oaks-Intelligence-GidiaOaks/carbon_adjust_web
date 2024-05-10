import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "../ui";
import { GrClose } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";

type Props = {
  setShowApplicationSuccessDialog: (value: boolean) => void;
  setShowInsuranceSheet: Dispatch<SetStateAction<boolean>>;
  //   setShowInsurancePackagesSheet?: Dispatch<SetStateAction<boolean>>;
};

const MainFinanceApplicationSuccess = ({
  setShowApplicationSuccessDialog,
  setShowInsuranceSheet,
}: Props) => {
  const navigate = useNavigate();

  return (
    <div className="w-screen max-w-[806px] bg-white h-fit rounded-md pt-6 mt-[10vh] relative">
      <div className="max-w-[630px] w-full mx-auto px-2 sm:px-6 relative">
        <div className="mx-auto pt-20 pb-[10vh]">
          <div className="mx-auto max-w-[379px]">
            <div className="mb-5 flex justify-center items-center">
              <img
                src={"/assets/graphics/finance-successful-application.svg"}
                className=""
              />
            </div>
            <p className="text-[#2879C5] font-poppins text-center text-xl font-semibold uppercase">
              Application
            </p>
            <p className="text-black-main mt-4 font-poppins text-center">
              Would you like to proceed without applying for insurance
            </p>
            <div className="mt-10 flex gap-x-4">
              <Button
                onClick={() => {
                  setShowApplicationSuccessDialog(false);
                  navigate("/dashboard/applications/finance-applications");
                }}
                variant={"outline"}
                className="w-full text-[#2879C5] font-poppins h-12 border-[#2879C5]"
              >
                Proceed without applying
              </Button>
              <Button
                onClick={() => {
                  setShowInsuranceSheet(true);
                  setShowApplicationSuccessDialog(false);
                  navigate("/dashboard/applications/finance?state=packages");
                }}
                variant={"outline"}
                className="w-full text-white font-poppins h-12 bg-[#2879C5]"
              >
                Apply for Insurance
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Dialog.Close asChild>
        <button
          className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-7 right-6 inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
          aria-label="Close"
        >
          <GrClose />
        </button>
      </Dialog.Close>
    </div>
  );
};

export default MainFinanceApplicationSuccess;
