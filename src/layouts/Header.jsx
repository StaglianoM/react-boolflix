import '../styles/Header.css'


const Navbar = ({ query, setQuery, handleSearch }) => {
    return (
        <nav className="nav">
            <a href="http://localhost:5173">
                <img src="/vite.svg" alt="Logo" className="logo" /></a>
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
