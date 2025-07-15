import React from "react";
import { NavLink } from "react-router-dom";
import {
  HiOutlineChartBar,
  HiOutlineUsers,
  HiOutlineDocumentText,
  HiOutlineCalendar,
  HiBars3BottomRight,
  HiXMark,
} from "react-icons/hi2";

const links = [
  { name: "Dashboard",  icon: HiOutlineChartBar,    path: "dashboard"},
  { name: "Patients",   icon: HiOutlineUsers,       path: "patients" },
  { name: "Prescribe",  icon: HiOutlineDocumentText,path: "prescribe"},
  { name: "Schedule",   icon: HiOutlineCalendar,    path: "schedule" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-[60] backdrop-blur-lg">
      <div className="h-1 w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-fuchsia-500" />

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <NavLink
          to="/"
          className="text-2xl font-extrabold text-transparent bg-clip-text
                     bg-gradient-to-r from-cyan-500 via-blue-600 to-fuchsia-600
                     hover:scale-105 transition-transform"
        >
          Dr.Sravani<span className="opacity-75">Panel</span>
        </NavLink>

        <input id="navToggle" type="checkbox" className="peer sr-only" />
        <label
          htmlFor="navToggle"
          className="cursor-pointer text-blue-600 md:hidden"
          aria-label="Open menu"
        >
          <HiBars3BottomRight className="h-7 w-7 peer-checked:hidden" />
          <HiXMark className="hidden h-7 w-7 peer-checked:block" />
        </label>

        {/* ✅ Desktop Menu with Icons */}
        <ul className="hidden gap-7 text-sm font-medium md:flex">
          {links.map(({ name, path, icon: Icon }) => (
            <li key={path} className="relative group">
              <NavLink
                to={path}
                end={path === "/"}
                className={({ isActive }) =>
                  `flex items-center gap-2 transition-colors ${
                    isActive
                      ? "text-blue-700"
                      : "text-slate-600 hover:text-blue-600"
                  }`
                }
              >
                <Icon className="h-5 w-5 opacity-80" />
                {name}
              </NavLink>
              <span
                className="pointer-events-none absolute -bottom-[4px] left-1/2 h-[3px] w-0
                           -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600
                           opacity-0 transition-all duration-300 group-hover:w-3/4 group-hover:opacity-100
                           group-[.active]:w-full group-[.active]:opacity-100"
              />
            </li>
          ))}
        </ul>
      </nav>

     
    </header>
  );
}
