import userService from "@/api/services/user";
import Sidebar from "@/components/containers/Sidebar";
import TopBar from "@/components/containers/TopBar";
import { cn } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import { Oval } from "react-loader-spinner";
import { Outlet, useLocation } from "react-router-dom";

type Props = {
  sidebarType: string;
};

const Layout = (props: Props) => {
  const { pathname } = useLocation();

  const userData = useQuery({
    queryKey: ["fetch-user-info"],
    queryFn: userService().fetchUserInfo,
  });

  // ---------------------UNCOMMENT THIS CODE WHEN ADMIN STARTS VERIFYING USERS
  // useEffect(() => {
  //   if (userData.isSuccess) {
  //     dispatch(setUser(userData.data.data.data));
  //     console.log(userData.data.data.data);

  //     if (userData.data.data.data.roles[0] === "ADMIN") {
  //       return navigate("/admin");
  //     }
  //     if (
  //       userData.data.data.data.roles[0] !== "HOME_OCCUPANT" &&
  //       uniqueObjectsByIdType(userData.data.data.data?.doc).length < 3
  //     ) {
  //       return navigate("/account-setup");
  //     }
  //     if (
  //       userData.data.data.data.status === "pending" &&
  //       (userData.data.data.data?.step < 4 || !userData.data.data.data?.step)
  //     ) {
  //       return navigate("/account-setup");
  //     }
  //     if (userData.data.data.data.status === "pending") {
  //       return navigate("/pending-verification");
  //     }
  //     return navigate("/dashboard");
  //   }
  // }, [userData.isSuccess]);

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
          {userData.isLoading ? (
            <div className="w-full h-full flex justify-center pt-20">
              <Oval
                visible={userData.isLoading}
                height="20"
                width="20"
                color="#ffffff"
                ariaLabel="oval-loading"
                wrapperStyle={{}}
                wrapperClass=""
              />
            </div>
          ) : (
            <Outlet />
          )}
        </div>
      </div>
    </div>
  );
};

export default Layout;
