import cocktailData from './data.json';
import CocktailGallery from "./components/CocktailGallery";


function App() {
  return (
    <div className="App">
      <CocktailGallery cocktailData = {cocktailData}/>
    </div>
  );
}

export default App;
