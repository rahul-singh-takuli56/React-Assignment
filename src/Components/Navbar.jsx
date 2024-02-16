import React, { useState } from "react";
import logo from "../../public/images/logo.png";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { path: "all", title: "All " },
    { path: "men's clothing", title: "Men's Clothing" },
    { path: "women's clothing", title: "Women's Clothing" },
    { path: "/electronics", title: "Electronics" },
    { path: "/jewelery", title: "Jewelery" },
  ];

  return (
    <header className="max-w-screen-2xl container mx-auto xl:auto  px-4">
      <nav className="flex justify-between items-center py-6 ">
        <a href="/" className="flex items-center gap-2 text-2xl">
          <img src={logo} className="md:h-14 h-[60px] w-[180px]" alt="logo" />
        </a>

        {/* nav items for large devices */}
        <ul className="hidden md:flex gap-12 text-xl font-semibold">
          {navItems.map(({ path, title }) => (
            <li
              key={path}
              className="text-base text-primary hover:bg-gray-400 p-1 rounded-sm hover:scale-110 transition-all duration-300"
            >
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? isActive : "")}
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* sign up and login button */}
        <div className="text-base text-primary font-medium space-x-5 hidden lg:block">
          <Link
            to="/login"
            className="py-2 px-5 border rounded-lg bg-blue-500 text-white"
          >
            Log in
          </Link>
          <Link
            to="/sign-up"
            className="py-2 px-5 border bg-blue-500 text-white rounded-lg"
          >
            Sign up
          </Link>
          <Link
            to="/add-to-cart"
            className="py-2 px-5 border bg-blue-500 text-white rounded-lg"
          >
            Add to Cart
          </Link>
        </div>

        {/* mobile menu */}
        <div className="md:hidden block">
          <button onClick={handleMenuToggler}>
            {isMenuOpen ? (
              <FaXmark className="w-5 h-5 text-primary" />
            ) : (
              <FaBars className="w-5 h-5 text-primary" />
            )}
          </button>
        </div>
      </nav>

      {/* navItems for mobile */}
      <div
        className={`px-4 bg-gray-800 py-5 rounded-sm ${
          isMenuOpen ? "" : "hidden"
        }`}
      >
        <ul>
          {navItems.map(({ path, title }) => (
            <li key={path} className="text-white first:text-white py-1 ">
              <NavLink to={path}>{title}</NavLink>
            </li>
          ))}
          <li className="text-white py-1 ">
            <Link to="/sign-up" className="bg-blue-500 p-1 mr-3 rounded-md">
              Sign up
            </Link>
            <Link to="/login" className="bg-blue-500 p-1 mr-3 rounded-md">
              Log in
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
