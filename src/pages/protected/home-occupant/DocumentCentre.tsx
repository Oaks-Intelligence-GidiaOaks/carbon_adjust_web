// // import folderPurple from "../../assets/folder-purple.svg";
// // import folderBlue from "../../assets/folder-blue.svg";
// // import { useSelector } from "react-redux";
// import { useState } from "react";
// import { useEffect } from "react";
// // import DocumentCard from "./DocumentCard";
// // import { slice } from "lodash";
// // import DragDropFile from "../primitives/DragDropFile";
// // import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
// // import "react-loading-skeleton/dist/skeleton.css";
// // import DocumentGrid from "../grid/DocumentGrid";
// import { DropBox } from "@/components/ui";
// import { InformationCircleIcon } from "@heroicons/react/24/outline";

const DocumentCenter = () => {
  return <div>Document Centre</div>;
};
//   const [isDocumentsInfoPanelOpen, setIsDocumentsInfoPanelOpen] =
//     useState(true);
//   const [windowSize, setWindowSize] = useState(window.innerWidth);

//   useEffect(() => {
//     window.addEventListener("resize", () => {
//       setWindowSize(window.innerWidth);
//     });
//     return () => {
//       window.removeEventListener("resize", () => {
//         setWindowSize(window.innerWidth);
//       });
//     };
//   }, []);

// return (
//     <div className="relative min-h-screen">
//       {/* blurred bg */}
//       {isDocumentsInfoPanelOpen && windowSize < 620 && (
//         <div className="absolute top-0 left-0 w-full h-full backdrop-blur z-10" />
//       )}
//       {/* info button */}
//       <div className="w-fit h-fit">
//         <InformationCircleIcon
//           width={24}
//           className={`${isDocumentsInfoPanelOpen ? "right-[240px]" : ""}
//           w-fit rounded-full min-[1020px]:hidden fixed z-20 right-4 mr-2 top-[72px] bg-white shadow-md shadow-[rgba(0,0,0,0.3)] cursor-pointer hover:text-ca-blue`}
//           onClick={() => {
//             setIsDocumentsInfoPanelOpen(!isDocumentsInfoPanelOpen);
//           }}
//         />
//       </div>
//       <div className="flex relative">
//         {/* Main pane */}
//         <div className="min-w-[240px] w-full px-2 sm:px-6">
//           <p className="poppins-4 text-main text-lg font-medium">
//             Document Centre
//           </p>

//           {/* recent uploads */}
//           <p className="mt-10 text-lg text-[#143B76] poppins-5">
//             Recent Uploads
//           </p>
//           {/* <div className="w-full h-[254px] mt-2 overflow-x-scroll mb-10 scrollbar-horizontal flex gap-4">
//             {tableData
//               ?.slice(0, 4)
//               .map((item, i) => <DocumentCard key={i} data={item} />) || (
//               <Skeleton
//                 containerClassName="flex-1 flex gap-2 flex-row"
//                 height={180}
//                 count={4}
//               />
//             )}
//           </div> */}

//           {/* upload files */}
//           <p className="mt-10 text-lg text-[#143B76] poppins-5">Upload files</p>

//           <DropBox />
//         </div>
//       </div>

//       {/* users files */}
//       <p className="flex justify-between items-end mt-10 text-lg text-[#143B76] poppins-5 px-2 sm:px-6">
//         <span>Your Files</span>
//         <span className="text-sm text-purple-950 underline ">View All</span>
//       </p>
//       {/* <div className="p-2 sm:px-6 w-full overflow-x-scroll mt-10 scrollbar-horizontal pb-4 mb-10">
//         {isSuccess && <DocumentGrid data={tableData} />}
//       </div> */}
//     </div>
// );
// };

export default DocumentCenter;
