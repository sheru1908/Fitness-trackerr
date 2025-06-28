import React, { useState } from 'react';
import {
  FaHome, FaChevronDown, FaChevronUp, FaDumbbell,
  FaChartLine, FaRunning, FaUtensils, FaListAlt,
  FaCog, FaPlus
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import MenuProfileDropdown from './MenuProfileDropdown';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isSecondDropdownOpen, setSecondDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
  const toggleSecondDropdown = () => setSecondDropdownOpen(!isSecondDropdownOpen);

  return (
    <aside className={`fixed lg:static lg:w-64 bg-gradient-to-b from-[#4e73df] to-[#2e59d9] text-white flex flex-col transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 min-h-screen shadow-lg`}>
      {/* Top Mobile Menu */}
      <div className="p-4 flex justify-between items-center lg:hidden border-b border-gray-700">
        <MenuProfileDropdown />
      </div>

      {/* Title */}
      <div className="hidden lg:flex items-center justify-center text-2xl font-semibold py-6 border-b border-gray-700">
        Dashboard
      </div>

      {/* Links */}
      <ul className="flex-1 p-6 space-y-4 text-sm font-medium">
        {/* Dashboard */}
        <li>
          <Link to="/db/dashboard" className="flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-gray-800 transition duration-300">
            <FaHome className="text-xl" />
            Home
          </Link>
        </li>

        {/* Workout Tracking Dropdown */}
        <li>
          <div onClick={toggleDropdown} className="flex items-center justify-between cursor-pointer px-4 py-3 rounded-lg hover:bg-gray-800 transition duration-300">
            <div className="flex items-center gap-4">
              <FaDumbbell className="text-xl" />
              Workout Plans
            </div>
            {isDropdownOpen ? <FaChevronUp className="text-lg" /> : <FaChevronDown className="text-lg" />}
          </div>
          {isDropdownOpen && (
            <ul className="ml-6 mt-2 space-y-2 text-sm">
              <li>
                <Link to="/db/routineList" className="block px-4 py-2 rounded hover:bg-gray-800">
                  Create New Routine
                </Link>
              </li>
              <li>
                <Link to="/db/categoryList" className="block px-4 py-2 rounded hover:bg-gray-800">
                  Add Exercise Categories
                </Link>
              </li>
              <li>
                <Link to="/db/tagList" className="block px-4 py-2 rounded hover:bg-gray-800">
                  Add Exercise Tags
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Nutrition Tracking Dropdown */}
        <li>
          <div onClick={toggleSecondDropdown} className="flex items-center justify-between cursor-pointer px-4 py-3 rounded-lg hover:bg-gray-800 transition duration-300">
            <div className="flex items-center gap-4">
              <FaUtensils className="text-xl" />
              Meal Plans
            </div>
            {isSecondDropdownOpen ? <FaChevronUp className="text-lg" /> : <FaChevronDown className="text-lg" />}
          </div>
          {isSecondDropdownOpen && (
            <ul className="ml-6 mt-2 space-y-2 text-sm">
              <li>
                <Link to="/db/nutritionList" className="block px-4 py-2 rounded hover:bg-gray-800">
                  Add New Meal
                </Link>
              </li>
              <li>
                <Link to="/db/mealTypeList" className="block px-4 py-2 rounded hover:bg-gray-800">
                  Meal Type Categories
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Progress Tracking */}
        <li>
          <Link to="/db/progressList" className="flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-gray-800 transition duration-300">
            <FaChartLine className="text-xl" />
            Your Progress
          </Link>
        </li>

        {/* Reminder */}
        <li>
          <Link to="/db/mainReminder" className="flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-gray-800 transition duration-300">
            <FaPlus className="text-xl" />
            Set Up Reminder
          </Link>
        </li>

        {/* Settings */}
        <li>
          <Link to="/db/settings" className="flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-gray-800 transition duration-300">
            <FaCog className="text-xl" />
            Settings
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
