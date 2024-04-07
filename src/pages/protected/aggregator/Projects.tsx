import TabToggler from "@/components/containers/TabToggler";
import { Grid } from "@/components/grid";
import { Button } from "@/components/ui";
import { FC, useState } from "react";

const Projects: FC = () => {
  const projectTabs = [
    "Create project",
    "Project in review",
    "Project Completed",
  ];

  const [activeTab, setActiveTab] = useState<string>(projectTabs[0]);

  return (
    <div>
      <div className="flex-center justify-between">
        <h2 className="page-header">Project</h2>
        <Button className="flex items-center gap-2">
          <span className="text-white">Create new project</span>

          <img
            src="/assets/icons/plus-circle.svg"
            className="h-6 w-6"
            alt="carbon-adjust icon"
          />
        </Button>
      </div>

      {/* Tab */}
      <div className="mt-6">
        <TabToggler
          tabs={projectTabs}
          activeTab={activeTab}
          onClick={setActiveTab}
        />
      </div>

      <div className="mt-4">
        <Grid data={[]} pageSize={40} tableStyles={` `} />
      </div>
    </div>
  );
};

export default Projects;
