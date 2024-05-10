import React, { useRef, useState } from "react";
import {
  useReactTable,
  createColumnHelper,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  SortingState,
} from "@tanstack/react-table";
// import Modal from "../../reuseable/RegistrationRejectionModal";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
// import {
//   Loading,
// //   PaginationButton,
// //   TableActionButtonHia,
// } from "../reusables/Loading";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { formatDate, truncateWithEllipsis } from "../../lib/utils";
import { useMutation } from "@tanstack/react-query";
import { BsThreeDotsVertical } from "react-icons/bs";
import axios from "axios";
// import { FaDownload, FaList } from "react-icons/fa";
import TablePagination from "../reusables/TablePagination";
import TableFilter from "../reusables/TableFilter";
import { TbSortAscending, TbSortDescending } from "react-icons/tb";
import LoadingModal from "../reusables/LoadingModal";
import { MdDownloadDone, MdOutlineDeleteOutline } from "react-icons/md";
// import { CiWarning } from "react-icons/ci";
import { BiMessage } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
// import file_icon from "../../../assets/icons/file_icon.png";
import { PiWarningBold } from "react-icons/pi";
// import DeleteAccount from "../../modals/DeleteAccount";
// import ResponseAlert from "../../reuseable/ResponseAlert";
import { useOutsideCloser } from "../../hooks/useOutsideCloser";

