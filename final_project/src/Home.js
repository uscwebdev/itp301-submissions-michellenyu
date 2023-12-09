import React, { useState } from 'react';
import $ from 'jquery';
import { Outlet, Link } from 'react-router-dom';
import NutritionPage from './NutritionPage';

export default function Home() {
  const apiKey = '6e420ebfb91e00c85262bf2b81af7f10'; // Replace with your actual API key
  const appId = 'a04f61dc';
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  function handleFormSubmission(e) {
    e.preventDefault();

    $.ajax({
      url: `https://api.edamam.com/api/recipes/v2?type=public&q=${searchTerm}&app_id=${appId}&app_key=${apiKey}`,
      dataType: 'json',
      success: function (response) {
        console.log(response);
        // Assuming the recipe API response has a 'hits' property containing an array of recipes
        var recipes = response.hits;
        setResults(recipes);
      },
      error: function (error) {
        console.error('Error fetching recipes:', error);
      },
    });
  }

  const showNutrition = (index) => {
    const nutritionId = `nut-${index}`;
    const nutritionDiv = document.getElementById(nutritionId);

    if (nutritionDiv.hidden === true) {
      nutritionDiv.hidden = false;
    } else {
      nutritionDiv.hidden = true;
    }
  };

  return (
    <div className="container">
      <h1 className="recipesearch">Recipe Search</h1>

      <p>
        Welcome to our culinary haven! Whether you're a seasoned chef or a
        kitchen novice, embark on a delightful culinary journey by exploring our
        vast collection of recipes. From mouthwatering main courses to tempting
        desserts, our home page is your gateway to a world of flavors. Feel free
        to use the search bar to discover new and exciting recipes that will
        inspire your next culinary adventure. Happy cooking!
      </p>
      <form id="search-form" onSubmit={handleFormSubmission}>
        <div className="form-row">
          <div>
            <label htmlFor="search-term" className="search-text">
              Search:
            </label>
            <input
              type="text"
              id="search-term"
              className="form-control-text"
              placeholder="Search for recipes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.currentTarget.value)}
            />
          </div>
          <div className="submit">
            <button type="submit" className="btn-search">
              Search
            </button>
          </div>
        </div>
      </form>

      <div className="big-recipe-wrap">
        {results.length > 0 &&
          results.map((hits, index) => (
            <div key={hits.recipe.uri} className="key">
              <img
                src={hits.recipe.image}
                alt={hits.recipe.label + ' Image'}
                className="img-fluid"
              />

              <h2>{hits.recipe.label}</h2>
              <p>Source: {hits.recipe.source}</p>
              <a
                href={hits.recipe.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Recipe
              </a>
              <p>Cuisine Type: {hits.recipe.cuisineType.join(', ')}</p>
              <p>Yield: {hits.recipe.yield} servings</p>

              <button
                className="open-info"
                onClick={() => showNutrition(index)}
              >
                Open Nutrition Info
              </button>

              <div id={`nut-${index}`} hidden>
                <NutritionPage
                  calories={hits.recipe.calories}
                  recipe={hits.recipe}
                />
              </div>

              {/* Add more details as needed */}
            </div>
          ))}
      </div>
    </div>
  );
}
