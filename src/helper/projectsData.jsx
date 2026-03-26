const navLinks = [
  {
    id: 1,
    label: "Home",
    path: "/",
  },
  {
    id: 2,
    label: "Tour",
    path: "/tour",
    children: [
      { label: "Tour List", path: "/tour/list" },
      { label: "Tour Details", path: "/tour/details" },
    ],
  },
  {
    id: 3,
    label: "Destination",
    path: "/destination",
  },
  {
    id: 4,
    label: "Activities",
    path: "/activities",
  },
  {
    id: 5,
    label: "Pages",
    path: "/pages",
    children: [
      { label: "About", path: "/about" },
      { label: "FAQ", path: "/faq" },
    ],
  },
  {
    id: 6,
    label: "Contact",
    path: "/contact",
  },
];

const navLinksleft = [
  { id: 1, label: "USD", href: "/currency" },
  { id: 2, label: "Sign up", href: "/signup" },
  { id: 3, label: "Log in", href: "/login" },
];

export { navLinks, navLinksleft };
