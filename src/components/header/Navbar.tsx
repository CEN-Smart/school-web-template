"use client";

import { cn } from "@/utils/mergeclass";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useCallback } from "react";
import Logo from "./Logo";

type MenuItems = {
  [key: string]: string;
};

const menuItems: MenuItems[] = [
  { item: "Home", link: "/" },
  { item: "About", link: "/about" },
  { item: "Gallery", link: "/gallery" },
  { item: "Contact Us", link: "/contact-us" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const handleMenu = useCallback((action: boolean) => {
    setIsMenuOpen(action);
  }, []);
  return (
    <>
      <header
        className={cn(
          `flex shadow-primary items-center justify-between md:px-4 lg:px-8 fixed w-full z-[97] bg-[#2D5F2E] text-white border-b border-[#0bed12]`
        )}
      >
        {/* Logo to show on Desktop view */}
        <div className={cn(`pl-4  `, {})}>
          <Logo />
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            `
      absolute z-[100] md:pt-0 drop-shadow-2xl shadow-primary border-b border-[#0bed12] flex items-center justify-between md:hidden w-[70%] transform transition duration-300 bg-[#2D5F2E]`,
            {
              "-translate-x-full": !isMenuOpen,
              "translate-x-0": isMenuOpen,
            }
          )}
        >
          {/* Logo to show on mobile view */}
          <div className={cn(` pl-4`)}>
            <Logo onClose={() => handleMenu(false)} />
          </div>
          <span
            onClick={() => handleMenu(false)}
            className={cn(`cursor-pointer pr-4`)}
          >
            {" "}
            <AiOutlineClose className="text-[#2EA3F2]" size={24} />{" "}
          </span>
        </div>

        {/* OverLay */}
        <div
          onClick={() => handleMenu(false)}
          className={cn(
            `absolute z-[98] bg-[#2D5F2E]/50 inset-0 transition min-h-screen duration-300 md:hidden`,
            {
              "translate-x-0": isMenuOpen,
              "-translate-x-full": !isMenuOpen,
            }
          )}
        ></div>

        {/* Nav Links */}
        <nav
          className={cn(
            `flex flex-col pt-10 md:pt-0 absolute top-[3.6rem] md:top-0 bottom-0 min-h-screen md:min-h-fit md:bg-transparent z-[99] w-[70%] md:w-fit transform md:translate-x-0 transition duration-300 md:relative md:flex-row md:flex md:space-x-4 bg-[#2D5F2E]`,
            {
              "translate-x-0": isMenuOpen,
              "-translate-x-full": !isMenuOpen,
            }
          )}
        >
          {menuItems.map((item) => (
            <Link
              onClick={() => handleMenu(false)}
              href={item.link}
              key={item.item}
              className={cn(`nav__link`, {
                "text-[#DDD73A] font-semibold": pathname === item.link,
              })}
            >
              {item.item}
            </Link>
          ))}

          <div className="px-4 shrink-0">
            <button className="px-6 py-2 transition duration-300 tracking-wider w-full mt-[10rem] md:mt-3 rounded-2xl bg-[#2A970E]  hover:bg-[#248c0a]">
              Check Result
            </button>
          </div>
        </nav>

        {/* Hamburger Menu */}
        <span
          onClick={() => handleMenu(true)}
          className={cn(`md:hidden cursor-pointer pr-4`, {
            hidden: isMenuOpen,
          })}
        >
          <GiHamburgerMenu className="text-[#2EA3F2]" size={24} />
        </span>
      </header>
    </>
  );
}
