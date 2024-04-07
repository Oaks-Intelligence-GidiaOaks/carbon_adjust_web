import TabToggler from "@/components/containers/TabToggler";
import { Grid } from "@/components/grid";
import { Button } from "@/components/ui";
import { FC, useState } from "react";

const Database: FC = () => {
  const databaseTabs = ["All Applications", "Assigned Applications"];

  const [activeTab, setActiveTab] = useState<string>(databaseTabs[0]);

  return (
    <div className="">
      <div className="flex-center justify-between mb-9">
        <h2 className="page-header">Database</h2>

        <Button className="flex-center gap-2">
          <span className="text-white">Add staff</span>
          <img
            src="/assets/icons/plus-circle.svg"
            className="h-6 w-6"
            alt="carbon-adjust icon"
          />
        </Button>
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
      <div>
        <Grid data={[]} pageSize={20} tableStyles="" />
      </div>
    </div>
  );
};

export default Database;
