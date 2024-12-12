import '../styles/Header.css'

const Navbar = ({ query, setQuery, handleSearch }) => {
    return (
        <nav className="nav">
            <h1>Ricerca Serie TV</h1>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Cerca una serie TV"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button className="search" type="submit">
                    Cerca
                </button>
            </form>
        </nav>
    );
};

export default Navbar;
