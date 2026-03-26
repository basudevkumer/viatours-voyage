import React from "react";
import Container from "../shared/Container";
import allImages from "@/helper/imageProvider";
import Image from "next/image";
import Link from "next/link";
import { navLinks, navLinksleft } from "@/helper/projectsData";

const Navbar = () => {
  const { navlogo } = allImages;
  return (
    <nav className="py-[21px] bg-primary border-b border-white">
      <Container>
        <div className="flex items-center  justify-between ">
          <div className="flex  items-center gap-x-[50px]">
            <Image src={navlogo} alt="nav-images" width={167} height={32} />
            <ul className="flex items-center gap-x-[39px]  ">
              {navLinks.map((items) => {
                return (
                  <li key={items.id}>
                    <Link href={items.path} className=" title4 text-white transition duration-300 ease-in-out hover:text-accent">
                      {items.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex  items-center gap-x-6">
            <ul className="flex gap-x-6">
              {navLinksleft.map((items) => {
                return items.label === "Log in" ? (
                  <li key={items.id}>
                    <Link
                      href={items.href}
                      className="px-5 py-3 border rounded-[200px] title4 text-white transition duration-300 ease-in-out hover:text-accent"
                    >
                      {items.label}
                    </Link>
                  </li>
                ) : (
                  <li key={items.id}>
                    <Link href={items.href} className="title4 text-white transition duration-300 ease-in-out hover:text-accent">
                      {items.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="h-[42px] w-[42px] border rounded-full border-white "></div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
