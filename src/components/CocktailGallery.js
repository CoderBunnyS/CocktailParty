import React from 'react';
import CocktailCard from './CocktailCard'

const CocktailGallery = ({cocktailData}) => {
    //console.log(cocktailData)
    return (
        <div>
        <CocktailCard {...cocktailData.drinks[0]} />   
        <p>Can we get any words to show up?</p> 
        </div>
    );
};

export default CocktailGallery;