const AdminAggregatorRegistrationGrid = ({
  data,
  isUpdating,
}: {
  data: any[];
  isUpdating: boolean;
}) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [currentRowId, setCurrentRowId] = useState(null);
  const [expandedRows, setExpandedRows] = useState([]);
  // const [declineRowId, setDeclineRowId] = useState(null);
  // const [showDeclineModal, setShowDeclineModal] = useState(false);
  const [, setShowDeleteModal] = useState(false);
  // const [showResponseAlert, setShowResponseAlert] = useState(false);
  // const [responseStatus, setResponseStatus] = useState(false);
  // const [responseMessage, setResponseMessage] = useState(null);
  const [, setUserToDelete] = useState(null);

  const actionButtonsRef = useRef<HTMLDivElement>(null);

  const updateVerificationStatus = async ({
    id,
    verified,
    message,
  }: {
    id: any;
    verified: string;
    message?: string;
  }) => {
    try {
      const response = await axios.put(`/admin/onboard_organization`, {
        verified,
        id,
        message,
      });
      return response.data;
    } catch (error) {
      console.error("Error updating verification status:", error);
      throw error;
    }
  };

  const mutation = useMutation({
    mutationFn: updateVerificationStatus,
    onSuccess: () => {
      // Manually update the data state to reflect the updated status
      //   setData((prevData) =>
      //     prevData.map((item) =>
      //       item._id === variables.id
      //         ? { ...item, verified: variables.verified }
      //         : item
      //     )
      //   );
    },
  });

  const getTextColor = (value: null | string) => {
    if (value === null) {
      return "#139EEC";
    } else if (value === "completed") {
      return "#8AC926";
    } else if (value === "suspended") {
      return "#C9C126";
    } else {
      return "#FF595E";
    }
  };

  // const handleModalAction = async (action: any) => {
  //   try {
  //     setShowModal(false);
  //     if (action === "Approve") {
  //       await mutation.mutateAsync({ id: currentRowId, verified: "completed" });
  //     } else if (action === "Reject") {
  //       await mutation.mutateAsync({ id: currentRowId, verified: "rejected" });
  //     }
  //   } catch (error) {
  //     console.error("Error updating verification status:", error);
  //   }
  // };

  //   const handleApprovalRejection = async (id: any, action: any) => {
  //     try {
  //       if (action === "Approve") {
  //         await mutation.mutateAsync({ id, verified: "completed" });
  //       } else if (action === "Decline") {
  //         setDeclineRowId(id);
  //         setShowDeclineModal(true);
  //       }
  //     } catch (error) {
  //       console.error("Error updating verification status:", error);
  //     }
  //   };

  // const handleModalReject = async (id: any, reason: any) => {
  //   try {
  //     await mutation.mutateAsync({ id, verified: "rejected", message: reason });
  //   } catch (error) {
  //     console.error("Error rejecting:", error);
  //   }
  // };

  const handleSuspension = async (id: any) => {
    try {
      await mutation.mutateAsync({ id, verified: "suspended" });
    } catch (error) {
      console.error("Error rejecting:", error);
    }
  };

  const handleUnsuspension = async (id: any) => {
    try {
      await mutation.mutateAsync({ id, verified: "completed" });
    } catch (error) {
      console.error("Error rejecting:", error);
    }
  };

  // const ViewsCount = ({ info }: { info: any }) => {
  //   console.log(info.getValue());

  //   let count = info.getValue().length;

  //   return <div className="px-4 w-[50px] mx-auto">{count}</div>;
  // };

  const handleActionClick = (id: any) => {
    if (currentRowId === id) {
      setShowModal((prevState) => !prevState);
    } else {
      setCurrentRowId(id);
      setShowModal(true);
    }
  };

  const toggleRowExpansion = (rowId: any) => {
    setExpandedRows((prevExpandedRows: any) => {
      if (prevExpandedRows.includes(rowId)) {
        return prevExpandedRows.filter((id: string) => id !== rowId);
      } else {
        return [...prevExpandedRows, rowId];
      }
    });
  };

  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor((_, rowIndex) => ({ serialNumber: rowIndex + 1 }), {
      id: "serialNumber",
      cell: (info) => (
        <div className="w-14 mx-auto text-center">
          {" "}
          {info.getValue().serialNumber}{" "}
        </div>
      ),
      header: () => <div className="w-14 px-1 text-center">S/N</div>,
    }),
    columnHelper.accessor((row: any) => row?.createdAt, {
      id: "createdAt",
      cell: (info) => (
        <div className="w-44 mx-auto text-left">
          {" "}
          {formatDate(info.getValue())}{" "}
        </div>
      ),
      header: () => <div className="w-44 text-left">Registration date</div>,
    }),
    columnHelper.accessor((row: any) => row?.contact_name, {
      id: "contact_name",
      cell: (info) => (
        <div className="w-44 mx-auto text-left">{info.getValue()}</div>
      ),
      header: () => <div className="w-44 text-left">Organization name</div>,
    }),

    columnHelper.accessor((row: any) => row?.address, {
      id: "contact_address",
      cell: (info) => (
        <div className="w-44 mx-auto text-left">
          {" "}
          {truncateWithEllipsis(info.getValue(), 50)}
        </div>
      ),
      header: () => <div className="w-44 text-left">Contact address</div>,
    }),
    columnHelper.accessor((row: any) => row?.contact_phone, {
      id: "phone_number",
      cell: (info) => (
        <div className="w-44 mx-auto text-left">{info.getValue()}</div>
      ),
      header: () => <div className="w-44 text-left">Phone</div>,
    }),
    columnHelper.accessor((row: any) => row?.contact_email, {
      id: "email",
      cell: (info) => (
        <div className="w-fit px-4 text-left">{info.getValue()}</div>
      ),
      header: () => <div className="w-44 px-1 text-left">Email</div>,
    }),

    columnHelper.accessor((row: any) => row?.verified, {
      id: "status",
      cell: (info: any) => (
        <div className="w-44 relative flex items-center">
          {info.getValue() === null ? (
            <span style={{ color: "#139EEC" }}>Pending</span>
          ) : info.getValue() === "completed" ? (
            <span style={{ color: "#8AC926" }}>Approved</span>
          ) : info.getValue() === "suspended" ? (
            <span style={{ color: "#c9c126" }}>Suspended</span>
          ) : (
            <span style={{ color: "#FF595E" }}>Rejected</span>
          )}

          {/* Toggle icon */}
          <div
            className="absolute right-[80px] cursor-pointer"
            onClick={() => toggleRowExpansion(info.row.original._id)}
            style={{ color: getTextColor(info.getValue()) }}
          >
            {(expandedRows as any).includes(info.row.original._id) ? (
              <IoIosArrowDown />
            ) : (
              <IoIosArrowUp />
            )}
          </div>
        </div>
      ),
      header: () => <div className="w-44 whitespace-nowrap">Status</div>,
    }),

    columnHelper.accessor((row: any) => row._id, {
      id: "_id",
      cell: (info: any) => (
        <div className="relative px-4">
          {/* Hamburger menu icon */}
          <div
            className="rounded-full px-3 p-1 text-xs cursor-pointer mx-auto hover:bg-gray-300"
            onClick={() => handleActionClick(info.getValue())}
          >
            <BsThreeDotsVertical size={20} className="" />
          </div>

          {/* Modal */}

          {showModal && currentRowId === info.getValue() && (
            <div
              ref={actionButtonsRef}
              onClick={() => setShowModal(!showModal)}
              className="absolute top-[-30px] flex flex-col gap-y-2  right-[40px] bg-white border border-gray-300  rounded p-2"
            >
              <div
                className="cursor-pointer flex items-center gap-1 font-poppins whitespace-nowrap text-left text-xs hover:text-ca-red px-1"
                onClick={() => {
                  setUserToDelete(info.row.original);
                  setShowDeleteModal(true);
                }}
              >
                <MdOutlineDeleteOutline />
                <span>Delete account</span>
              </div>
              {info.row.original.verified !== "suspended" ? (
                <div
                  className="cursor-pointer flex items-center gap-1 font-poppins hover:text-yellow-400  text-xs whitespace-nowrap px-1"
                  onClick={() => handleSuspension(info.row.original._id)}
                >
                  <PiWarningBold />
                  <span>Suspend account</span>
                </div>
              ) : (
                <div
                  className="cursor-pointer flex items-center gap-1 font-poppins hover:text-[#8AC926] text-xs whitespace-nowrap px-1"
                  onClick={() => handleUnsuspension(info.row.original._id)}
                >
                  <MdDownloadDone />
                  <span>Unsuspend account</span>
                </div>
              )}
              <div
                className="cursor-pointer flex items-center gap-1 font-poppins hover:text-ca-blue text-xs whitespace-nowrap px-1"
                onClick={() =>
                  navigate(`/admin/inbox?uid=${info.row.original.user._id}`)
                }
              >
                <BiMessage />
                <span> Send a message</span>
              </div>
            </div>
          )}
        </div>
      ),
      header: () => <div className="">Action</div>,
    }),
  ];

  const [sorting, setSorting] = useState<SortingState>([]);
  const [filterQuery, setFilterQuery] = useState("");

  const table = useReactTable({
    data: data || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
    state: {
      sorting: sorting,
      globalFilter: filterQuery,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFilterQuery,
  });

  //   const getFileFormat = (url: any) => {
  //     const path = new URL(url).pathname;
  //     const filename = path.split("/").pop();
  //     const parts = filename.split(".");
  //     if (parts.length > 1) {
  //       return "." + parts.pop().toLowerCase();
  //     }
  //     return "";
  //   };

  useOutsideCloser(actionButtonsRef, showModal, setShowModal);

  return (
    <div className="w-full">
      <TableFilter setFilterQuery={setFilterQuery} />
      {/* main table */}
      <div className="overflow-x-scroll w-full scrollbar-horizontal px-2 sm:px-6">
        <table className="text-center w-full font-poppins">
          <thead className="bg-[#f4f0f6] rounded-2xl">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr
                className="text-ca-blue font-[600]"
                key={(headerGroup as any)._id}
              >
                {headerGroup.headers.map((header, i) => (
                  <th
                    className={`poppins-5 px-3 cursor-pointer py-3 text-[#143B76] text-sm text-left sticky top-0 ${
                      i === 0 ? "rounded-l-xl" : ""
                    }${
                      i === headerGroup.headers.length - 1 ? "rounded-r-xl" : ""
                    }`}
                    key={header.id}
                    colSpan={header.colSpan}
                    style={{ width: header.getSize() }}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    <span className="flex justify-between items-center flex-nowrap whitespace-nowrap">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                      {
                        {
                          asc: <TbSortAscending size={20} />,
                          desc: <TbSortDescending size={20} />,
                        }[
                          header.column.getIsSorted() === "asc"
                            ? "asc"
                            : header.column.getIsSorted() === "desc"
                            ? "desc"
                            : "desc"
                        ]
                      }
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody className='before:content-["@"] before:block before:leading-[20px] before:-indent-[99999px] after:content-["@"] after:block after:leading-[20px] after:-indent-[99999px]'>
            {table.getRowModel().rows.map((row) => (
              <React.Fragment key={row.id}>
                {/* Main row */}
                <tr
                  className="bg-[black_!important] group-[]:hover"
                  key={row.id}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      className="px-3 py-3 poppins-4 text-main text-sm even:bg-white odd: bg-[#F8F9FA]"
                      key={cell.id}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>

                {/* Collapsible row */}
                {/* <tr>
                  <td colSpan={columns.length}>
                    {(expandedRows as any).includes((row as any).original._id) && (
                      <div className="p-4 bg-[#F8F9FA] ">
                        <div className="flex items-center">
                          <div className="flex flex-col items-center border-r px-24">
                            <div className="">
                              <span className="poppins-4 text-main text-xs font-medium whitespace-nowrap">
                                Letter of Authorization
                                {(row as any).original.account_auth_letter && (
                                      <div>
                                        <img
                                          className="w-10 h-10 bg-cover"
                                          src={file_icon}
                                          alt=""
                                        />
                                      </div>
                                )}
                              </span>
                            </div>
                            <div className="flex gap-4 pl-12">
                              <a
                                href={row.original.account_auth_letter}
                                className="poppins-4 text-main text-xs"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                View
                              </a>
                              <FaDownload />
                            </div>
                          </div>

                          <div className="flex flex-col items-center border-r px-28">
                            <div className="">
                              <span className="poppins-4 text-main text-xs font-medium whitespace-nowrap">
                                Certificate of Incorporation
                                {row.original.incorporation_cert && (
                                  <span>
                                    {" "}
                                    {getFileFormat(
                                      row.original.incorporation_cert
                                    )}{" "}
                                    {[
                                      ".jpg",
                                      ".jpeg",
                                      ".png",
                                      ".gif",
                                      ".bmp",
                                    ].includes(
                                      getFileFormat(
                                        row.original.incorporation_cert
                                      )
                                    ) ? (
                                      <img
                                        src={row.original.incorporation_cert}
                                        alt="Account Auth Letter"
                                        className="w-10 h-10"
                                      />
                                    ) : (
                                      <div>
                                        <img
                                          className="w-10 h-10 bg-cover"
                                          src={file_icon}
                                          alt=""
                                        />
                                      </div>
                                    )}
                                  </span>
                                )}
                              </span>
                            </div>
                            <div className="flex gap-4 pl-12">
                              <a
                                href={row.original.incorporation_cert}
                                className="poppins-4 text-main text-xs"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                View
                              </a>
                              <FaDownload />
                            </div>
                          </div>

                          <div className="flex flex-col items-center border-r px-28">
                            <div className="">
                              <span className="poppins-4 text-main text-xs font-medium whitespace-nowrap">
                                Identity document
                                {row.original.contact_id && (
                                      <div>
                                        <img
                                          className="w-10 h-10 bg-cover"
                                          src={"/assets/graphics/view-document.svg"}
                                          alt=""
                                        />
                                      </div>
                                )}
                              </span>
                            </div>
                            <div className="flex gap-4 pl-12">
                              <a
                                href={row.original.contact_id}
                                className="poppins-4 text-main text-xs"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                View
                              </a>
                              <FaDownload className="cursor-pointer" />
                            </div>
                          </div>

                          <div className="flex gap-2 px-28">
                            <button
                              onClick={() =>
                                handleApprovalRejection(
                                  row.original._id,
                                  "Approve"
                                )
                              }
                              className=" bg-ca-blue text-white poppins-4 text-xs px-3 py-1"
                            >
                              Approve
                            </button>
                            <button
                              onClick={() =>
                                handleApprovalRejection(
                                  row.original._id,
                                  "Decline"
                                )
                              }
                              className=" bg-ca-red text-white poppins-4 text-xs px-3 py-1"
                            >
                              Decline
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </td>
                </tr> */}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
      {isUpdating && <LoadingModal text={"Updating Account Status"} />}
      {/* {showDeclineModal && (
        <Modal
          isOpen={showDeclineModal}
          onClose={() => setShowDeclineModal(false)}
          onReject={handleModalReject}
          label={"Click to Reject"}
          rowId={declineRowId}
        />
      )} */}

      {/* pagination */}
      <TablePagination table={table} />
    </div>
  );
};

export default AdminAggregatorRegistrationGrid;
