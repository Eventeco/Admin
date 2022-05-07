import React from "react";
import BreadCrumbs from "../components/BreadCrumbs";
import UsersList from "../components/UsersList";

export default function Users() {
  return (
    <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none bg-gray-100 h-screen">
      <div className="py-6">
        <BreadCrumbs />
        <div className="md:flex md:items-center md:justify-between sm:px-6 md:px-8 px-4 max-w-7xl mx-auto">
          <div className="flex-1 min-w-0">
            <h1 data-testid="page-title" className="text-3xl font-semibold text-gray-900">
              User Management
            </h1>
            <p data-testid="page-subtitle" className="text-md font-medium text-gray-500">
              Manage all Eventeco users
            </p>
          </div>
        </div>
        <div className="max-w-7xl mt-10 mx-auto px-4 sm:px-6 md:px-8">
          <UsersList />
        </div>
      </div>
    </main>
  );
}
