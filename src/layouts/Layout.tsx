import userService from "@/api/services/user";
// import { RootState } from "@/app/store";
import Sidebar from "@/components/containers/Sidebar";
import TopBar from "@/components/containers/TopBar";
import { setUser } from "@/features/userSlice";
import { cn, uniqueObjectsByIdType } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";
import { useDispatch } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

type Props = {
  sidebarType: string;
};

const Layout = (props: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { pathname } = useLocation();
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState<boolean>(false);

  const userData = useQuery({
    queryKey: ["fetch-user-info"],
    queryFn: userService().fetchUserInfo,
  });

  // ---------------------UNCOMMENT THIS CODE WHEN ADMIN STARTS VERIFYING USERS
  useEffect(() => {
    if (userData.isSuccess) {
      dispatch(setUser(userData.data.data.data));

      console.log(userData.data.data.data);

      if (userData.data.data.data.roles[0] === "ADMIN") {
        return navigate("/admin");
      }
      if (
        userData.data.data.data.roles[0] !== "HOME_OCCUPANT" &&
        uniqueObjectsByIdType(userData.data.data.data?.doc).length < 3
      ) {
        return navigate("/account-setup");
      }
      if (
        userData.data.data.data.status === "pending" &&
        (userData.data.data.data?.step < 4 || !userData.data.data.data?.step)
      ) {
        return navigate("/account-setup");
      }
      if (userData.data.data.data.status === "pending") {
        return navigate("/pending-verification");
      }
      if (userData.data.data.data.roles[0] === "AGGREGATOR") {
        return navigate("/aggregator");
      }
      if (userData.data.data.data.roles[0] === "HIA") {
        return navigate("/hia");
      }
      if (userData.data.data.data.roles[0] === "FINANCIAL_INSTITUTION") {
        return navigate("/finance");
      }
      if (userData.data.data.data.roles[0] === "INSURANCE") {
        return navigate("/insurance");
      }
      return navigate("/dashboard");
    }
  }, [userData.isSuccess]);

  return (
    <div className="flex max-h-screen max-w-screen overflow-hidden overflow-y-scroll">
      <Sidebar
        accountType={props.sidebarType}
        mobileMenuIsOpen={mobileMenuIsOpen}
        setMobileMenuIsOpen={setMobileMenuIsOpen}
      />
      <div className="flex-1 items-center">
        <TopBar
          mobileMenuIsOpen={mobileMenuIsOpen}
          setMobileMenuIsOpen={setMobileMenuIsOpen}
        />
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
                height="40"
                width="40"
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
