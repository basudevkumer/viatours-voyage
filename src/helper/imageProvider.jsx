import NavImages from "../../public/images/nav-logo.png";
import Paypal from "../../public/images/paypal.webp";
import Amex from "../../public/images/amex.png";
import MasterCard from "../../public/images/master-card.png";
import Discover from "../../public/images/discover.png";
import Apple from "../../public/images/apple-pay.png";
import BannerImg from "../../public/images/banner.png";
import Maps from "../../public/images/map.png";
import Paris from "../../public/images/paris.jpg";
import Singapure from "../../public/images/singapure.webp";
import Bankok from "../../public/images/bankok.jpg";
import Bali from "../../public/images/bali.jpg";
import Rome from "../../public/images/rome.webp";
import Phuket from "../../public/images/phuket.webp";
import Tokeyo from "../../public/images/tokeyo.jpg";
import Cappadocia from "../../public/images/cappadoia.jpg";
import Dubai from "../../public/images/dubai.webp";
import Barcelona from "../../public/images/bersolona.jpg";
import London from "../../public/images/london.webp";
import Newyork from "../../public/images/new-wrok.jpg";
import Sydney from "../../public/images/sydney.jpg";
import Istanbul from "../../public/images/istanbul.webp";
import Maldives from "../../public/images/maldivs.jpg";
import Santorini from "../../public/images/santorini.webp";

const allImages = {
  navlogo: NavImages,
  paymentArry: [
    { id: 1, img: Paypal },
    { id: 2, img: Amex },
    { id: 3, img: MasterCard },
    { id: 4, img: Discover },
    { id: 5, img: Apple },
  ],
  banner: BannerImg.src,
  map: Maps,
  trendingDestinations: [
    { id: 1, image: Paris, city: "Paris", tours: "190+ Tours" },
    { id: 2, image: Singapure, city: "Singapore", tours: "320+ Tours" },
    { id: 3, image: Rome, city: "Rome", tours: "450+ Tours" },
    { id: 4, image: Bankok, city: "Bangkok", tours: "160+ Tours" },
    { id: 5, image: Bali, city: "Bali", tours: "438+ Tours" },
    { id: 6, image: Phuket, city: "Phuket", tours: "260+ Tours" },
    { id: 7, image: Tokeyo, city: "Tokyo", tours: "195+ Tours" },
    { id: 8, image: Cappadocia, city: "Cappadocia", tours: "280+ Tours" },
    { id: 9, image: Dubai, city: "Dubai", tours: "370+ Tours" },
    { id: 10, image: Barcelona, city: "Barcelona", tours: "210+ Tours" },
    { id: 11, image: London, city: "London", tours: "520+ Tours" },
    { id: 12, image: Newyork, city: "New York", tours: "480+ Tours" },
    { id: 13, image: Sydney, city: "Sydney", tours: "150+ Tours" },
    { id: 14, image: Istanbul, city: "Istanbul", tours: "290+ Tours" },
    { id: 15, image: Maldives, city: "Maldives", tours: "120+ Tours" },
    { id: 16, image: Santorini, city: "Santorini", tours: "175+ Tours" },
  ],
};

export default allImages;
