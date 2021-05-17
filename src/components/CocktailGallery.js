import React, { useEffect, useState } from 'react';
import CocktailCard from './CocktailCard'

const CocktailGallery = ({cocktailData, Name, recentGallery }) => {
    // console.log(cocktailData.drinks[0])
    const [previousCocktails, setPreviousCocktails] = useState([])
    const [currentCocktail, setCurrentCocktail] = useState([])
    
    useEffect(() => {
        setCurrentCocktail(cocktailData)
        setPreviousCocktails(previousCocktails.concat(cocktailData))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cocktailData]);
    
    const listOfCocktailCards = previousCocktails.map((cocktail, i) => {
        
    return <CocktailCard {...cocktail} key={i} />

    })
    const singleCocktailCard = <CocktailCard {...currentCocktail} />

    let renderCocktail = () => (recentGallery === true) ? listOfCocktailCards : singleCocktailCard

    if (previousCocktails.length > 3) {
        previousCocktails.splice(0, 1)
        setPreviousCocktails(previousCocktails)
    }
    return (
        <div>
        <h1 className="name">{Name}</h1>
        <div className='cocktail-gallery-container'>
                {renderCocktail()}
            </div>
        {/* <CocktailCard {...cocktailData.drinks[0]} />    */}
         
        </div>
    );
};

export default CocktailGallery;