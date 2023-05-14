import React from "react";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import "../styles/dashboard.css";
import Home from "../routes/Home";
import Account from "../routes/Account";
import Refrral from "../routes/Refrral";
import Commission from "../routes/Commission";
import Payout from "../routes/Payout";
import Support from "../routes/Support";
import FAQ from "../routes/FAQ";
const Dashboard = () => {
  const [componentStates, setComponentStates] = useState({
    home: false,
    account: false,
    refrral: false,
    commission: false,
    Payout: false,
    support: false,
    faq: false,
  });

  const handleClick = (componentName) => {
    setComponentStates((prevState) => ({
      ...prevState,
      [componentName]: true,
      ...Object.keys(prevState)
        .filter((key) => key !== componentName)
        .reduce((acc, key) => ({ ...acc, [key]: false }), {}),
    }));
  };
  return (
    <>
      <nav class="border bg-white shadow-lg ">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div class="text-center md:hidden">
            <button
              class="text-white bg-black hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-small rounded text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              type="button"
              data-drawer-target="drawer-navigation"
              data-drawer-show="drawer-navigation"
              aria-controls="drawer-navigation"
              onPointerDown={() => {
                const drawer = document.getElementById("drawer-navigation");
                if (drawer.classList.contains("-translate-x-full")) {
                  drawer.classList.remove("-translate-x-full");
                } else {
                  drawer.classList.add("-translate-x-full");
                }
              }}
            >
              <FaBars size={15} />
            </button>
          </div>

          <div class="flex items-center">
            <img
              src="https://www.letusmaintain.com/img/logo.png"
              class=" mr-2  sizeimg"
              alt="Flowbite Logo"
            />
          </div>

          <button
            type="button"
            class="text-white bg-black bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-500 font-small rounded text-sm px-3 py-2   dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Logout
          </button>
        </div>
      </nav>

      <div class="flex flex-col md:flex-row ">
        <div
          id="drawer-navigation"
          class="fixed bg-black md:static top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform bg-black dark:bg-gray-800 transform -translate-x-full md:translate-x-0 md:pr-4"
          tabindex="-1"
          aria-labelledby="drawer-navigation-label"
        >
          <div className="flex items-center justify-center h-30 w-full">
            <img
              className="rounded-img"
              src="data:image/png;base64,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"
              alt="User"
            />
          </div>

          <div class="py-4 overflow-y-auto">
            <ul class="space-y-2 font-medium">
              <li>
                <a
                  href="#!"
                  class="flex items-center p-2 text-white"
                  onClick={() => handleClick("home")}
                >
                  <span class="ml-3">Home</span>
                </a>
              </li>
              <li>
                <button
                  type="button"
                  class="flex items-center p-2 text-white"
                  aria-controls="dropdown-example"
                  data-collapse-toggle="dropdown-example"
                  onClick={() => handleClick("account")}
                >
                  <span class="flex-1 ml-3 text-left whitespace-nowrap">
                    Account Details
                  </span>
                  <svg
                    class="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
                <ul id="dropdown-example" class="hidden py-2 space-y-2">
                  <li>
                    <a
                      href="#!"
                      class="flex items-center p-2 text-white"
                      onClick={() => handleClick("refrral")}
                    >
                      Referral History
                    </a>
                  </li>
                  <li>
                    <a
                      href="#!"
                      class="flex items-center p-2 text-white"
                      onClick={() => handleClick("commission")}
                    >
                      Commissions History
                    </a>
                  </li>
                  <li>
                    <a
                      href="#!"
                      class="flex items-center p-2 text-white"
                      onClick={() => handleClick("payout")}
                    >
                      Update Payout Details
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="#!"
                  class="flex items-center p-2 text-white"
                  onClick={() => handleClick("support")}
                >
                  <span class="flex-1 ml-3 whitespace-nowrap">
                    Support Account
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  class="flex items-center p-2 text-white"
                  onClick={() => handleClick("faq")}
                >
                  <span class="flex-1 ml-3 whitespace-nowrap">FAQ</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1">
          {componentStates.home && <Home />}
          {componentStates.account && <Account />}
          {componentStates.refrral && <Refrral />}
          {componentStates.commission && <Commission />}
          {componentStates.payout && <Payout />}
          {componentStates.support && <Support />}
          {componentStates.faq && <FAQ />}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
