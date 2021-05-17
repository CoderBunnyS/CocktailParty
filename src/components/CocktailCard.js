import React from 'react';

const CocktailCard = ({ strDrinkThumb, strDrink, strAlcoholic, strInstructions, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10 }) => {
    
    return (
        <div className="cocktail">
        
        <img src={strDrinkThumb} alt={strDrink} />
            <h1 className="name">{strDrink}</h1>
            {/* <h3>{strAlcoholic}</h3> */}
            
            <ul className="list">
                <h3>Ingredients</h3>
                <li>{strIngredient1}</li>
                <li>{strIngredient2}</li>
                <li>{strIngredient3}</li>
                <li>{strIngredient4}</li>
                <li>{strIngredient5}</li>
                <li>{strIngredient6}</li>
                <li>{strIngredient7}</li>
                <li>{strIngredient8}</li>
                <li>{strIngredient9}</li>
                <li>{strIngredient10}</li>
            </ul>
            <h3>Instructions</h3>
            <p>{strInstructions}</p>
            
        </div>
    );
};

export default CocktailCard;