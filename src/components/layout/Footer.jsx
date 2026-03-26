import React from "react";
import Container from "../shared/Container";
import { footerData } from "@/helper/projectsData";
import Link from "next/link";
import allImages from "@/helper/imageProvider";
import Image from "next/image";

const Footer = () => {
  const { paymentArry } = allImages;
  return (
    <footer >
      <div className="bg-commonbg rounded-[24px] lg:mx-[30px]">
        <Container>
          <div className="pt-[95px] pb-[64px] flex justify-between border-b border-[#eb652b42]">
            <p className="title1 !font-medium text-dark ">
              Speak to our expert at{" "}
              <span className="text-accent">1-800-453-6744</span>
            </p>
            <button className="title1 !font-medium text-dark">Follow Us</button>
          </div>
          <div className="py-10 grid grid-cols-6 gap-x-[100px] gap-y-[50px]">
            <div className="col-span-2">
              <p className="title1 !font-medium mb-[30px] text-dark">Contact</p>
              <p className="body4 text-dark">
                328 Queensberry Street, North Melbourne VIC3051, Australia.
              </p>
              <p className="mt-[18px] title4 text-dark">hi@viatours.com </p>
            </div>
            <div>
              <p className="title1 !font-medium mb-[30px] text-dark">Company</p>
              <ul className=" space-y-[18px]">
                {footerData[0].links.map((items, index) => {
                  return (
                    <li key={index}>
                      <Link
                        href={items.path}
                        className="transition duration-300 ease-in-out hover:text-accent title4 text-dark"
                      >
                        {items.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <p className="title1 !font-medium mb-[30px] text-dark">Support</p>
              <ul className=" space-y-[18px]">
                {footerData[1].links.map((items, index) => {
                  return (
                    <li key={index}>
                      <Link
                        href={items.path}
                        className="transition duration-300 ease-in-out hover:text-accent title4 text-dark"
                      >
                        {items.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="col-span-2 ">
              <p className="title1 !font-medium mb-[30px] text-dark">
                Newsletter
              </p>
              <p className="text-dark mb-[14px] max-w-[287px] body4 ">
                Subscribe to the free newsletter and stay up to date
              </p>
              <div className="p-5 flex bg-white rounded-[12px]">
                <input
                  type="text"
                  className="w-full  "
                  placeholder="Your email address"
                />
                <button>send</button>
              </div>
              <p className="title1 !font-medium mt-[30px] mb-[10px] text-dark">
                Mobile Apps
              </p>
              <div className="flex  gap-[10px] flex-col items-start ml-[10px]">
                <button className="body4 text-dark">iOS App</button>
                <button className="body4 text-dark">Android App</button>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div>
        <Container>
          <div className="py-6 flex justify-between">
            <p className="text-dark body4">© Copyright Viatours 2024</p>
            <div className="flex ">
              {paymentArry.map((items) => {
                return (
                  <Image
                    key={items.id}
                    src={items.img}
                    alt={items.img}
                   
                    className="w-[80px] h-[25px] object-cover"
                  />
                );
              })}
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
