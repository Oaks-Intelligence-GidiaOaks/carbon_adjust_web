import ProfileInfo from "@/components/reusables/profile/ProfileInfo";
import ProfileTab from "@/components/reusables/profile/ProfileTab";
import {
  Address,
  BioData,
  Documentation,
  HomeInformation,
} from "@/pages/protected/shared/account-setup/accounts/forms/home-occupant";
import { useState } from "react";

type Props = {};

const HomeOccupant = (_: Props) => {
  const [currentTab, setCurrentTab] = useState(1);

  const generateTabComponent = () => {
    switch (currentTab) {
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
  return (
    <div>
      <div className="sticky top-0 z-[100]">
        <ProfileInfo accountType="home-occupant" currentStep={currentTab} />
        <div className="absolute bottom-0 z-50 w-full">
          <ProfileTab
            accountType="home-occupant"
            currentTab={currentTab}
            setCurrentTab={(index) => setCurrentTab(index)}
          />
        </div>
      </div>
      <div className="max-w-[820px] mx-auto h-screen shadow-lg">
        {generateTabComponent()}
      </div>
    </div>
  );
};

export default HomeOccupant;
