import React, { useEffect, useState } from "react";
import { DropdownLoggedIn, DropdownLoggedOut } from "../../components";
import { Link } from "react-router-dom";
import BooksLogo from "../../assets/bookslogo2.png";
import { Search } from "../Sections/Search";

import { useCart } from "../../context";
export const Header = () => {
  const { cartList } = useCart();
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );

  const [toggleSearch, setToggleSearch] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });
  const token = JSON.parse(sessionStorage.getItem("jwtToken"));
  return (
    <header>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="border-b border-slate-200 dark:border-b-0 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={BooksLogo} className="h-8" alt="Bookmate Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Bookmate
            </span>
          </Link>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <button
              onClick={() => setDarkMode(!darkMode)}
              data-tooltip-target="navbar-search-example-toggle-dark-mode-tooltip"
              type="button"
              data-toggle-dark="light"
              className="flex items-center p-2 mr-2 text-xs font-medium text-gray-700 bg-white rounded-lg border border-gray-200 toggle-dark-state-example hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 focus:outline-none dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              {darkMode ? (
                <svg
                  aria-hidden="true"
                  data-toggle-icon="sun"
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              ) : (
                <svg
                  aria-hidden="true"
                  data-toggle-icon="moon"
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
              )}
            </button>
            <span
              className="cursor-pointer text-xl text-gray-700 dark:text-white    mr-5            bi bi-search"
              onClick={() => setToggleSearch(!toggleSearch)}
            ></span>
            <Link to="/cart" className="text-gray-700 dark:text-white mr-5">
              <span className="text-2xl bi bi-cart3 relative">
                <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full ">
                  {cartList.length}
                </span>
              </span>
            </Link>
            <span
              onClick={() => {
                setShowDropdown(!showDropdown);
              }}
              className="cursor-pointer text-xl text-gray-700 dark:text-white    mr-5  bi bi-person-circle"
            ></span>
            {showDropdown &&
              (token ? (
                <DropdownLoggedIn setShowDropdown={setShowDropdown} />
              ) : (
                <DropdownLoggedOut setShowDropdown={setShowDropdown} />
              ))}
          </div>
        </div>
      </nav>
      {toggleSearch && <Search setToggleSearch={setToggleSearch} />}
    </header>
  );
};
