import { useEffect, useState } from 'react';
import CocktailGallery from "./components/CocktailGallery";
import Header from "./components/Header"
import './style/styles.css'
import '../src/'



function App() {
  const [cocktailData, setCocktailData] = useState([])
  
  const fetchCocktailData = (searchedValue, selectedTypeValue = null
  ) => {

    console.log(`selectedTypeValue: ${selectedTypeValue}`)
    console.log(`searchedValue: ${searchedValue}`)

    let URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchedValue}`
  

    fetch(URL)
    .then(res => res.json())
    .then(jsonData => setCocktailData(jsonData))
  }
  useEffect(()=> {
    fetchCocktailData(' martini ')
  }, [])
  return (
    <div className="App">
      <Header fetchCocktailData={fetchCocktailData} />
      <CocktailGallery name={'Current Search' } cocktailData={cocktailData} recentGallery = {false} />
      <CocktailGallery name = {'Previous 3 Searches'} cocktailData={cocktailData} recentGallery={true} />
      
    </div>
  );
}

export default App;
