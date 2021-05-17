import { useState } from 'react';

const Header = () => {
    const [searchedValue, setSearchedValue] = useState('')
    const [selectedTypeValue, setSelectedTypeValue] = useState('')

    const handleInput = (e) => {
        e.preventDefault()
        setSearchedValue(e.target.value)
    }

    const handleSelectChange = (e) => {
        e. preventDefault()
        setSelectedTypeValue(e.target.value)
    }

    const handleClick = (e) => {
        e.preventDefault()
        fetchCocktailData(searchedValue, selectedTypeValue)
    }
    return (
        <div>
            <h1>What to Drink</h1>
            <div>
                <input
                    type='text'
                    placeholder='Drink Name'
                />
                <select
                    id="selection"
                    name="selection"
                    placeholder='Type'
                >
                    <option value="" hidden >Type of Drink</option>
                    <option value="strAlcoholic">Alcoholic</option>
                    <option value="strAlcoholic">Non-Alcoholic</option>
                    {/* <option value="episode">Episode</option> */}
                </select>
                <button>Search</button>
            </div>
        </div>
    );
};

export default Header