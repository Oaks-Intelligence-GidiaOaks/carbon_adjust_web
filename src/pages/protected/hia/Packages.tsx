// import { Grid } from "@/components/grid";
import NoPackages from "@/components/reusables/NoPackages";
import { Button } from "@/components/ui";
// import pkgsData from "../../../dummy/pkgData.json";
import HiaPackageCard from "@/components/ui/HiaPackageCard";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/api/axiosInstance";
import { Oval } from "react-loader-spinner";
// import { HiaPackages } from ".";

const Packages = () => {
  const HIAPackages = useQuery({
    queryKey: ["get-hia-packages"],
    queryFn: () => axiosInstance.get(`/packages/hia`),
  });

  // const props = {
  //   logo: "/assets/graphics/folder-graphic.svg",
  //   package_name: "lorem ipsum",
  //   services: [
  //     "window retrofitting, door retrofitting",
  //     "insulation",
  //     "flexible dispatch",
  //   ],
  //   locations: ["England", "hawei"],
  // };

  if (false) {
    return <NoPackages route="/hia/package/add" />;
  }

  console.log(HIAPackages.data?.data);

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
      <div className="overflow-x-scroll mt-[40px]">
        {HIAPackages.isLoading && (
          <Oval
            visible={HIAPackages.isLoading}
            height="20"
            width="20"
            color="#ffffff"
            ariaLabel="oval-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        )}
        {HIAPackages.isSuccess &&
          HIAPackages.data.data.data.packages.length < 1 && (
            <p>No packages created</p>
          )}
        {HIAPackages.isSuccess &&
          HIAPackages.data.data.data.packages.length >= 1 && (
            <div className="w-0 overflow-visible flex gap-4">
              {HIAPackages.data.data.data.packages.map((p: any, i: number) => (
                <HiaPackageCard key={i} data={p} isPlaceholder={false} />
              ))}
            </div>
          )}
      </div>

      {/* table */}
      <div className="mt-[40px]">
        {/* <Grid data={pkgsData} tableStyles={` `} pageSize={40} /> */}
        <div className="w-full flex flex-wrap gap-x-4"></div>
      </div>
    </div>
  );
};

export default Packages;
