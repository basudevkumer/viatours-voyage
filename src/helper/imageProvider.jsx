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
  featuredTrips: [
    {
      id: 1,
      image: Paris,
      days: 5,
      location: "Paris, France",
      title: "Centipede Tour - Guided Paris City Tour by Bike",
      rating: 4.8,
      reviews: 243,
      price: "189.25",
    },
    {
      id: 2,
      image: Singapure,
      days: 4,
      location: "Singapore",
      title: "Singapore City Highlights & Gardens by the Bay Tour",
      rating: 4.7,
      reviews: 189,
      price: "149.00",
    },
    {
      id: 3,
      image: Rome,
      days: 6,
      location: "Rome, Italy",
      title: "Rome Colosseum & Vatican City Full Day Tour",
      rating: 4.9,
      reviews: 312,
      price: "220.50",
    },
    {
      id: 4,
      image: Bankok,
      days: 3,
      location: "Bangkok, Thailand",
      title: "Bangkok Temple & River Cruise Adventure Tour",
      rating: 4.6,
      reviews: 175,
      price: "99.00",
    },
    {
      id: 5,
      image: Bali,
      days: 7,
      location: "Bali, Indonesia",
      title: "Bali Sacred Temples & Rice Terrace Trekking Tour",
      rating: 4.8,
      reviews: 420,
      price: "259.00",
    },
    {
      id: 6,
      image: Phuket,
      days: 5,
      location: "Phuket, Thailand",
      title: "Phuket Island Hopping & Snorkeling Adventure",
      rating: 4.7,
      reviews: 298,
      price: "179.00",
    },
    {
      id: 7,
      image: Tokeyo,
      days: 8,
      location: "Tokyo, Japan",
      title: "Tokyo Cultural Experience & Mount Fuji Day Trip",
      rating: 4.9,
      reviews: 365,
      price: "310.00",
    },
    {
      id: 8,
      image: Cappadocia,
      days: 4,
      location: "Cappadocia, Turkey",
      title: "Cappadocia Hot Air Balloon & Cave Hotel Tour",
      rating: 4.9,
      reviews: 287,
      price: "275.00",
    },
    {
      id: 9,
      image: Dubai,
      days: 5,
      location: "Dubai, UAE",
      title: "Dubai Desert Safari & Burj Khalifa Sunset Tour",
      rating: 4.8,
      reviews: 410,
      price: "199.00",
    },
    {
      id: 10,
      image: Barcelona,
      days: 6,
      location: "Barcelona, Spain",
      title: "Barcelona Gaudi Architecture & Gothic Quarter Walk",
      rating: 4.7,
      reviews: 334,
      price: "165.00",
    },
    {
      id: 11,
      image: London,
      days: 7,
      location: "London, UK",
      title: "London Royal Palaces & Thames River Cruise Tour",
      rating: 4.8,
      reviews: 521,
      price: "240.00",
    },
    {
      id: 12,
      image: Newyork,
      days: 5,
      location: "New York, USA",
      title: "New York City Highlights & Statue of Liberty Tour",
      rating: 4.7,
      reviews: 478,
      price: "195.00",
    },
    {
      id: 13,
      image: Sydney,
      days: 4,
      location: "Sydney, Australia",
      title: "Sydney Opera House & Harbour Bridge Climb Tour",
      rating: 4.8,
      reviews: 256,
      price: "185.00",
    },
    {
      id: 14,
      image: Istanbul,
      days: 6,
      location: "Istanbul, Turkey",
      title: "Istanbul Bosphorus Cruise & Grand Bazaar Tour",
      rating: 4.7,
      reviews: 302,
      price: "155.00",
    },
    {
      id: 15,
      image: Maldives,
      days: 7,
      location: "Maldives",
      title: "Maldives Overwater Bungalow & Coral Reef Diving",
      rating: 4.9,
      reviews: 198,
      price: "890.00",
    },
    {
      id: 16,
      image: Santorini,
      days: 5,
      location: "Santorini, Greece",
      title: "Santorini Sunset Cruise & Wine Tasting Experience",
      rating: 4.8,
      reviews: 267,
      price: "320.00",
    },
  ],
};

export default allImages;
