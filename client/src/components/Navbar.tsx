import Link from "next/link";
import React from "react";
import { Search, SquarePen, BellPlus, UserRound } from "lucide-react";
import Image from "next/image";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <>
      <div
        className=" w-full fixed top-0 left-0 z-50 border border-b-2 shadow-lg"
        style={{ backgroundImage: "url('/images/horror-background.jpg')" }}
      >
        <div className="w-[100%] px-4 py-2">
          <div className="flex items-center justify-between ">
            <div className="left-block flex gap-2">
              <div className="logo  flex items-center ml-2 ">
                <Link href="/" className="block">
                  <Image
                    src="/images/horror.jpg"
                    alt="logo"
                    height={60}
                    width={60}
                    className="rounded-full border-2 border-white/80 transition-all duration-300 hover:border-white hover:scale-105"
                    priority
                  />
                </Link>
              </div>
              <div className="search-bar flex items-center  flex-1  mx-2">
                <div className="relative ">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full py-2 pl-10 pr-4 rounded-full bg-white/10 border border-white/30 
      focus:outline-none focus:border-white/50 text-white placeholder-white/70"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70 w-5 h-5" />
                </div>
              </div>
            </div>
            <div className="right-block">
              <div className="flex items-center space-x-6  ">
                <div className="post cursor-pointer">
                  <Link href="/post">
                    <SquarePen className="text-white " />
                  </Link>
                </div>
                <div className="notifiaction cursor-pointer">
                  <Link href="/notification">
                    <BellPlus className="text-white" />
                  </Link>
                </div>
                <div className="profile cursor-pointer">
                  <Link href="/profile">
                    <UserRound className="text-white" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
