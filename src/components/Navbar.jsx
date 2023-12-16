'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <motion.div
    initial={{y: -200}}
    animate={{y: 0}}
    transition={{duration:0.5, staggerChildren: 0.1}}
    >
      <nav className="w-full backdrop-blur-xl shadow-md  z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-28">
          <div >
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
                <h2 className="text-2xl text-[#1a1b28] font-bold ">Skillex</h2>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src="/close.svg" width={30} height={30} alt="logo" />
                  ) : (
                    <Image
                      src="/menu.svg"
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-1 md:pt-6 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex text-[#1a1b28] ">
                <li className="pb-6 text-base font-semibold  py-2 md:px-6 text-center border-b-2 md:border-b-0   md:hover:text-[#171a1f] md:hover:bg-transparent">
                  <Link href="#home" onClick={() => setNavbar(!navbar)}>
                    HOME
                  </Link>
                </li>
                <li className="pb-6 text-base font-semibold py-2 px-6 text-center  border-b-2 md:border-b-0   md:hover:text-[#171a1f] md:hover:bg-transparent">
                  <Link href="#about" onClick={() => setNavbar(!navbar)}>
                    ABOUT
                  </Link>
                </li>
                <li className="pb-6 text-base font-semibold py-2 px-6 text-center  border-b-2 md:border-b-0  md:hover:text-[#171a1f] ">
                  <Link href="#courses" onClick={() => setNavbar(!navbar)}>
                    COURSES
                  </Link>
                </li>
                <li className="pb-6 text-base font-semibold py-2 px-6 text-center  border-b-2 md:border-b-0  md:hover:text-[#171a1f] ">
                  <Link href="#reviews" onClick={() => setNavbar(!navbar)}>
                    REVIEWS
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </motion.div>
  );
}

export default NavBar;