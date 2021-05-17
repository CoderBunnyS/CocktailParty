import React from 'react';

const CocktailCard = ({ strDrinkThumb, strDrink, strAlcoholic, strInstructions, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5 }) => {
    
    return (
        <div className="cocktail">
        
        <img src={strDrinkThumb} alt={strDrink} />
            <h1 className="name">{strDrink}</h1>
            <h3>{strAlcoholic}</h3>
            
            <ul>
                <li>{strIngredient1}</li>
                <li>{strIngredient2}</li>
                <li>{strIngredient3}</li>
                <li>{strIngredient4}</li>
                <li>{strIngredient5}</li>
            </ul>
            <p>{strInstructions}</p>
            
        </div>
    );
};

export default CocktailCard;