import React from "react";
import { Link, NavLink } from "react-router-dom";
// import logo from "assets/images/logo.svg";
import { v4 as uuidv4 } from "uuid";

function Sidebar() {
  return (
    <>
      <aside className="list-none bg-white shadow-md border-2 border-gray-100 text-gray-900 fixed h-screen w-72 flex-col justify-start hidden 2xl:flex">
        <ul>
          <li>
            <Link
              className="flex items-center font-bold justify-start p-4 pt-6 -b-6 mb-4 text-2xl mt-2  w-full "
              to="/"
            >
              {/* <img
                src={logo}
                alt="Logo"
                className="mr-4 w-12 h-12 object-contain"
              /> */}
              <span className="">🦸‍♂️ Survey Hero</span>
            </Link>
          </li>
        </ul>

        <ul className="mt-2">
          <li
            className="relative mb-2 font-bold text-xl hover:bg-green-600 w-full transition duration-200 ease-in-out"
            key={uuidv4()}
          >
            <NavLink
              to={""}
              className="flex items-center  justify-start text-xl font-bold p-4 w-full "
              exact
            >
              {/* {action.icon} */}
              <span className="">🏡 Home</span>
            </NavLink>
          </li>

          <li
            className="relative mb-2 font-bold text-xl hover:bg-green-600 w-full transition duration-200 ease-in-out"
            key={uuidv4()}
          >
            <NavLink
              to={""}
              className="flex items-center  justify-start text-xl font-bold p-4 w-full "
              exact
            >
              {/* {action.icon} */}
              <span className="">📅 Leaderboard</span>
            </NavLink>
          </li>
          <li
            className="relative hover:bg-green-600 w-full transition duration-200 ease-in-out"
            key={uuidv4()}
          >
            <NavLink
              to={""}
              className="flex items-center  justify-start text-xl font-bold p-4 w-full "
              exact
            >
              {/* {action.icon} */}
              <span className="">💭 FAQs</span>
            </NavLink>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default Sidebar;
