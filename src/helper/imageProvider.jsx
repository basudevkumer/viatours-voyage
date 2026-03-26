import NavImages from "../../public/images/nav-logo.png";
import Paypal from "../../public/images/paypal.webp";
import Amex from "../../public/images/amex.png";
import MasterCard from "../../public/images/master-card.png";
import Discover from "../../public/images/discover.png";
import Apple from "../../public/images/apple-pay.png";

const allImages = {
  navlogo: NavImages,
  paymentArry: [
    { id: 1, img: Paypal },
    { id: 2, img: Amex },
    { id: 3, img: MasterCard },
    { id: 4, img: Discover },
    { id: 5, img: Apple },
  ],
};

export default allImages;
