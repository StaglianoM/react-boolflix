import '../styles/Header.css';

const Navbar = ({ query, setQuery, handleSearch, handleReset }) => {
    return (
        <nav className="nav">
            <a href="http://localhost:5173">
                <img src="/vite.svg" alt="Logo" className="logo" />
            </a>
            <h1 className='center-text'>Ricerca Serie TV e Film</h1>
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Cerca una serie TV o un film"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button className="search" type="submit">
                    Cerca
                </button>
                <button
                    className="reset"
                    type="button"
                    onClick={handleReset}
                >
                    Reset
                </button>
            </form>
        </nav>
    );
};

export default Navbar;
