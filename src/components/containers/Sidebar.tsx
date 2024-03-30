import { Logo } from "@/assets/icons";
import { homeOwnerSideBarItems } from "@/constants";
import { SideBarItem, SideBarProps } from "@/types/general";
import { cn } from "@/utils";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ accountType }: SideBarProps) => {
  const { pathname } = useLocation();

  const identifyUserSideBar = (accountType: string): SideBarItem[] => {
    switch (accountType) {
      case "home-occupant":
        return homeOwnerSideBarItems;
      default:
        return homeOwnerSideBarItems;
    }
  };
  return (
    <div className="w-[20%] min-w-[260px] max-w-[302px] h-screen px-4 pt-10 sticky top-0 border-r border-[hsla(110,49%,88%,1)]">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-2">
          <Logo />
          <p className="font-poppins text-black">Carbon-Adjust</p>
        </div>
        <button className="w-5">
          <ChevronLeftIcon
            color="#139EEC"
            // fill="#139EEC"
            fontSize={20}
            width={20}
            className="text-[#139EEC_!important]"
          />
        </button>
      </div>

      <div className="flex flex-col gap-y-4 mt-10">
        {identifyUserSideBar(accountType).map((item, i) => {
          const Icon = item.icon;
          return (
            <Link
              key={i}
              to={`/dashboard${item.href}`}
              className={cn(
                "flex gap-4 py-3 px-2 pl-4 items-center font-manrope rounded-full",
                pathname === `/dashboard${item.href}`
                  ? "bg-gradient-to-r from-blue-secondary to-blue-main"
                  : "hover:bg-[#D6F2DE]"
              )}
            >
              <Icon
                className={cn(
                  pathname === `/dashboard${item.href}`
                    ? "invert brightness-0"
                    : ""
                )}
              />
              <span
                className={cn(
                  "text-sm",
                  pathname === `/dashboard${item.href}` ? "text-white" : ""
                )}
              >
                {item.title}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
