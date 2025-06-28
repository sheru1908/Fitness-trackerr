import React from 'react';

const NutritionAnalytics = ({ nutritions }) => {
  // Calculate total calories
  const totalCalories = nutritions.reduce((acc, curr) => acc + curr.calories, 0);

  // Calculate macronutrient distribution
  const totalCarbohydrates = nutritions.reduce((acc, curr) => acc + curr.carbohydrates, 0);
  const totalProteins = nutritions.reduce((acc, curr) => acc + curr.proteins, 0);
  const totalFats = nutritions.reduce((acc, curr) => acc + curr.fats, 0);

  // Calculate daily consumption trends
  const dailyConsumptionTrends = nutritions.reduce((acc, curr) => {
    const date = new Date(curr.createdAt).toDateString();
    acc[date] = (acc[date] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="mt-8 space-y-6">
      {/* Nutrition Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Calories */}
        <div className="bg-gradient-to-r from-[#ff8a00] to-[#e52e71] rounded-lg p-6 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
          <h3 className="text-2xl font-semibold text-white mb-4">Total Calories</h3>
          <p className="text-4xl font-bold text-white">{totalCalories} kcal</p>
        </div>

        {/* Macronutrient Distribution */}
        <div className="bg-gradient-to-r from-[#28a745] to-[#218838] rounded-lg p-6 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
          <h3 className="text-2xl font-semibold text-white mb-4">Macronutrient Distribution</h3>
          <div className="space-y-2">
            <p className="text-xl text-white">Carbohydrates: {totalCarbohydrates}g</p>
            <p className="text-xl text-white">Proteins: {totalProteins}g</p>
            <p className="text-xl text-white">Fats: {totalFats}g</p>
          </div>
        </div>

        {/* Daily Consumption Trends */}
        <div className="bg-gradient-to-r from-[#007bff] to-[#0056b3] rounded-lg p-6 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
          <h3 className="text-2xl font-semibold text-white mb-4">Daily Consumption Trends</h3>
          <div className="overflow-y-auto max-h-64">
            <ul className="space-y-2">
              {Object.keys(dailyConsumptionTrends).map((date) => (
                <li key={date} className="text-white">
                  <span className="font-semibold">{date}:</span> {dailyConsumptionTrends[date]} meals
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Add button with hover effect */}
      <div className="flex justify-center mt-6">
       
      </div>
    </div>
  );
};

export default NutritionAnalytics;
