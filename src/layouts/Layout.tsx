import Sidebar from "@/components/containers/Sidebar";
import TopBar from "@/components/containers/TopBar";
import { Outlet } from "react-router-dom";

type Props = {};

const Layout = (_blank: Props) => {
  return (
    <div className="flex max-h-screen">
      <Sidebar accountType="home-occupant" />
      <div className="w-full flex flex-col items-center">
        <TopBar />
        <div className="w-full max-w-[1440px] mx-auto h-full overflow-y-scroll">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
