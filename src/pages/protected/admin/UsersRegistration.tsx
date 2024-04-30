// import React from "react";

import TabToggler from "@/components/containers/TabToggler";
import { Grid } from "@/components/grid";
import { IComponentMap } from "@/types/general";
import { useState } from "react";
import agg_app from "../../../dummy/agg_app.json";
import assigned_app from "../../../dummy/assigned_app.json";

const UsersRegistration = () => {
  const adminTabs = [
    "HIA",
    "Financial Institutions",
    "Home Occupants/Owners",
    "Aggregators",
  ];

  const [activeTab, setActiveTab] = useState<string>(adminTabs[0]);

  const getCurrentTData: IComponentMap = {
    HIA: <Grid data={agg_app} pageSize={20} tableStyles="" />,
    "Financial Institutions": (
      <Grid data={assigned_app} pageSize={20} tableStyles="" />
    ),
    "Home Occupants/Owners": (
      <Grid data={assigned_app} pageSize={20} tableStyles="" />
    ),
    Aggregators: <Grid data={assigned_app} pageSize={20} tableStyles="" />,
  };

  //   const registrationData = useQuery({
  //     queryKey: ["fetch-registration", activeTab],
  //     queryFn: () => fetchUserRegistration(activeTab)
  //   })

  return (
    <div className="">
      <div className="flex-center justify-between mb-9">
        <h2 className="page-header">Users Registration</h2>

        {/* <Link to={`/finance/staff/add`}>
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
          tabs={adminTabs}
          activeTab={activeTab}
          onClick={setActiveTab}
        />
      </div>

      {/* table */}
      <div>{getCurrentTData[activeTab]}</div>
      <div>{/* <DataTable columns={columns} data={data} /> */}</div>
    </div>
  );
};

export default UsersRegistration;
