import { useEffect, useState } from 'react';
import CocktailGallery from "./components/CocktailGallery";
import Header from "./components/Header"
import './style/styles.css'
import './App.css'
<style>
@import url('https://fonts.googleapis.com/css2?family=Goblin+One&display=swap');
</style>




function App() {
  const [cocktailData, setCocktailData] = useState([])
  
  const fetchCocktailData = (searchedValue, selectedTypeValue = null
  ) => {

    console.log(`selectedTypeValue: ${selectedTypeValue}`)
    console.log(`searchedValue: ${searchedValue}`)
    // console.log(searchedValue)

    let URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchedValue}`
    
  

    fetch(URL)
    .then(res => res.json())
    // .then(console.log(res.json))
    .then(jsonData => setCocktailData(jsonData.drinks[0]))
    console.log(cocktailData)
  }
  useEffect(()=> {
    fetchCocktailData('martini')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className="App">
      <Header fetchCocktailData={fetchCocktailData} />
      <CocktailGallery name={'Current Search' } cocktailData={cocktailData} recentGallery = {false} />                                                              ^
      
      <CocktailGallery name = {'Previous 3 Searches'} cocktailData={cocktailData} recentGallery={true} />
    </div>
  );
}

export default App;
