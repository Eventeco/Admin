/* This example requires Tailwind CSS v2.0+ */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import instance from "../axios";
import BreadCrumbs from "../components/BreadCrumbs";
import { getDateFull } from "../services/utils";

export default function ViewUser() {
  const location = useLocation();
  const params = useParams();
  const [user, setUser] = useState(location?.state?.user);

  useEffect(() => {
    if (!location.state) {
      instance.get(`/user/uname/${params.username}`).then((res) => {
        setUser(res.data.data);
      });
    }
  }, [location.state, params.username]);

  return (
    <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none bg-gray-100 h-screen">
      <div className="py-6">
        <BreadCrumbs />
        <div className="md:flex md:items-center md:justify-between sm:px-6 md:px-8 px-4 max-w-7xl mx-auto">
          <div className="flex-1 min-w-0">
            <h1 data-testid="page-title" className="text-3xl font-semibold text-gray-900">
              User Details
            </h1>
            <p data-testid="page-subtitle" className="text-md font-medium text-gray-500">
              Details of {user.username}
            </p>
          </div>
        </div>
        <div className="max-w-7xl mt-10 mx-auto px-4 sm:px-6 md:px-8">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">User Information</h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details</p>
            </div>
            <div className="border-t border-gray-200">
              <dl>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Full name</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {user.first_name} {user.last_name}
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Date of Birth</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {getDateFull(user.dateofbirth)}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Email address</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.email}</dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Total Events Joined</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {user.eventscount}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
