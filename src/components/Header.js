import { useState } from "react";

const Header = ({ fetchCocktailData }) => {
  const [searchedValue, setSearchedValue] = useState("");
  //const [selectedTypeValue, setSelectedTypeValue] = useState('')

  const handleInput = (e) => {
    e.preventDefault();
    setSearchedValue(e.target.value);
  };

  // const handleSelectChange = (e) => {

  //     e.preventDefault()
  //     setSelectedTypeValue(e.target.value)
  // }

  const handleClick = (e) => {
    e.preventDefault();
    //fetchCocktailData(searchedValue, selectedTypeValue)
    fetchCocktailData(searchedValue);
    console.log(fetchCocktailData);
    document.getElementById("input").value = "";
  };
  return (
    <div className="container-header">
      <h1 id="rainbow" className="what-name">
        Cocktail Disco!
      </h1>

      <div class="searchBox">
        <input
          class="searchInput"
          id = 'input'
          type="text"
          name=""
          placeholder="Search"
          onChange={handleInput}
        ></input>
        <button class="searchButton" onClick={handleClick}>
          <i class="material-icons">Search</i>
        </button>
      </div>
    </div>

  );
};

export default Header;
