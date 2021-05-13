const Header = () => {

    return (
        <div>
            <h1>What to watch</h1>
            <div>
                <input
                    type='text'
                    placeholder='Title'
                />
                <select
                    id="selection"
                    name="selection"
                    placeholder='Type'
                >
                    <option value="" hidden >Type</option>
                    <option value="movie">Movies</option>
                    <option value="series">Series</option>
                    <option value="episode">Episode</option>
                </select>
                <button>Search</button>
            </div>
        </div>
    );
};

export default Header