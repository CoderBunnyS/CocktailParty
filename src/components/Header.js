import { useState } from 'react';

const Header = ({fetchCocktailData}) => {
    const [searchedValue, setSearchedValue] = useState('')
    const [selectedTypeValue, setSelectedTypeValue] = useState('')

    const handleInput = (e) => {
        e.preventDefault()
        setSearchedValue(e.target.value)
    }

    // const handleSelectChange = (e) => {
    //     e.preventDefault()
    //     setSelectedTypeValue(e.target.value)
    // }

    const handleClick = (e) => {
        e.preventDefault()
        fetchCocktailData(searchedValue, selectedTypeValue)
        // console.log(fetchCocktailData)
        
    }
    return (
        <div className='container-header'>
            <h1 className='what-name'>Cocktail Dictionary</h1>
            <div>
                <input
                    type='text'
                    placeholder='Drink Name'
                    onChange={handleInput}
                />
                
                <button onClick={handleClick}>Search</button>
            </div>
        </div>
    );
};

export default Header