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
    href: "",
  },
  {
    icon: ApplicationsIcon,
    title: "Applications",
    href: "/applications",
  },
  {
    icon: DevicesIcon,
    title: "Devices",
    href: "/devices",
  },
  {
    icon: CarbonCreditIcon,
    title: "Carbon Credit Account",
    href: "/carbon-credit",
  },
  {
    icon: InboxIcon,
    title: "Inbox",
    href: "/inbox",
  },
  {
    icon: DocumentCentreIcon,
    title: "Document Centre",
    href: "/document-centre",
  },
  {
    icon: ContactIcon,
    title: "Contact Us",
    href: "/contact",
  },
  {
    icon: ProfileIcon,
    title: "Profile",
    href: "/profile",
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
