import Shopping from '@/components/icons/Cart';
import Hotels from '@/components/icons/Hotel';
import Money from '@/components/icons/Money';
import User from '@/components/icons/User';
import Folder from '@/components/icons/Folder';
import Dashboard from '@/components/icons/Dashboard';
import Chevron from '@/components/icons/Chevron';
import Hr from '@/components/icons/Hr';

const listMenu = [
  {
    to: "/",
    path: "/",
    icon: Dashboard,
    name: "Dashboard",
  },
  {
    to: "/hotel",
    path: "/hotel",
    icon: Hotels,
    name: "Hotel",
  },
  {
    to: "",
    path: "",
    icon: Hotels,
    name: "Resto",
  },
  {
    to: "#",
    path: "#",
    icon: Shopping,
    name: "Purchasing",
    icon2: Chevron,
    submenu: [
      {
        to: "",
        path: "",
        title: "Vendor",
      },
      {
        to: "",
        path: "",
        title: "Stock",
      },
      {
        to: "",
        path: "",
        title: "Purchasing Order",
      },
    ],
  },
  {
    to: "",
    path: "",
    icon: Money,
    name: "Payment",
    icon2: Chevron,
    submenu: [
      {
        to: "",
        path: "",
        title: "Bank",
      },
      {
        to: "",
        path: "",
        title: "Fintech",
      },
      {
        to: "",
        path: "",
        title: "Top Up",
      },
      {
        to: "",
        path: "",
        title: "Account",
      },
      {
        to: "",
        path: "",
        title: "Transaction",
      },
    ],
  },
  {
    to: "",
    path: "#",
    icon: Hr,
    name: "Human Resource",
    icon2: Chevron,
    submenu: [
      {
        to: "/hr/department",
        path: "/hr/department",
        title: "Department",
      },
      {
        to: "/hr/employee",
        path: "/hr/employee",
        title: "Employee",
      },
      {
        to: "/hr/workorder",
        path: "/hr/workorder",
        title: "Work Order",
      },
    ],
  },
  {
    to: "",
    path: "",
    icon: Folder,
    name: "Master",
    icon2: Chevron,
    submenu: [
      {
        to: "",
        path: "",
        title: "Location",
      },
      {
        to: "",
        path: "",
        title: "Policy",
      },
      {
        to: "",
        path: "",
        title: "Category",
      },
      {
        to: "",
        path: "",
        title: "Price",
      },
      {
        to: "",
        path: "",
        title: "Service",
      },
    ],
  },
  {
    to: "",
    path: "",
    icon: User,
    name: "User",
    icon2: Chevron,
    submenu: [
      {
        to: "",
        path: "",
        title: "Profil",
      },
      {
        to: "",
        path: "",
        title: "Booking",
      },
      {
        to: "",
        path: "",
        title: "Accaount",
      },
    ],
  },
];

export default listMenu;
