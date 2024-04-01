import Sidebar from "@/components/containers/Sidebar";
import TopBar from "@/components/containers/TopBar";
import { Outlet } from "react-router-dom";

type Props = {};

const Layout = (_blank: Props) => {
  return (
    <div className="flex max-h-screen max-w-screen overflow-hidden">
      <Sidebar accountType="home-occupant" />
      <div className="flex-1 items-center">
        <TopBar />
        <div className="w-full max-w-[1440px] mx-auto h-full overflow-y-scroll bg-gray-50">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
