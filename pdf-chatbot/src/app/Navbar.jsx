"use client";

import React, { useEffect, useState } from "react";

import Link from "next/link";
const Navbar = () => {

  return (
    <nav className="fixed z-10 top-10 m-50 bg-gray-50 text-gray-800 w-full p-4 grid grid-cols-3 items-center">
      <p className={`text-center`}></p>
      <div className="hidden">
        <Link href="/">Home 🏡 </Link>
      </div>
    </nav>
  );
};

export default Navbar;
