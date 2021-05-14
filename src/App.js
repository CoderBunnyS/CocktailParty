import { useEffect, useState } from 'react';
import CocktailGallery from "./components/CocktailGallery";
import '../src/'
//testing testing

function App() {
  const [cocktailData, setCocktailData] = useState([])
  const fetchCocktailData = (searchParam) => {
    let URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'

    fetch(URL)
    .then(res => res.json())
    .then(jsonData => setCocktailData(jsonData))
  }
  useEffect(()=> {
    fetchCocktailData()
  }, [])
  return (
    <div className="App">
      <CocktailGallery cocktailData = {cocktailData}/>
      <p>Something should be showing up</p>
    </div>
  );
}

export default App;
