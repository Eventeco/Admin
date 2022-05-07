/* This example requires Tailwind CSS v2.0+ */
import { ChevronRightIcon, HomeIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { DASHBOARD } from "../constants/routes";

export default function BreadCrumbs() {
  const location = useLocation();
  const [crumbs, setCrumbs] = useState([]);
  useEffect(() => {
    if (location) {
      const [, ...linkPath] = location.pathname.split("/");
      const crumbs = linkPath.map((path, i) => {
        const href = "/" + linkPath.slice(0, i + 1).join("/");
        return {
          name: path,
          href,
          current: href === location.pathname,
        };
      });
      setCrumbs(crumbs);
    }
  }, [location]);

  return (
    <nav
      className="md:flex md:items-center md:justify-between sm:px-6 md:px-8 px-4 max-w-7xl mx-auto py-3"
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center space-x-4">
        <li>
          <div>
            <Link to={DASHBOARD} className="text-gray-400 hover:text-gray-500">
              <HomeIcon className="flex-shrink-0 h-5 w-5" aria-hidden="true" />
              <span className="sr-only">Home</span>
            </Link>
          </div>
        </li>
        {crumbs.map((crumb) => (
          <li key={crumb.name}>
            <div className="flex items-center">
              <ChevronRightIcon
                className="flex-shrink-0 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              <Link
                to={crumb.href}
                className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700 capitalize"
                aria-current={crumb.current ? "page" : undefined}
              >
                {crumb.name}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
