import { useState } from "react";
import Header from "./Header";
import '../styles/Main.css';
import Card from "../components/cards/Card";

const App = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [searched, setSearched] = useState(false);

    // Funzione per caricare i risultati dall'API
    const fetchResults = (searchQuery, isMovie) => {
        fetch(
            `https://api.themoviedb.org/3/search/${isMovie ? 'movie' : 'tv'}?api_key=183e3914f50853ef35d6745d156ab32d&language=it_IT&query=${searchQuery}`
        )
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Errore nella chiamata API");
                }
                return response.json();
            })
            .then((data) => {
                setResults(data.results.slice(0, 1)); // Mostro solo il PRIMO risultato
            })
            .catch((error) => {
                console.error("Errore:", error);
            });
    };

    // Funzione per gestire la ricerca e che si aggiorni la pagina all'invio
    const handleSearch = (e) => {
        e.preventDefault();
        setSearched(true);  // Imposto che è stata effettuata una ricerca
        fetchResults(query); // Carico i risultati
    };

    const handleReset = () => {
        setQuery("");
        setResults([]);
        setSearched(false);  // Resetta lo stato della ricerca
    };

    const movies = results.map((item) => <Card {...item} key={item.id} />);

    return (
        <div>
            <Header query={query} setQuery={setQuery} handleSearch={handleSearch} />

            <div>
                {results.length > 0 ? (
                    <div>
                        {movies}
                    </div>
                ) : (
                    searched && (
                        <p className="check">Nessun risultato trovato. Prego cercare un altro Film/Serie.</p>
                    )
                )}

                {searched && (
                    <button onClick={handleReset} className="reset-buttn">
                        Back
                    </button>)}
            </div>
        </div>
    );
};

export default App;
