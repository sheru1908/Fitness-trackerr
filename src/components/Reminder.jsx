import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { format } from 'date-fns';
import { FiCalendar, FiClock, FiActivity, FiCheckCircle } from 'react-icons/fi';

const Reminder = ({ onSetReminder }) => {
  const [date, setDate] = useState(new Date());
  const [type, setType] = useState('workout');

  const handleSetReminder = (e) => {
    e.preventDefault();
    const now = new Date();
    const timeDiff = new Date(date) - now;

    if (!type || !date) {
      toast.error('Please select both type and date');
    } else if (timeDiff <= 0) {
      toast.error('Please select a future date and time');
    } else {
      const formattedDate = format(date, 'MMMM d, yyyy h:mm a');
      onSetReminder(type, date);
      setTimeout(() => {
        alert(`Time for your ${type}! (${formattedDate})`);
      }, timeDiff);
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto mt-12 p-8 bg-gradient-to-br from-[#a2c2f2] to-[#d2e4f7] rounded-3xl shadow-xl border border-gray-200">
      <div className="flex items-center gap-3 mb-8">
        <FiActivity className="text-indigo-600 text-3xl" />
        <h2 className="text-2xl font-extrabold text-gray-800">Set Your Reminder</h2>
      </div>

      <form onSubmit={handleSetReminder} className="space-y-6">
        {/* Reminder Type */}
        <div className="space-y-3">
          <label className="text-lg font-medium text-gray-700 flex items-center gap-2">
            <FiCheckCircle className="text-indigo-600" />
            Reminder Type
          </label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-gray-800 text-lg"
          >
            <option value="workout">🏋️ Workout</option>
            <option value="meal">🍽️ Meal</option>
          </select>
        </div>

        {/* Date Time Picker */}
        <div className="space-y-3">
          <label className="text-lg font-medium text-gray-700 flex items-center gap-2">
            <FiCalendar className="text-indigo-600" />
            Pick Date & Time
          </label>
          <DateTimePicker
            onChange={setDate}
            value={date}
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-800 text-lg"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-4 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105"
        >
          <div className="flex items-center justify-center gap-3">
            <FiClock className="text-white text-lg" />
            Set Reminder
          </div>
        </button>
      </form>
    </div>
  );
};

export default Reminder;
