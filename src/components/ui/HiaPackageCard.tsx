// import calendar from "../../assets/icons/calendar.svg";
// import MoreVert from "../../assets/icons/MoreVert.svg";
// import CarbonAdjust from "../../assets/icons/hia_package_logo.svg";
// import eyeIcon from "../../assets/icons/eye.svg";
// // import { formatDate } from "../../lib/helpers";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import axios from "axios";
// import { BiDotsVertical } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { Button } from "./Button";

const HiaPackageCard = ({ data }: { data: any }) => {
  let bg_gradient = `bg-gradient-to-r from-[#4547B1] to-[#82BAE3]`;

  //   const queryClient = useQueryClient();

  //   const toggle_hia_publish = useMutation({
  //     mutationKey: ["toggle_hia_publish"],
  //     mutationFn: (publishedValue) =>
  //       axios
  //         .put(`package/hia/${data._id}`, publishedValue)
  //         .then((res) => res.data),
  //     onSuccess: () =>
  //       queryClient.invalidateQueries({ queryKey: ["get_hia_packages"] }),
  //   });

  //   const handlePublish = () => {
  //     let isPublished = data.published;

  //     isPublished
  //       ? toggle_hia_publish.mutate({ published: false })
  //       : toggle_hia_publish.mutate({ published: true });
  //   };

  return (
    <div
      className={`font-titleFont font-[500] text-xs w-[403px_!important] shrink-0  `}
    >
      <div
        className={`p-4 flex gap-2 rounded-lg shadow-md relative border ${bg_gradient} bg-cover`}
      >
        <div className="w-12 h-12 rounded-full bg-white overflow-hidden">
          <img src={data?.logo} alt="package logo" className="object-cover" />
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-lg font-[700] flex-1 mt-2 text-white font-sans">
              {data?.package_name}
            </h4>
            {/* <img src={MoreVert} className="" /> */}

            <BsThreeDots size={20} fill="white" className="mt-2" />
          </div>

          <h5 className="text-white/70 font-bold font-lato">Specialty</h5>

          <div className="flex gap-2 mt-1 flex-wrap justify-start h-10 line-clamp-2 text-ellipsis">
            {data?.services?.slice(0, 4).map((it: any) => (
              <span
                key={it}
                className="font-sans flex flex-[0.5] whitespace-nowrap flex-wrap text-white font-bold"
              >
                {it}
              </span>
            ))}
          </div>

          <h5 className="my-1 text-ca-blue mt-3 font-bold text-white/70">
            Location
          </h5>
          <div className="grid grid-cols-3 gap-2 w-full h-10 gap-x-2 text-white font-bold line-clamp-1 overflow-hidden text-ellipsis">
            <div className="col-span-2 flex flex-wrap gap-x-2">
              {data?.locations?.map((it: any) => (
                <span
                  key={it}
                  className="font-sans flex whitespace-nowrap text-white font-bold"
                >
                  {it}
                </span>
              ))}
            </div>
            <div className="col-span-1 flex items-end justify-end">
              <Button
                variant={"ghost"}
                className="h-7 px-3 text-xs bg-blue-main text-white w-full"
              >
                Publish
              </Button>
            </div>
          </div>

          {/* {!home_owner && (
            <div
              onClick={handlePublish}
              className="absolute bottom-3 right-3 border hover:bg-ca-blue hover:text-white p-1 px-3 cursor-pointer rounded-md border-ca-blue text-ca-blue"
            >
              <span className="text-xs">
                {toggle_hia_publish.isLoading
                  ? "....."
                  : data?.published
                  ? "unpublish"
                  : "publish"}{" "}
              </span>
            </div>
          )} */}
        </div>
      </div>

      <div className="mt-1 flex items-center justify-between">
        <p className="text-ca-blue flex items-center gap-1">
          {/* <img src={calendar} className=" text-ca-blue" /> */}
          {/* <span className="font-[700]">Date created</span>:{" "} */}
          {/* <span className="text-black ">{formatDate(data?.createdAt)}</span> */}
        </p>

        {/* <p className="flex items-center gap-1">
          <img src={eyeIcon} alt="" />

          <span>Views 1.2k</span>
        </p> */}
      </div>
    </div>
  );
};

export default HiaPackageCard;
