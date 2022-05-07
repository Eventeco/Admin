/* This example requires Tailwind CSS v2.0+ */
import { ChevronRightIcon, MailIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import instance from "../axios";
import { BACKEND_BASE_URL } from "../constants/others";
import EMPTY_PROFILE_IMAGE from "../assets/empty-profile-image.png";
import { getDateFull, getDateShort } from "../services/utils";

export default function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    instance.get("admin/activeUsers").then((res) => {
      setUsers(res.data.data);
    });
  }, []);

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <ul className="divide-y divide-gray-200">
        {users.map((user) => (
          <li key={user.id}>
            <Link
              to={{
                pathname: `users/${user.username}`,
                state: {
                  user: user,
                },
              }}
              className="block hover:bg-gray-50"
            >
              <div className="flex items-center px-4 py-4 sm:px-6">
                <div className="min-w-0 flex-1 flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="h-12 w-12 rounded-full"
                      src={
                        user.profilepicpath
                          ? `${BACKEND_BASE_URL}/s3/getImage/${user.profilepicpath}`
                          : EMPTY_PROFILE_IMAGE
                      }
                      alt=""
                    />
                  </div>
                  <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                    <div>
                      <p className="text-sm font-medium text-green-600 truncate">{user.username}</p>
                      <p className="mt-2 flex items-center text-sm text-gray-500">
                        <MailIcon
                          className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        <span className="truncate">{user.email}</span>
                      </p>
                    </div>
                    <div className="hidden md:flex md:items-center">
                      <div>
                        <p className="text-sm text-gray-900">
                          Created on{" "}
                          <time dateTime={getDateShort(user.createdat)}>
                            {getDateFull(user.createdat)}
                          </time>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
