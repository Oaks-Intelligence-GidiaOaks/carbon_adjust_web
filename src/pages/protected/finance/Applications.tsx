// import React from "react";

import TabToggler from "@/components/containers/TabToggler";
// import { Grid } from "@/components/grid";
import { Button } from "@/components/ui";
// import { IComponentMap } from "@/types/general";
import { useState } from "react";
// import { Link } from "react-router-dom";
// import agg_app from "../../../dummy/agg_app.json";
// import assigned_app from "../../../dummy/assigned_app.json";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import axiosInstance from "@/api/axiosInstance";
import PlaceholderActionCard from "@/components/reusables/PlaceholderActionCard";
import { Oval } from "react-loader-spinner";

const Applications = () => {
  const databaseTabs = ["All Applications", "Assigned Applications"];

  const [activeTab, setActiveTab] = useState<string>(databaseTabs[0]);

  const finApplications = useQuery({
    queryKey: ["get-fin-applications"],
    queryFn: () => axiosInstance.get(`/applications/fin`),
  });
  console.log(finApplications.data?.data.data.applications);

  // const getCurrentTData: IComponentMap = {
  //   "All Applications": <Grid data={agg_app} pageSize={20} tableStyles="" />,
  //   "Assigned Applications": (
  //     <Grid data={assigned_app} pageSize={20} tableStyles="" />
  //   ),
  // };

  return (
    <div className="">
      <div className="flex-center justify-between mb-4">
        <h2 className="page-header">Applications</h2>
        {/* 
        <Link to={`/finance/staff/add`}>
          <Button className="flex-center gap-2">
            <span className="text-white">Add staff</span>
            <img
              src="/assets/icons/plus-circle.svg"
              className="h-6 w-6"
              alt="carbon-adjust icon"
            />
          </Button>
        </Link> */}
      </div>
      {/* toggler */}
      <div className="mb-4">
        <TabToggler
          tabs={databaseTabs}
          activeTab={activeTab}
          onClick={setActiveTab}
        />
      </div>
      {/* table */}
      {/* <div>{getCurrentTData[activeTab]}</div> */}
      <div className="grid gap-4 flex-wrap grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {finApplications.isSuccess &&
          finApplications.data?.data.data.applications.length >= 1 &&
          finApplications.data?.data.data.applications.map(
            (app: any, i: number) => <FinanceAppCard app={app} key={i} />
          )}
      </div>{" "}
    </div>
  );
};

const FinanceAppCard = ({ app }: { app: any }) => {
  const queryClient = useQueryClient();

  const [file, setFile] = useState<File | null>();

  // const handleSubmit = (type: string) => {};

  const declineMutation = useMutation({
    mutationKey: ["decline application"],
    mutationFn: (ids: { appId: string }) => {
      const formData = new FormData();

      if (!file) {
        toast.error("Attach document");
      }
      if (file) {
        formData.append("file", file);
      }
      formData.append("status", "false");
      // formData.append("packageId", ids.packageId);

      return axiosInstance.patch(
        `applications/${ids.appId}/fin/review`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    },
    onSuccess: () => {
      toast.success("Application declined");
      queryClient.invalidateQueries({
        queryKey: ["get-fin-applications"],
      });
    },
    onError: () => {
      toast.error("Error approving contractor");
    },
  });

  console.log(app);

  const approvedMutation = useMutation({
    mutationKey: ["approve application"],
    mutationFn: (ids: { appId: string }) => {
      const formData = new FormData();

      if (!file) {
        toast.error("Attach document");
      }
      if (file) {
        formData.append("file", file);
      }
      formData.append("status", "true");
      // formData.append("packageId", ids.packageId);

      return axiosInstance.patch(
        `applications/${ids.appId}/fin/review`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    },
    onSuccess: () => {
      toast.success("Application approved");
      queryClient.invalidateQueries({
        queryKey: ["get-fin-applications"],
      });
    },
    onError: () => {
      toast.error("Error approving application");
    },
  });

  return (
    <PlaceholderActionCard>
      <p>APP Ref: {app.appRef}</p>
      <p>APP ID: {app._id}</p>
      <p>Package ID: {app.fin.packageId._id}</p>
      {/* <p>Email: {app.statuses.state}</p> */}
      <p>Status: {app.fin.status}</p>
      <p>Package Name: {app.fin.packageId.name}</p>

      <input
        type="file"
        name="image"
        id="image"
        onChange={(e) => {
          if (e.target.files) {
            setFile(e.target.files[0]);
          }
        }}
      />

      {app.fin.status === "APPLIED" && (
        <div className="mt-4 flex flex-col gap-3">
          <label htmlFor="image">
            <Button
              variant={"ghost"}
              onClick={() =>
                declineMutation.mutate({
                  appId: app._id,
                })
              }
              disabled={declineMutation.isPending || file === null}
              className="bg-red-500 w-full text-white"
            >
              {declineMutation.isPending ? (
                <Oval
                  visible={declineMutation.isPending}
                  height="20"
                  width="20"
                  color="#ffffff"
                  ariaLabel="oval-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              ) : (
                <span>Decline</span>
              )}
            </Button>
          </label>
          <label htmlFor="image">
            <Button
              variant={"ghost"}
              disabled={approvedMutation.isPending}
              onClick={() =>
                approvedMutation.mutate({
                  appId: app._id,
                })
              }
              className="bg-green-500 w-full text-white"
            >
              {approvedMutation.isPending ? (
                <Oval
                  visible={approvedMutation.isPending || file === null}
                  height="20"
                  width="20"
                  color="#ffffff"
                  ariaLabel="oval-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              ) : (
                <span>Approve</span>
              )}
            </Button>
          </label>
        </div>
      )}
    </PlaceholderActionCard>
  );
};

export default Applications;
