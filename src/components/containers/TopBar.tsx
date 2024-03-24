import { UserCircleIcon, UserIcon } from "@heroicons/react/24/outline";

type Props = {};

const TopBar = (_: Props) => {
  return (
    <div className="h-10 px-4 py-6 w-full flex justify-center">
      <div className="flex justify-end w-full max-w-[1440px]">
        <div className="flex gap-1 items-center">
          <div className="flex justify-center items-center">
            <UserCircleIcon fontSize={20} width={32} />
          </div>
          <span>Jeffery Cooper</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
