import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Ninja Listing</h1>
      </div>
      <Link href={"/"}>Home</Link>
      <Link href={"/about"}>about</Link>
      <Link href={"/ninjas"}>Ninja Listing</Link>
    </nav>
  );
};

export default Navbar;
