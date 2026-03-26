import allImages from "./imageProvider";

const {tikit,daimond,airBlaun} =  allImages
 
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

export const footerData = [
  {
    id: 1,
    title: "Company",
    links: [
      { label: "About Us", path: "/about" },
      { label: "Tourz Reviews", path: "/reviews" },
      { label: "Contact Us", path: "/contact" },
      { label: "Travel Guides", path: "/guides" },
      { label: "Data Policy", path: "/data-policy" },
      { label: "Cookie Policy", path: "/cookie-policy" },
      { label: "Legal", path: "/legal" },
      { label: "Sitemap", path: "/sitemap" },
    ],
  },
  {
    id: 2,
    title: "Support",
    links: [
      { label: "Get in Touch", path: "/support/contact" },
      { label: "Help center", path: "/support/help" },
      { label: "Live chat", path: "/support/live-chat" },
      { label: "How it works", path: "/how-it-works" },
    ],
  },
];

const tourfeature = [
  {
    title: "Ultimate flexibility",
    img: tikit, 
    description: "You're in control, with free cancellation and payment.",
  },
  {
    title: "Memorable experiences",
    img: airBlaun,
    description: "Browse and book tours and activities so incredible.",
  },
  {
    title: "Quality at our core",
    img: daimond,
    description: "High quality standards. Millions of reviews.",
  },
];

export { navLinks, navLinksleft, footerData, tourfeature };
