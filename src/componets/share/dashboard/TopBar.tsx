import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router'
import DarkSwitch from '@/componets/share/main/DarkSwitch'

// กำหนด interface สำหรับ SVG props
interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string
}

export default function TopBar() {
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Click outside handler
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Close dropdown when clicking menu items
  const handleMenuClick = () => {
    setIsProfileOpen(false)
  }

  return (
    <header className="flex-shrink-0 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className="flex items-center justify-between h-16 px-4">
        {/* Search */}
        <div className="flex-1 flex justify-start">
          <div className="w-full max-w-md">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <SearchIcon className="w-5 h-5 text-gray-400 dark:text-gray-500" />
              </span>
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-4 py-2 border rounded-md text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:border-indigo-500 dark:focus:border-indigo-500 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          <DarkSwitch />
          
          {/* Notifications */}
          <button className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
            <span className="sr-only">Notifications</span>
            <BellIcon className="w-6 h-6" />
          </button>

          {/* Profile dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center space-x-2 mr-2"
            >
              <img
                className="w-8 h-8 rounded-full"
                src="/images/avatar.avif"
                alt=""
              />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Tom Cook
              </span>
            </button>

            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 py-1 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 z-50">
                <Link
                  to="/dashboard/profile"
                  onClick={handleMenuClick}
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Your Profile
                </Link>
                <Link
                  to="/dashboard/settings"
                  onClick={handleMenuClick}
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Settings
                </Link>
                <Link
                  to="/login"
                  onClick={handleMenuClick}
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Sign out
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

function SearchIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  )
}

function BellIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
      />
    </svg>
  )
} 