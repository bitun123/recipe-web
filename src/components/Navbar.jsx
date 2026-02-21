import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
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
              className={(e) => (e.isActive ? "text-red-600" : "text-white")}
            >
              {item.name}
            </NavLink>

          </div>
        );
      })}
                  <NavLink to={"/create-recipes"} className="text-xl font-medium py-2 px-4 bg-lime-900 rounded-4xl active:scale-95 cursor-pointer">
create recipes
            </NavLink>
    </div>
  );
}

export default Navbar;
