import React, { useContext, useState, useEffect, useRef } from "react";
// import MinProfile from "./MinProfile";
// import MobileSidebar from "./sidebar/MobileSidebar";
import { Link, NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function HeaderDashboard() {
  return (
    <header className="flex justify-end items-center mb-2 p-2">
      {/* <MinProfile /> */}
      <div
        className="relative mb-6 hover:bg-green-600  transition duration-200 ease-in-out"
        key={uuidv4()}
      >
        <NavLink
          to={""}
          className="flex items-center bg-green-600 rounded-full p-2 pr-4 pl-4 text-white
               justify-start text-lg font-medium p-4  "
          exact
        >
          {/* {action.icon} */}
          <span className="ml-4">+ Create Question</span>
        </NavLink>
      </div>
    </header>
  );
}

export default HeaderDashboard;
