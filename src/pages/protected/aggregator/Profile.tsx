import HomeOccupant from "@/components/sub-pages/profile/HomeOccupant";
import { ProfileProps } from "@/types/general";

const Profile = ({ accountType }: ProfileProps) => {
  switch (accountType) {
    case "home-occupant":
      return <HomeOccupant />;
    default:
      break;
  }
};

export default Profile;
