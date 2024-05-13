import axiosInstance from "@/api/axiosInstance";
import HOAggGrid from "@/components/grid/HOAggGrid";
// import PlaceholderActionCard from "@/components/reusables/PlaceholderActionCard";
import { useQuery } from "@tanstack/react-query";

type Props = {};

const AggregatorApplicationsTable = (_: Props) => {
  const aggApplications = useQuery({
    queryKey: ["get-agg-apps-history"],
    queryFn: () =>
      axiosInstance.get(`/applications/ho?limit=1&page=1&type=AGGREGATOR`),
  });
  console.log(aggApplications.data?.data.data.applications);
  return (
    <div className="flex gap-4 flex-wrap p-5">
      {
        aggApplications.isSuccess &&
          aggApplications.data?.data.data.applications.length >= 1 && (
            <HOAggGrid
              data={aggApplications.data?.data.data.applications}
              isUpdating={aggApplications.isLoading}
            />
          )
        // aggApplications.data?.data.data.applications.map(
        //   (app: any, i: number) => <AggAppCard app={app} key={i} />
        // )
      }
    </div>
  );
};

// const AggAppCard = ({ app }: { app: any }) => {
//   // const handleSubmit = (type: string) => {};

//   return (
//     <PlaceholderActionCard>
//       <p>ID: {app._id}</p>
//       <p>Retrofitting Type: {app.retrofittingType}</p>
//       <p>Aggregator Name: {app.aggregator.name}</p>
//       {/* <p>Email: {app.statuses.state}</p> */}
//       <p>Status: {app.currentState}</p>
//       <p>Application Stage: {app.appStage}</p>
//     </PlaceholderActionCard>
//   );
// };

export default AggregatorApplicationsTable;
