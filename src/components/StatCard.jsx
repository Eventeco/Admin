import { ArrowSmDownIcon, ArrowSmUpIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { classNames } from "../services/utils";
import { SpinnerCircular } from "spinners-react";

export default function StatCard(props) {
  const title = props.title;
  const statistic = props.statistic;
  const trend = props.trend;
  const change = props.change;
  const icon = props.icon;
  const href = props.href;
  const loading = props.loading;

  return (
    <div className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
      <dt>
        <div className="absolute bg-green-500 rounded-md p-3">
          <div className="h-6 w-6 text-white" aria-hidden="true">
            {icon}
          </div>
        </div>
        <p className="ml-16 text-sm font-medium text-gray-500 truncate">{title}</p>
      </dt>
      <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
        <p className="text-2xl font-semibold text-gray-900" data-testid={title + statistic}>
          {loading ? <SpinnerCircular size={30} thickness={150} /> : statistic}
        </p>
        <p
          className={classNames(
            trend === "increase" ? "text-green-600" : "text-red-600",
            "ml-2 flex items-baseline text-sm font-semibold"
          )}
        >
          {trend === "increase" && (
            <ArrowSmUpIcon
              className="self-center flex-shrink-0 h-5 w-5 text-green-500"
              aria-hidden="true"
            />
          )}
          {trend === "decrease" && (
            <ArrowSmDownIcon
              className="self-center flex-shrink-0 h-5 w-5 text-red-500"
              aria-hidden="true"
            />
          )}
          <span className="sr-only">{trend === "increase" ? "Increased" : "Decreased"} by</span>
          {change}
        </p>
        <div className="absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6">
          <div className="text-sm">
            <Link to={href} className="font-medium text-green-600 hover:text-indigo-500">
              {" "}
              View all
              <span className="sr-only">{title} stats</span>
            </Link>
          </div>
        </div>
      </dd>
    </div>
  );
}
