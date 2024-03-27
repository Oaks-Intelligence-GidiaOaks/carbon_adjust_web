import AccountActionHeader from "@/components/reusables/account-setup/AccountActionHeader";
import AccountSetupInfo from "@/components/reusables/account-setup/AccountSetupInfo";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AccountSetUpForm from "./AccountSetUpForm";
import { Button } from "@/components/ui";
import ScrollToTop from "@/components/reusables/ScrollToTop";

type Props = {};

const HomeOwnerAccountSetup = (_: Props) => {
  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(1);

  const logOut = () => {
    navigate("/");
  };

  const goToNext = () => {
    if (currentStep !== 4) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  return (
    <ScrollToTop dependentValue={currentStep}>
      <AccountActionHeader
        actionTitle="Log out"
        action={logOut}
        className={"bg-white"}
      />
      <AccountSetupInfo accountType="home-occupant" currentStep={currentStep} />
      <div className="flex bg-gray-100 justify-center min-h-screen pb-20 bg-account-setup-image bg-cover bg-fixed">
        <div className="max-w-[760px] w-full">
          <AccountSetUpForm
            accountType={"home-occupant"}
            currentStep={currentStep}
          />
          <Button
            onClick={goToNext}
            className="rounded-lg text-white mt-4 w-full h-11"
          >
            Next
          </Button>
        </div>
      </div>
    </ScrollToTop>
  );
};

export default HomeOwnerAccountSetup;
