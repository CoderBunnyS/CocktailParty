import React, { useEffect, useState } from 'react';
import CocktailCard from './CocktailCard'

const CocktailGallery = ({cocktailData, Name, recentGallery }) => {
    console.log(cocktailData.drinks[0])
    const [previousCocktails, setPreviousCocktails] = useState([])
    const [currentCocktail, setCurrentCocktail] = useState([])
    
    useEffect(() => {
        setCurrentCocktail(cocktailData)
        setPreviousCocktails(previousCocktails.concat(cocktailData))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cocktailData]);
    
    const listOfCocktailCards = previousCocktails.map((movie, i) => {
        return <CocktailCard {...cocktail} key={i} />
    })
    const singleCocktailCard = <CocktailCard {...currentCocktail} />
    return (
        <div>
        <h1>{Name}</h1>
        <CocktailCard {...cocktailData.drinks[0]} />   
         
        </div>
    );
};

export default CocktailGallery;