/* This example requires Tailwind CSS v2.0+ */
import { LocationMarkerIcon, PencilIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { BACKEND_BASE_URL } from "../constants/others";
import { shortString } from "../services/utils";

export default function EventsList({ events }) {
  return events.length > 0 ? (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
      {events.map((event) => (
        <li
          key={event.id}
          className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
        >
          <div className="flex flex-col p-8">
            <img
              className="flex-shrink-0 mx-auto rounded-lg h-72 w-72"
              src={`${BACKEND_BASE_URL}/s3/getImage/${event.picturepath}`}
              alt={`${event.name}`}
            />
            <h3 className="mt-6 text-gray-900 text-lg font-medium">{event.user.username}</h3>
            <dl className="mt-1 flex-grow flex flex-col justify-between">
              <dt className="sr-only">Title</dt>
              <dd className="text-gray-500 text-md">{event.title}</dd>
              <dt className="sr-only">Location</dt>
              <dd className="mt-3">
                <span className="inline-flex">
                  <LocationMarkerIcon className="w-5 h-5 text-green-500" aria-hidden="true" />
                  <span className="ml-3 text-gray-500">{shortString(event.location, 30)}</span>
                </span>
              </dd>
            </dl>
          </div>
          <div>
            <div className="-mt-px bg-green-400 flex divide-x divide-gray-200">
              <div className="w-0 flex-1 flex">
                <Link
                  to={{ pathname: `events/${event.id}`, state: { event: event } }}
                  className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-ld font-bold text-white border border-transparent rounded-bl-lg hover:text-gray-500"
                >
                  <PencilIcon className="w-5 h-5 text-white" aria-hidden="true" />
                  <span className="ml-3 text-white">Edit</span>
                </Link>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  ) : (
    <div>
      <h1 className="text-2xl">No events found</h1>
    </div>
  );
}
