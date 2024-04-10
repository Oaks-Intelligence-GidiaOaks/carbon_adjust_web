import {
  ApplicationsIcon,
  CarbonCreditIcon,
  ContactIcon,
  DashboardIcon,
  DevicesIcon,
  DocumentCentreIcon,
  InboxIcon,
  JPGIcon,
  LogoutIcon,
  PDFIcon,
  PNGIcon,
  ProfileIcon,
} from "@/assets/icons";
import { elements } from "chart.js";

export const accountTypes = [
  { id: 1, label: "Home occupant", value: "home-occupant" },
  { id: 2, label: "Aggregator", value: "aggregator" },
  { id: 3, label: "Home Improvement Agency", value: "hia" },
  { id: 4, label: "Financial Institution", value: "financial-institution" },
  { id: 5, label: "Insurance", value: "insurance" },
];

export const homeOwnerSideBarItems = [
  {
    icon: DashboardIcon,
    title: "Dashboard",
    href: "/dashboard",
  },
  {
    icon: ApplicationsIcon,
    title: "Applications",
    href: "/dashboard/applications",
  },
  {
    icon: DevicesIcon,
    title: "Devices",
    href: "/dashboard/devices",
  },
  {
    icon: CarbonCreditIcon,
    title: "Carbon Credit Account",
    href: "/dashboard/carbon-credit",
  },
  {
    icon: InboxIcon,
    title: "Inbox",
    href: "/dashboard/inbox",
  },
  {
    icon: DocumentCentreIcon,
    title: "Document Centre",
    href: "/dashboard/document-centre",
  },
  {
    icon: ContactIcon,
    title: "Contact Us",
    href: "/dashboard/contact",
  },
  {
    icon: ProfileIcon,
    title: "Profile",
    href: "/dashboard/profile",
  },
  {
    icon: LogoutIcon,
    title: "Logout",
    href: "/..",
  },
];

export const aggregatorSideBarItems = [
  {
    icon: DashboardIcon,
    title: "Dashboard",
    href: "/aggregator",
  },
  {
    icon: ApplicationsIcon,
    title: "Database",
    href: "/aggregator/database",
  },
  {
    icon: DevicesIcon,
    title: "Projects",
    href: "/aggregator/projects",
  },
  {
    icon: DevicesIcon,
    title: "Devices",
    href: "/aggregator/devices",
  },
  {
    icon: DevicesIcon,
    title: "Staff",
    href: "/aggregator/staff",
  },
  {
    icon: CarbonCreditIcon,
    title: "Carbon Credit Account",
    href: "/aggregator/carbon-credit",
  },
  {
    icon: InboxIcon,
    title: "Inbox",
    href: "/aggregator/inbox",
  },
  {
    icon: DocumentCentreIcon,
    title: "Document Centre",
    href: "/aggregator/document-centre",
  },
  {
    icon: ContactIcon,
    title: "Contact Us",
    href: "/aggregator/contact",
  },
  {
    icon: ProfileIcon,
    title: "Profile",
    href: "/aggregator/profile",
  },
  {
    icon: LogoutIcon,
    title: "Logout",
    href: "/..",
  },
];

// HIA SIDE ITEMS
export const hiaSideBarItems = [
  {
    icon: DashboardIcon,
    title: "Dashboard",
    href: "/hia",
  },
  {
    icon: ApplicationsIcon,
    title: "Applications",
    href: "/hia/applications",
  },
  {
    icon: DevicesIcon,
    title: "Packages",
    href: "/hia/packages",
  },
  {
    icon: DevicesIcon,
    title: "Staff",
    href: "/hia/staff",
  },
  {
    icon: CarbonCreditIcon,
    title: "Carbon Credit Account",
    href: "/hia/carbon-credit",
  },
  {
    icon: InboxIcon,
    title: "Inbox",
    href: "/hia/inbox",
  },
  {
    icon: DocumentCentreIcon,
    title: "Document Centre",
    href: "/hia/document-centre",
  },
  {
    icon: ContactIcon,
    title: "Contact Us",
    href: "/hia/contact",
  },
  {
    icon: ProfileIcon,
    title: "Profile",
    href: "/hia/profile",
  },
  {
    icon: LogoutIcon,
    title: "Logout",
    href: "/..",
  },
];

//FINANCE SIDE ITEMS
export const financeSideBarItems = [
  {
    icon: DashboardIcon,
    title: "Dashboard",
    href: "/finance",
  },
  {
    icon: ApplicationsIcon,
    title: "Applications",
    href: "/finance/applications",
  },
  {
    icon: DevicesIcon,
    title: "Packages",
    href: "/finance/packages",
  },
  {
    icon: DevicesIcon,
    title: "Staff",
    href: "/finance/staff",
  },
  {
    icon: CarbonCreditIcon,
    title: "Carbon Credit Account",
    href: "/finance/carbon-credit",
  },
  {
    icon: InboxIcon,
    title: "Inbox",
    href: "/finance/inbox",
  },
  {
    icon: DocumentCentreIcon,
    title: "Document Centre",
    href: "/finance/document-centre",
  },
  {
    icon: ContactIcon,
    title: "Contact Us",
    href: "/finance/contact",
  },
  {
    icon: ProfileIcon,
    title: "Profile",
    href: "/finance/profile",
  },
  {
    icon: LogoutIcon,
    title: "Logout",
    href: "/..",
  },
];

