import React from "react";
import { NavLink } from "react-router-dom";

function Navbar({openModal, closeModal}) {
  const navItem = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Recipes",
      path: "/recipes",
    },
    {},
  ];

  return (
    <div className="w-full h-[3.4rem] bg-gray-900 rounded-4xl flex items-center justify-center gap-4 text-xl font-medium text-white transition-all">
      {navItem.map((item) => {
        return (
          <div>
            <NavLink
              to={item.path}
              onClick={closeModal}
              className={(e) => (e.isActive ? "text-red-600" : "text-white")}
            >
              {item.name}
            </NavLink>
          </div>
        );
      })}
 <button
 onClick={openModal}
 className="text-xl font-medium py-2 px-4 bg-lime-900 rounded-4xl active:scale-95 cursor-pointer">Crete recipes</button>
    </div>
  );
}

export default Navbar;
