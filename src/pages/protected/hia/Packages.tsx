import { Grid } from "@/components/grid";
import NoPackages from "@/components/reusables/NoPackages";
import { Button } from "@/components/ui";
import pkgsData from "../../../dummy/pkgData.json";
import HiaPackageCard from "@/components/ui/HiaPackageCard";
import { Link } from "react-router-dom";

const Packages = () => {
  const props = {
    logo: "/assets/graphics/folder-graphic.svg",
    package_name: "lorem ipsum",
    services: [
      "window retrofitting, door retrofitting",
      "insulation",
      "flexible dispatch",
    ],
    locations: ["England", "hawei"],
  };

  if (false) {
    return <NoPackages route="/hia/package/add" />;
  }

  return (
    <div className="font-poppins">
      <div className="flex-center justify-between">
        <div>
          <h2 className="page-header">Packages</h2>
          <p className="text-=[667085] text-sm ">
            Here are your recently created packages
          </p>
        </div>

        <Link to="/hia/packages/add">
          <Button className=" text-white flex-center gap-3">
            <span className="text-white">Create package</span>
            <img
              src="/assets/icons/plus-circle.svg"
              className=""
              alt="carbon adjust icon"
            />
          </Button>
        </Link>
      </div>

      {/* cards */}
      <div className="flex-center overflow-x-scroll gap-3 mt-[40px]">
        <HiaPackageCard data={props} />
        <HiaPackageCard data={props} />
        <HiaPackageCard data={props} />
      </div>

      {/* table */}
      <div className="mt-[40px]">
        <Grid data={pkgsData} tableStyles={` `} pageSize={40} />
      </div>
    </div>
  );
};

export default Packages;
