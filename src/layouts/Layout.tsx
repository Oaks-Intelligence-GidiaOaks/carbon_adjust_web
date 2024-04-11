import Sidebar from "@/components/containers/Sidebar";
import TopBar from "@/components/containers/TopBar";
import { cn } from "@/utils";
import { Outlet, useLocation } from "react-router-dom";

type Props = {
  sidebarType: string;
};

const Layout = (props: Props) => {
  const { pathname } = useLocation();

  return (
    <div className="flex max-h-screen max-w-screen overflow-hidden">
      <Sidebar accountType={props.sidebarType} />
      <div className="flex-1 items-center">
        <TopBar />
        <div
          className={cn(
            "w-full max-w-[1440px] pb-16 px-4 mx-auto h-full overflow-y-scroll",
            pathname.includes("dashboard/applications") && "px-0",
            pathname === "/dashboard/devices" && "px-0",
            pathname === "/dashboard/profile" && "px-0"
          )}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
