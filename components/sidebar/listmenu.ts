import { Dashboard, Chevron, Money, Hr, Folder, User, Hotel, Cart } from "../icons";


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
    icon: Hotel,
    name: "Hotel",
  },
  {
    to: "/resto/admin",
    path: "/resto/admin",
    icon: Hotel,
    name: "Resto",
  },
  {
    to: "#",
    path: "#",
    icon: Cart,
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
        to: "/payment/bank",
        path: "/payment/bank",
        title: "Bank",
      },
      {
        to: "/payment/fintech",
        path: "/payment/fintech",
        title: "Fintech",
      },
      {
        to: "/payment/topup",
        path: "/payment/topup",
        title: "Top Up",
      },
      {
        to: "/payment/account",
        path: "/payment/account",
        title: "Account",
      },
      {
        to: "/payment/transaction",
        path: "/payment/transaction",
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
