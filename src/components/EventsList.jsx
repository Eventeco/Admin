/* This example requires Tailwind CSS v2.0+ */
import { LocationMarkerIcon, PencilIcon } from '@heroicons/react/solid'

const people = [
  {
    id: 9012830921,
    name: 'Jane Cooper',
    title: 'Paradigm Representative',
    role: 'Admin',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://media.wired.com/photos/60a4131594944dc095a58ed9/master/pass/Gear-GoogleIO-Sundar_Pichai_03.jpg',
  },
  {
    id: 90128323921,
    name: 'Jane Cooper',
    title: 'Paradigm Representative',
    role: 'Admin',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://media.wired.com/photos/60a4131594944dc095a58ed9/master/pass/Gear-GoogleIO-Sundar_Pichai_03.jpg',
  },
  {
    id: 9011230921,
    name: 'Jane Cooper',
    title: 'Paradigm Representative',
    role: 'Admin',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://media.wired.com/photos/60a4131594944dc095a58ed9/master/pass/Gear-GoogleIO-Sundar_Pichai_03.jpg',
  },
  // More people...
]

export default function EventsList() {
  return (
    <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
      {people.map((person) => (
        <li
          key={person.email}
          className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
        >
          <div className="flex flex-col p-8">
            <img className="flex-shrink-0 mx-auto rounded-lg" src={person.imageUrl} alt="" />
            <h3 className="mt-6 text-gray-900 text-lg font-medium">{person.name}</h3>
            <dl className="mt-1 flex-grow flex flex-col justify-between">
              <dt className="sr-only">Title</dt>
              <dd className="text-gray-500 text-md">{person.title}</dd>
              <dt className="sr-only">Location</dt>
              <dd className="mt-3">
                <span className="inline-flex">
                  <LocationMarkerIcon className="w-5 h-5 text-green-500" aria-hidden="true" />
                  <span className="ml-3 text-gray-500">Bilkent Universitesi</span>
                </span>
              </dd>
            </dl>
          </div>
          <div>
            <div className="-mt-px bg-green-400 flex divide-x divide-gray-200">
              <div className="w-0 flex-1 flex">
                <a
                  href={`events/${person.id}`}
                  className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-ld font-bold text-white border border-transparent rounded-bl-lg hover:text-gray-500"
                >
                  <PencilIcon className="w-5 h-5 text-white" aria-hidden="true" />
                  <span className="ml-3 text-white">Edit</span>
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}
