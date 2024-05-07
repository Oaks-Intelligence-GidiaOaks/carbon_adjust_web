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
  AdminAddPackage,
  AdminAddStaff,
  AdminApplications,
  AdminContact,
  AdminDashboard,
  AdminDocumentCentre,
  AdminInbox,
  AdminPackages,
  AdminProfile,
  AdminStaff,
  AdminUsersRegistration,
  AdminWallet,
} from "@/pages/protected/admin";
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
import PendingVerification from "@/pages/protected/shared/PendingVerification";
import Registration from "@/pages/protected/hia/Registration";
import Specializations from "@/pages/protected/hia/Specialization";
import {
  HOAggregatorApplications,
  HOHIAApplications,
} from "@/components/sub-pages/applications";
import {
  FinanceMorePage,
  HIAMorePage,
  InsuranceMorePage,
  SubContractorMorePage,
} from "@/components/sub-pages/dashboard/home-occupant";

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
    path: "/pending-verification",
    element: <PendingVerification />,
  },
  {
    path: "/dashboard",
    element: <Layout sidebarType="home-occupant" />,
    children: [
      {
        path: "",
        children: [
          {
            path: "",
            element: <Dashboard />,
          },
          {
            path: "finance",
            element: <FinanceMorePage />,
          },
          {
            path: "insurance",
            element: <InsuranceMorePage />,
          },
          {
            path: "hia",
            element: <HIAMorePage />,
          },
          {
            path: "subcontractor",
            element: <SubContractorMorePage />,
          },
        ],
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
            element: <HOAggregatorApplications />,
          },
          {
            path: "hia",
            element: <ApplyToHIA />,
          },
          {
            path: "hia-applications",
            element: <HOHIAApplications />,
          },
          {
            path: "finance",
            element: <ApplyToFinance />,
          },
          {
            path: "finance-applications",
            element: <FinanceApplications />,
          },
          {
            path: "insurance",
            element: <ApplyToAggregator />,
          },
          {
            path: "insurance-applications",
            element: <InsuranceApplications />,
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
        path: "subcontractors",
        children: [
          {
            path: "",
            element: <Registration />,
          },
          {
            path: "specialization",
            element: <Specializations />,
          },
        ],
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
  // SUBCONTRACTOR ROUTES
  {
    path: "/subcontractor",
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
        path: "subcontractors",
        children: [
          {
            path: "",
            element: <Registration />,
          },
          {
            path: "specialization",
            element: <Specializations />,
          },
        ],
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
  // ADMIN ROUTES
  {
    path: "/admin",
    element: <Layout sidebarType="admin" />,
    children: [
      {
        path: "",
        element: <AdminDashboard />,
      },
      {
        path: "users-registration",
        element: <AdminUsersRegistration />,
      },
      {
        path: "applications",
        element: <AdminApplications />,
      },
      {
        path: "projects",
        children: [
          {
            path: "",
            element: <AdminPackages />,
          },
          {
            path: "add",
            element: <AdminAddPackage />,
          },
        ],
      },

      {
        path: "staff",
        children: [
          {
            path: "",
            element: <AdminStaff />,
          },
          {
            path: "add",
            element: <AdminAddStaff />,
          },
        ],
      },
      {
        path: "carbon-credit",
        element: <AdminWallet />,
      },
      {
        path: "inbox",
        element: <AdminInbox />,
      },
      {
        path: "document-centre",
        element: <AdminDocumentCentre />,
      },
      {
        path: "contact",
        element: <AdminContact />,
      },
      {
        path: "profile",
        element: <AdminProfile />,
      },
    ],
  },
]);

export default Router;
