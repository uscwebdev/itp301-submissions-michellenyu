//NutritionPage.js
import React from 'react';

function NutritionPage({ calories, recipe }) {
  const roundedCalories = parseFloat(calories).toFixed(2);

  const protein = recipe.totalNutrients.PROCNT.quantity.toFixed(2);
  const carbs = recipe.totalNutrients.CHOCDF.quantity.toFixed(2);
  const fat = recipe.totalNutrients.FAT.quantity.toFixed(2);

  return (
    <div>
      <h2>Nutrition Information</h2>

      <p>Calories: {roundedCalories}cal</p>
      <p>Protein: {protein}g</p>
      <p>Carbs: {carbs}g</p>
      <p>Fat: {fat}g</p>

      {/* Add your nutrition information rendering here */}
    </div>
  );
}

export default NutritionPage;
