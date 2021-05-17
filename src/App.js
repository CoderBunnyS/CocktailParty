import { useEffect, useState } from 'react';
import CocktailGallery from "./components/CocktailGallery";
import Header from "./components/Header"
import '../src/'



function App() {
  const [cocktailData, setCocktailData] = useState([])
  const fetchCocktailData = (searchedValue, selectedTypeValue) => {
    console.log(`selectedTypeValue: ${selectedTypeValue}`)
    console.log(`searchedValue: ${searchedValue}`)

    let URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=martini'
    console.log('fired')
    
    fetch(URL)
    .then(res => res.json())
    .then(jsonData => setCocktailData(jsonData))
  }
  useEffect(()=> {
    fetchCocktailData()
  }, [])
  return (
    <div className="App">
      <Header />
      <CocktailGallery cocktailData = {cocktailData}/>
      
    </div>
  );
}

export default App;
