import Sidebar from "@/components/containers/Sidebar";
import TopBar from "@/components/containers/TopBar";
import { Outlet } from "react-router-dom";

type Props = {};

const Layout = (_blank: Props) => {
  return (
    <div className="flex h-screen">
      <Sidebar accountType="home-owner" />
      <div className="w-full flex flex-col items-center">
        <TopBar />
        <div className="w-full max-w-[1440px] mx-auto h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
