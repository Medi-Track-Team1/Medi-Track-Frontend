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
  { name: "Dashboard",  icon: HiOutlineChartBar,    path: "/Doctor"         },
  { name: "Patients",   icon: HiOutlineUsers,       path: "/Doctor/patients" },
  { name: "Prescribe",  icon: HiOutlineDocumentText,path: "/Doctor/prescribe"},
  { name: "Schedule",   icon: HiOutlineCalendar,    path: "/Doctor/schedule" },
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
          Doctor<span className="opacity-75">Panel</span>
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

      {/* ✅ Mobile Menu */}
      <div
        className="max-h-0 overflow-hidden transition-max-h duration-300 peer-checked:max-h-[340px]
                   md:hidden bg-white/90 shadow-inner backdrop-blur-lg dark:bg-slate-900/90"
      >
        <ul className="divide-y divide-slate-200 dark:divide-slate-700">
          {links.map(({ name, path, icon: Icon }) => (
            <li key={path}>
              <NavLink
                to={path}
                end={path === "/"}
                onClick={() => (document.getElementById("navToggle").checked = false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-6 py-4 text-base ${
                    isActive
                      ? "bg-blue-50 text-blue-700 dark:bg-slate-800 dark:text-cyan-300"
                      : "text-slate-700 hover:bg-blue-50 dark:text-slate-300 dark:hover:bg-slate-800"
                  }`
                }
              >
                <Icon className="h-5 w-5 opacity-80" />
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}