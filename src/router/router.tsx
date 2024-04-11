import {
  createBrowserRouter,
  Navigate,
  ScrollRestoration,
} from "react-router-dom";
import { Home, Login, Register } from "@/pages/public";
import AccountSetup from "@/pages/protected/shared/account-setup/AccountSetup";
import Layout from "@/layouts/Layout";
import {
  Applications,
  CarbonCreditAccount,
  Dashboard,
  Devices,
  DocumentCentre,
  Inbox,
  Profile,
} from "@/pages/protected/home-occupant";
import Contact from "@/pages/protected/home-occupant/Contact";
import {
  AggregatorAddStaff,
  AggregatorContact,
  AggregatorDashboard,
  AggregatorDatabase,
  AggregatorDevices,
  AggregatorDocumentCenter,
  AggregatorInbox,
  AggregatorProfile,
  AggregatorProjects,
  AggregatorStaff,
  AggregatorWallet,
} from "@/pages/protected/aggregator";
import ApplyToAggregator from "@/pages/protected/home-occupant/ApplyToAggregator";
import ApplyToHIA from "@/pages/protected/home-occupant/ApplyToHIA";
import ApplyToFinance from "@/pages/protected/home-occupant/ApplyToFinance";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/account-setup",
    element: <AccountSetup />,
  },
  {
    path: "/dashboard",
    element: <Layout sidebarType="home-occupant" />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "applications",
        element: <Applications />,
        children: [
          {
            path: "",
            element: (
              <>
                <Navigate to={"/dashboard/applications/aggregator"} />
                <ScrollRestoration />
              </>
            ),
          },
          {
            path: "aggregator",
            element: <ApplyToAggregator />,
          },
          {
            path: "aggregator-applications",
            element: <ApplyToAggregator />,
          },
          {
            path: "hia",
            element: <ApplyToHIA />,
          },
          {
            path: "hia-applications",
            element: <ApplyToAggregator />,
          },
          {
            path: "finance",
            element: <ApplyToFinance />,
          },
          {
            path: "finance-applications",
            element: <ApplyToAggregator />,
          },
          {
            path: "insurance",
            element: <ApplyToAggregator />,
          },
          {
            path: "insurance-applications",
            element: <ApplyToAggregator />,
          },
        ],
      },
      {
        path: "devices",
        element: <Devices />,
      },
      {
        path: "carbon-credit",
        element: <CarbonCreditAccount />,
      },
      {
        path: "inbox",
        element: <Inbox />,
      },
      {
        path: "document-centre",
        element: <DocumentCentre />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "profile",
        element: <Profile accountType="home-occupant" />,
      },
    ],
  },
  {
    path: "/aggregator",
    element: <Layout sidebarType="aggregator" />,
    children: [
      {
        path: "",
        element: <AggregatorDashboard />,
      },
      {
        path: "database",
        element: <AggregatorDatabase />,
      },
      {
        path: "projects",
        element: <AggregatorProjects />,
      },
      {
        path: "devices",
        element: <AggregatorDevices />,
      },
      {
        path: "staff",
        children: [
          {
            path: "",
            element: <AggregatorStaff />,
          },
          {
            path: "add",
            element: <AggregatorAddStaff />,
          },
        ],
      },
      {
        path: "carbon-credit",
        element: <AggregatorWallet />,
      },
      {
        path: "inbox",
        element: <AggregatorInbox />,
      },
      {
        path: "document-centre",
        element: <AggregatorDocumentCenter />,
      },
      {
        path: "contact",
        element: <AggregatorContact />,
      },
      {
        path: "profile",
        element: <AggregatorProfile />,
      },
    ],
  },
]);

export default Router;
