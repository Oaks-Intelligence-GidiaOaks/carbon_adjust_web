import { createBrowserRouter } from "react-router-dom";
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
import {
  HiaAddPackage,
  HiaAddStaff,
  HiaApplications,
  HiaContact,
  HiaDashboard,
  HiaDocumentCentre,
  HiaInbox,
  HiaPackages,
  HiaProfile,
  HiaStaff,
  HiaWallet,
} from "@/pages/protected/hia";
import {
  FinanceAddPackage,
  FinanceAddStaff,
  FinanceApplications,
  FinanceContact,
  FinanceDashboard,
  FinanceDocumentCentre,
  FinanceInbox,
  FinancePackages,
  FinanceProfile,
  FinanceStaff,
  FinanceWallet,
} from "@/pages/protected/finance";
import {
  InsuranceAddPackage,
  InsuranceApplications,
  InsuranceContact,
  InsuranceDashboard,
  InsuranceDocumentCentre,
  InsuranceInbox,
  InsurancePackages,
  InsuranceProfile,
  InsuranceWallet,
} from "@/pages/protected/insurance";

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
  // HIA ROUTES
  {
    path: "/hia",
    element: <Layout sidebarType="hia" />,
    children: [
      {
        path: "",
        element: <HiaDashboard />,
      },
      {
        path: "applications",
        element: <HiaApplications />,
      },
      {
        path: "packages",
        children: [
          {
            path: "",
            element: <HiaPackages />,
          },
          {
            path: "add",
            element: <HiaAddPackage />,
          },
        ],
      },

      {
        path: "staff",
        children: [
          {
            path: "",
            element: <HiaStaff />,
          },
          {
            path: "add",
            element: <HiaAddStaff />,
          },
        ],
      },
      {
        path: "carbon-credit",
        element: <HiaWallet />,
      },
      {
        path: "inbox",
        element: <HiaInbox />,
      },
      {
        path: "document-centre",
        element: <HiaDocumentCentre />,
      },
      {
        path: "contact",
        element: <HiaContact />,
      },
      {
        path: "profile",
        element: <HiaProfile />,
      },
    ],
  },
  // FINANCE ROUTES
  {
    path: "/finance",
    element: <Layout sidebarType="finance" />,
    children: [
      {
        path: "",
        element: <FinanceDashboard />,
      },
      {
        path: "applications",
        element: <FinanceApplications />,
      },
      {
        path: "packages",
        children: [
          {
            path: "",
            element: <FinancePackages />,
          },
          {
            path: "add",
            element: <FinanceAddPackage />,
          },
        ],
      },

      {
        path: "staff",
        children: [
          {
            path: "",
            element: <FinanceStaff />,
          },
          {
            path: "add",
            element: <FinanceAddStaff />,
          },
        ],
      },
      {
        path: "carbon-credit",
        element: <FinanceWallet />,
      },
      {
        path: "inbox",
        element: <FinanceInbox />,
      },
      {
        path: "document-centre",
        element: <FinanceDocumentCentre />,
      },
      {
        path: "contact",
        element: <FinanceContact />,
      },
      {
        path: "profile",
        element: <FinanceProfile />,
      },
    ],
  },
  // INSURANCE ROUTES
  {
    path: "/insurance",
    element: <Layout sidebarType="insurance" />,
    children: [
      {
        path: "",
        element: <InsuranceDashboard />,
      },
      {
        path: "applications",
        element: <InsuranceApplications />,
      },
      {
        path: "packages",
        children: [
          {
            path: "",
            element: <InsurancePackages />,
          },
          {
            path: "add",
            element: <InsuranceAddPackage />,
          },
        ],
      },
      {
        path: "carbon-credit",
        element: <InsuranceWallet />,
      },
      {
        path: "inbox",
        element: <InsuranceInbox />,
      },
      {
        path: "document-centre",
        element: <InsuranceDocumentCentre />,
      },
      {
        path: "contact",
        element: <InsuranceContact />,
      },
      {
        path: "profile",
        element: <InsuranceProfile />,
      },
    ],
  },
]);

export default Router;
