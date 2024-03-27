import { AccountSetupProps } from "@/types/general";
import {
  Address,
  BioData,
  Documentation,
  HomeInformation,
} from "./forms/home-occupant";

const AccountSetUpForm = ({ currentStep }: AccountSetupProps) => {
  switch (currentStep) {
    case 1:
      return <BioData />;
    case 2:
      return <Address />;
    case 3:
      return <HomeInformation />;
    case 4:
      return <Documentation />;
    default:
      break;
  }
};

export default AccountSetUpForm;
