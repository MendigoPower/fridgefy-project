import React, { Component, useState } from 'react';
import axios from "axios";

export default function Search() {

  const [dish, setDish] = useState('');
  const [cousine, setCousine] = useState('');
  const [diet, setDiet] = useState('');
  const [intolarance, setIntolarance] = useState('');
  const [recipes, setRecipes] = useState([]);

  const handleSubmit = (event) => {
    console.log(dish);
    axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_SPOONACULAR}&query=${dish}&cuisine=${cousine}&diet=${diet}&intolerances=${intolarance}`).then((res) => {
      setRecipes(res);
      console.log(recipes);
    });
  };

  return (
    <div className="column-middle">
      <div>
        <h2>Search</h2>
        <input placeholder='What dish are you looking for?' value={dish} onChange={(e) => setDish(e.target.value)} />
      </div>
      <div>
        <p>Filter Area</p>
        <label>Cousine</label>
        <select onChange={(e) => setCousine(e.target.value)}>
          <option></option>
          <option>African</option>
          <option>American</option>
          <option>Italian</option>
          <option>Latin American</option>
          <option>Japanese</option>
          <option>Mediterranean</option>
        </select>
        <label>Intolerance</label>
        <select onChange={(e) => setIntolarance(e.target.value)}>
          <option></option>
          <option>Dairy</option>
          <option>Egg</option>
          <option>Gluten</option>
          <option>Grain</option>
          <option>Seafood</option>
          <option>Wheat</option>
        </select>
        <label>Diet</label>
        <select onChange={(e) => setDiet(e.target.value)}>
          <option></option>
          <option>Vegetarian</option>
          <option>Lacto-Vegetarian</option>
          <option>Ovo-Vegetarian</option>
          <option>Vegan</option>
          <option>Pescetarian</option>
          <option>Paleo</option>
        </select>
        <button onSubmit={handleSubmit}>Search</button>
        </div>
        <div>
          <div>
            <img />
              <button>More</button>
              <button>Add</button>
          </div>
        </div>
      </div>
  );
}