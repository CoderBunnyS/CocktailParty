import React, {useState} from 'react';
import CocktailCard from './CocktailCard'

const CocktailGallery = ({cocktailData, Name, recentGallery }) => {
    console.log(cocktailData.drinks[0])
    const [previousCocktails, setPreviousCocktails] = useState([])
    const [currentCocktail, setCurrentCocktail] = useState([])
    
    return (
        <div>
        <h1>{Name}</h1>
        <CocktailCard {...cocktailData.drinks[0]} />   
         
        </div>
    );
};

export default CocktailGallery;