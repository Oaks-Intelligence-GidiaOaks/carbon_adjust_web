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
} from "@/pages/protected/home-owner";
import Contact from "@/pages/protected/home-owner/Contact";

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
    element: <Layout />,
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
        element: <Profile />,
      },
    ],
  },
]);

export default Router;
