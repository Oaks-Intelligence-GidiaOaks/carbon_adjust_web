import { HomeOccupantApplicationsHeader } from "@/components/contextual/index";
import { Outlet } from "react-router-dom";

const Applications = () => {
  // const dispatch = useDispatch();
  // const { activeComponent, applicationModalToShow } = useSelector(
  //   (state) => state.applicationForm
  // );
  // const allApplicationsQuery = useQuery({
  //   queryKey: ["application"],
  //   queryFn: getAllApplications,
  // });

  // allApplicationsQuery.isSuccess && allApplicationsQuery.data.length >= 1
  //   ? (dispatch(setActiveApplicationTab("aggregatorApplications")),
  //     dispatch(setActiveComponent("aggregatorApplications")),
  //     dispatch(setAggregatorApplications(allApplicationsQuery.data)))
  //   : (dispatch(setActiveApplicationTab("")), dispatch(setActiveComponent("")));

  // useEffect(() => {
  //   if (
  //     allApplicationsQuery.isSuccess &&
  //     allApplicationsQuery.data.length >= 1
  //   ) {
  //     // dispatch(setActiveApplicationTab("aggregatorApplications"));
  //     // dispatch(setActiveComponent("aggregatorApplications"));
  //     dispatch(setAggregatorApplications(allApplicationsQuery.data));
  //   } else {
  //     // dispatch(setActiveApplicationTab(""));
  //     // dispatch(setActiveComponent(""));
  //   }
  // }, [allApplicationsQuery.data, allApplicationsQuery.isSuccess, dispatch]);

  return (
    <div>
      {/* <TabView
        title={"Applications"}
        tabs={[
          { name: "Aggregators", content: <AggregatorGrid /> },
          { name: "HIA", content: "HIA" },
          { name: "Finance Institutions", content: "Finance" },
        ]}
      /> */}
      {/* Tab Components */}
      {/* {allApplicationsQuery.isLoading && (
        <main className="h-screen flex flex-col justify-center items-center">
          <BeatLoader color="#2196F3" />
        </main>
      )} */}
      {/* {allApplicationsQuery.isError && (
        <main className="h-screen flex flex-col justify-center items-center">
          <p className="px-6 text-red-600 font-poppins font-semibold capitalize text-center text-xl">
            Something went wrong.
          </p>
          <p className="px-6 text-red-600 font-poppins font-semibold text-center">
            Could not fetch data at the moment, please check your internet
            connection.
          </p>
        </main>
      )} */}

      <HomeOccupantApplicationsHeader />
      <Outlet />
    </div>
  );
};

export default Applications;
