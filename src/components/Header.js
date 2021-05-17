import { useState } from 'react';

const Header = ({fetchCocktailData}) => {
    const [searchedValue, setSearchedValue] = useState('')
    const [selectedTypeValue, setSelectedTypeValue] = useState('')

    const handleInput = (e) => {
        e.preventDefault()
        setSearchedValue(e.target.value)
    }

    const handleSelectChange = (e) => {
        e.preventDefault()
        setSelectedTypeValue(e.target.value)
    }

    const handleClick = (e) => {
        e.preventDefault()
        fetchCocktailData(searchedValue, selectedTypeValue)
        // console.log(fetchCocktailData)
        
    }
    return (
        <div className='container-header'>
            <h1 className='what-name'>What to Drink</h1>
            <div>
                <input
                    type='text'
                    placeholder='Drink Name'
                    onChange={handleInput}
                />
                <select
                    id="selection"
                    name="selection"
                    placeholder='Type'
                    onChange={handleSelectChange}
                >
                    <option value="" hidden >Type of Drink</option>
                    <option value="Cocktail">Alcoholic</option>
                    <option value="Ordinary_Drink">Non-Alcoholic</option>
                    {/* <option value="episode">Episode</option> */}
                </select>
                <button onClick={handleClick}>Search</button>
            </div>
        </div>
    );
};

export default Header