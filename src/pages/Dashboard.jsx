import React from "react"
import StatCard from "../components/StatCard";
import { UserGroupIcon, CalendarIcon } from "@heroicons/react/solid";
import BreadCrumbs from "../components/BreadCrumbs";

export default function Dashboard() {
  console.log('in dashboard');
  return (
    <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none bg-gray-100 h-screen">
      <div className="py-6">
        <BreadCrumbs />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h1 className="text-3xl font-semibold text-gray-900">Dashboard</h1>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="mt-5 grid grid-cols-3 gap-5 sm:grid-cols-2 lg:grid-cols-3 grid-rows-3">
            <StatCard 
              title="Total Users"
              statistic={4}
              icon={<UserGroupIcon/>}
              href={"/users"}
            />
            <StatCard 
              title="Total Events"
              statistic={23}
              icon={<CalendarIcon/>}
              href={"/events"}
            />
            <StatCard 
              title="Upcoming Events"
              statistic={6}
              icon={<CalendarIcon/>}
              href={"/events"}
            />
            <StatCard 
              title="Completed Events"
              statistic={17}
              icon={<CalendarIcon/>}
              href={"/events"}
            />
          </div>
        </div>
      </div>
    </main>
  )
}