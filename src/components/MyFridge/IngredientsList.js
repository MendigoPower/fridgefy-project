import React from 'react';

export default function IngredientsList({IngredientsData}) {
    const Ingredients = IngredientsData.Ingredients;

    return (
        <main>
            <section>
            <h3>Your Ingredients</h3>
            <ul>
                <li>ingredient: {Ingredients}</li>
            </ul>
            <button>x</button>
            </section>
        </main>
    );
}