// INSURANCE SIDE ITEMS
export const insuranceSideBarItems = [
  {
    icon: DashboardIcon,
    title: "Dashboard",
    href: "/insurance",
  },
  {
    icon: ApplicationsIcon,
    title: "Applications",
    href: "/insurance/applications",
  },
  {
    icon: DevicesIcon,
    title: "Packages",
    href: "/insurance/packages",
  },
  {
    icon: CarbonCreditIcon,
    title: "Carbon Credit Account",
    href: "/insurance/carbon-credit",
  },
  {
    icon: InboxIcon,
    title: "Inbox",
    href: "/insurance/inbox",
  },
  {
    icon: DocumentCentreIcon,
    title: "Document Centre",
    href: "/insurance/document-centre",
  },
  {
    icon: ContactIcon,
    title: "Contact Us",
    href: "/insurance/contact",
  },
  {
    icon: ProfileIcon,
    title: "Profile",
    href: "/insurance/profile",
  },
  {
    icon: LogoutIcon,
    title: "Logout",
    href: "/..",
  },
];

export const imageExtension = {
  pdf: PDFIcon,
  png: PNGIcon,
  jpg: JPGIcon,
};

export const homeOccupantProfileTabs = [
  {
    name: "Bio Data",
    tabIndex: 1,
  },
  {
    name: "Address",
    tabIndex: 2,
  },
  {
    name: "Home Information",
    tabIndex: 3,
  },
  {
    name: "Documentation",
    tabIndex: 4,
  },
];

export const messageData = [
  {
    name: "Jeffery Moore",
    image: "image1.jpg",
    industry: "JSK Financial services",
    message:
      "We will like you to confirm that the documents you sent are in line with b...",
    color: "#139EEC",
  },
  {
    name: "John Doe",
    image: "image2.jpg",
    industry: "JSK Financial services",
    message:
      "We will like you to confirm that the documents you sent are in line with b...",
    color: "#8AC926",
  },
  {
    name: "John Doe",
    image: "image3.jpg",
    industry: "JSK Financial services",
    message:
      "We will like you to confirm that the documents you sent are in line with b...",
    color: "#139EEC",
  },
  {
    name: "John Doe",
    image: "image3.jpg",
    industry: "JSK Financial services",
    message:
      "We will like you to confirm that the documents you sent are in line with b...",
    color: "#139EEC",
  },
  {
    name: "John Doe",
    image: "image3.jpg",
    industry: "JSK Financial services",
    message:
      "We will like you to confirm that the documents you sent are in line with b...",
    color: "#139EEC",
  },
  {
    name: "John Doe",
    image: "image3.jpg",
    industry: "JSK Financial services",
    message:
      "We will like you to confirm that the documents you sent are in line with b...",
    color: "#139EEC",
  },
  {
    name: "John Doe",
    image: "image3.jpg",
    industry: "JSK Financial services",
    message:
      "We will like you to confirm that the documents you sent are in line with b...",
    color: "#139EEC",
  },
  {
    name: "John Doe",
    image: "image3.jpg",
    industry: "JSK Financial services",
    message:
      "We will like you to confirm that the documents you sent are in line with b...",
    color: "#139EEC",
  },
  {
    name: "John Doe",
    image: "image3.jpg",
    industry: "JSK Financial services",
    message:
      "We will like you to confirm that the documents you sent are in line with b...",
    color: "#139EEC",
  },
  {
    name: "John Doe",
    image: "image3.jpg",
    industry: "JSK Financial services",
    message:
      "We will like you to confirm that the documents you sent are in line with b...",
    color: "#139EEC",
  },
  {
    name: "John Doe",
    image: "image3.jpg",
    industry: "JSK Financial services",
    message:
      "We will like you to confirm that the documents you sent are in line with b...",
    color: "#139EEC",
  },
  {
    name: "John Doe",
    image: "image3.jpg",
    industry: "JSK Financial services",
    message:
      "We will like you to confirm that the documents you sent are in line with b...",
    color: "#139EEC",
  },
  {
    name: "John Doe",
    image: "image3.jpg",
    industry: "JSK Financial services",
    message:
      "We will like you to confirm that the documents you sent are in line with b...",
    color: "#139EEC",
  },
  {
    name: "John Doe",
    image: "image3.jpg",
    industry: "JSK Financial services",
    message:
      "We will like you to confirm that the documents you sent are in line with b...",
    color: "#139EEC",
  },
  {
    name: "John Doe",
    image: "image3.jpg",
    industry: "JSK Financial services",
    message:
      "We will like you to confirm that the documents you sent are in line with b...",
    color: "#139EEC",
  },
  {
    name: "John Doe",
    image: "image3.jpg",
    industry: "JSK Financial services",
    message:
      "We will like you to confirm that the documents you sent are in line with b...",
    color: "#139EEC",
  },
];

export const barChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      barThickness: 5,
      grid: {
        display: false,
      },
    },

    y: {
      barThickness: 5,
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
      position: "top",
    },
    title: {
      display: false,
      text: "Chart.js Bar Chart",
    },
  },
};

export const doughnutChartOptions = {
  circumference: 360,
  cutout: "60%",
  weight: 0,
  plugins: {
    legend: {
      display: false,
    },
  },
  // radius: { outer: "80%" },
};

export const lineChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      barThickness: 20,
      grid: {
        display: false,
      },
      border: {
        color: "rgba(230, 237, 255, 1)",
      },
    },

    y: {
      barThickness: 10,
      grid: {
        color: "rgba(230, 237, 255, 1)",
      },
      border: {
        color: "rgba(230, 237, 255, 1)",
      },
    },
  },
  plugins: {
    legend: {
      display: false,
      position: "top" as const,
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
};

export const yearLabels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
];
