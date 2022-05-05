/* This example requires Tailwind CSS v2.0+ */
import { CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon } from '@heroicons/react/outline'
import LogoWhite from '../assets/logo-white.svg'

const navigation = [
  { name: 'Dashboard', icon: HomeIcon, href: '/', current: false },
  { name: 'Events', icon: CalendarIcon, href: '/events', current: false },
  { name: 'Users', icon: UsersIcon, href: '/users', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Sidebar(props) {
  if (window.location.pathname === "/") {
    navigation[0].current = true
  } else if (window.location.pathname.includes('users')) {
    navigation[2].current = true
  } else {
    navigation[1].current = true
  }
  return (
    <>
      <div className="flex flex-col min-h-0 w-64 bg-green-700">
        <div className="flex-1 flex flex-col pt-8 pb-4 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4">
            <img
              className="h-8 w-auto"
              src={LogoWhite}
              alt="Workflow"
            />
          </div>
          <nav className="mt-10 flex-1 px-2 space-y-1" aria-label="Sidebar">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current ? 'bg-green-800 text-white' : 'text-green-100 hover:bg-green-600 hover:bg-opacity-75',
                  'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                )}
              >
                <item.icon className="mr-3 flex-shrink-0 h-6 w-6 white" aria-hidden="true" />
                <span className="flex-1 text-lg">{item.name}</span>
              </a>
            ))}
          </nav>
        </div>
        <div className="flex-shrink-0 flex border-t border-gray-300 p-4">
          <a href="#" className="flex-shrink-0 w-full group block">
            <div className="flex items-center">
              <div>
                <img
                  className="inline-block h-9 w-9 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-white">Tom Cook</p>
                <p className="text-xs font-medium text-indigo-200 group-hover:text-white">View profile</p>
              </div>
            </div>
          </a>
        </div>
      </div>
      {props.children}
    </>
  )
}
