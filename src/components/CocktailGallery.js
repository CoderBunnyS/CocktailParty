import React from 'react';
import CocktailCard from './CocktailCard'

const CocktailGallery = ({cocktailData}) => {
    //console.log(cocktailData)
    return (
        <div>
        <CocktailCard {...cocktailData.drinks[0]} />    
        </div>
    );
};

export default CocktailGallery;