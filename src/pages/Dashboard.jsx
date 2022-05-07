import React, { useEffect, useState } from "react";
import StatCard from "../components/StatCard";
import { UserGroupIcon, CalendarIcon } from "@heroicons/react/solid";
import BreadCrumbs from "../components/BreadCrumbs";
import instance from "../axios";
import * as ROUTES from "../constants/routes";

export default function Dashboard() {
  const [usersCount, setUsersCount] = useState(0);
  const [eventsCount, setEventsCount] = useState(0);
  const [upcomingEventsCount, setUpcomingEventsCount] = useState(0);
  const [pastEventsCount, setPastEventsCount] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    instance.get("/admin/allCounts").then((res) => {
      setUsersCount(res.data.data.userscount);
      setEventsCount(res.data.data.eventscount);
      setUpcomingEventsCount(res.data.data.upcomingeventscount);
      setPastEventsCount(res.data.data.pasteventscount);
      setLoading(false);
    });
  }, []);

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
              statistic={usersCount}
              icon={<UserGroupIcon />}
              href={ROUTES.USERS}
              loading={loading}
            />
            <StatCard
              title="Total Events"
              statistic={eventsCount}
              icon={<CalendarIcon />}
              href={ROUTES.ALL_EVENTS}
              loading={loading}
            />
            <StatCard
              title="Upcoming Events"
              statistic={upcomingEventsCount}
              icon={<CalendarIcon />}
              href={ROUTES.UPCOMING_EVENTS}
              loading={loading}
            />
            <StatCard
              title="Completed Events"
              statistic={pastEventsCount}
              icon={<CalendarIcon />}
              href={ROUTES.COMPLETED_EVENTS}
              loading={loading}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
