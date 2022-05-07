/* This example requires Tailwind CSS v2.0+ */
import { CalendarIcon, HomeIcon, UsersIcon } from "@heroicons/react/outline";
import { NavLink } from "react-router-dom";
import LogoWhite from "../assets/logo-white.svg";

const navigation = [
  { name: "Dashboard", icon: HomeIcon, href: "/", exact: true },
  { name: "Events", icon: CalendarIcon, href: "/events", exact: false },
  { name: "Users", icon: UsersIcon, href: "/users", exact: false },
];

export default function Sidebar(props) {
  return (
    <>
      <div className="flex flex-col min-h-0 w-64 bg-green-700">
        <div className="flex-1 flex flex-col pt-8 pb-4 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4">
            <img className="h-8 w-auto" src={LogoWhite} alt="Workflow" />
          </div>
          <nav className="mt-10 flex-1 px-2 space-y-1" aria-label="Sidebar">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                exact={item.exact}
                className={`text-green-100 hover:bg-green-600 hover:bg-opacity-75
                  group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
                activeClassName="bg-green-800 text-white hover:bg-green-800 hover:bg-opacity-100"
              >
                <item.icon className="mr-3 flex-shrink-0 h-6 w-6 white" aria-hidden="true" />
                <span className="flex-1 text-lg">{item.name}</span>
              </NavLink>
            ))}
          </nav>
        </div>
        {/* <div className="flex-shrink-0 flex border-t border-gray-300 p-4">
          <Link to="#" className="flex-shrink-0 w-full group block">
            <div className="flex items-center">
              <div>
                <img
                  className="inline-block h-9 w-9 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-white">Tom Cook</p>
                <p className="text-xs font-medium text-indigo-200 group-hover:text-white">
                  View profile
                </p>
              </div>
            </div>
          </Link>
        </div> */}
      </div>
      {props.children}
    </>
  );
}
