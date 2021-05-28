import { useState } from 'react';

const Header = ({fetchCocktailData}) => {
    const [searchedValue, setSearchedValue] = useState('')
    //const [selectedTypeValue, setSelectedTypeValue] = useState('')

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
        //fetchCocktailData(searchedValue, selectedTypeValue)
        fetchCocktailData(searchedValue)
        console.log(fetchCocktailData)
        document.getElementById('input').value='';
        
    }
    return (
        <div className='container-header'>
            <h1 id="rainbow" className='what-name'>Cocktail Party!</h1>
            <div>
            
                {/* <input
                    id = 'input'
                    type='text'
                    placeholder='Search for a drink by name'
                    onChange={handleInput}
                /> */}
                <div class="container">
  <input placeholder='Search...' class='js-search' type="text"></input>
  <i class="fa fa-search"></i>
</div>
                
                <button onClick={handleClick}>Search</button>
            </div>
        </div>
    );
};

export default Header