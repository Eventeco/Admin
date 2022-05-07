/* This example requires Tailwind CSS v2.0+ */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import instance from "../axios";
import BreadCrumbs from "../components/BreadCrumbs";
import { getDateFull, getDateWithTime } from "../services/utils";
import { SpinnerCircular } from "spinners-react";
import { BACKEND_BASE_URL } from "../constants/others";

export default function ViewEvent() {
  const location = useLocation();
  const params = useParams();
  const [event, setEvent] = useState(location?.state?.event);

  useEffect(() => {
    if (!location.state) {
      instance.get(`events/${params.id}`).then((res) => {
        setEvent(res.data.data);
      });
    }
  }, [location.state, params.id]);

  return event ? (
    <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none bg-gray-100 h-screen">
      <div className="py-6">
        <BreadCrumbs />
        <div className="md:flex md:items-center md:justify-between sm:px-6 md:px-8 px-4 max-w-7xl mx-auto">
          <div className="flex-1 min-w-0">
            <h1 data-testid="page-title" className="text-3xl font-semibold text-gray-900">
              Event Details
            </h1>
            <p data-testid="page-subtitle" className="text-md font-medium text-gray-500">
              Details of {event.name}
            </p>
          </div>
        </div>
        <div className="max-w-7xl mt-10 mx-auto px-4 sm:px-6 md:px-8">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Event Information</h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">Event details</p>
              <div className="justify-center flex">
                <img
                  className="mt-6 items-center object-cover h-96 rounded-lg"
                  src={`${BACKEND_BASE_URL}/s3/getImage/${event.picturepath}`}
                  alt={event.name}
                />
              </div>
            </div>
            <div className="border-t border-gray-200">
              <dl>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Event Name</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{event.name}</dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Created Date</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {getDateFull(event.createdat)}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Start Time</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {getDateWithTime(event.starttime)}
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">End Time</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {getDateWithTime(event.endtime)}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Creator Username</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {event.user.username}
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Creator Email Address</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {event.user.email}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Total Users Joined</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {event.participantscount}
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Max Users Limit</dt>
                  <dd className="mt-1 text-sm text-red-700 sm:mt-0 sm:col-span-2">
                    {event.maxparticipants}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Min Users Limit</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {event.minparticipants}
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">About</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {event.description}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Rules</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <ol>
                      {event.rules.map((rule) => (
                        <li key={rule.id}>{rule.rule}</li>
                      ))}
                    </ol>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </main>
  ) : (
    <div className="flex justify-center items-center h-screen">
      <SpinnerCircular />
    </div>
  );
}
