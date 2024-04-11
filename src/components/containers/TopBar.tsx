import { UserCircleIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";

type Props = {};

const TopBar = (_: Props) => {
  const breadcrumbs = useBreadcrumbs();

  return (
    <div className="h-10 px-4 py-6 w-full flex justify-center">
      <div className="flex justify-between items-center w-full max-w-[1440px]">
        <div className="flex">
          {breadcrumbs.map(({ match, breadcrumb, key }, i, arr) => (
            <div key={key}>
              <Link
                key={match.pathname}
                to={match.pathname}
                className="capitalize font-poppins"
              >
                <span className="text-black-main text-sm">{breadcrumb}</span>
              </Link>
              {i < arr.length - 1 ? <span>/</span> : null}
            </div>
          ))}
        </div>
        <div>
          <div className="flex gap-1 items-center">
            <div className="flex justify-center items-center">
              <UserCircleIcon fontSize={20} width={32} />
            </div>
            <span>Jeffery Cooper</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
