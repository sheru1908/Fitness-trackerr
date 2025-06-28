import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GoalSetter = ({ onAddGoal }) => {
  const [goal, setGoal] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAddGoal = (e) => {
    e.preventDefault();

    if (goal.trim() === '') {
      toast.error('Please enter a valid goal.');
      return;
    }

    setIsSubmitting(true);
    onAddGoal(goal);
    setGoal('');
    toast.success('Goal added successfully!');
    setIsSubmitting(false);
  };

  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-50 pt-16">
      <div className="w-full max-w-lg p-8 bg-white rounded-xl shadow-lg border border-gray-200">
        <ToastContainer />
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">Set Your Fitness Goal</h1>
        <form onSubmit={handleAddGoal} className="space-y-6">
          <div>
            <input
              type="text"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              placeholder="Enter your fitness goal"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none shadow-sm text-gray-700"
              required
              aria-label="Goal input"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Setting...' : 'Set Goal'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GoalSetter;
