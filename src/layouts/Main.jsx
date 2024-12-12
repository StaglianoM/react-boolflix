import { useState } from "react";
import Header from "./Header";
import '../styles/Main.css';

const App = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    // Lista Bandiere 
    const flags = {
        it: "https://flagcdn.com/it.svg",
        en: "https://flagcdn.com/us.svg",
        gb: "https://flagcdn.com/gb.svg",
        ja: "https://flagcdn.com/jp.svg",
    };

    // Funzione per caricare i risultati dall'API
    const fetchResults = (searchQuery) => {
        fetch(
            `https://api.themoviedb.org/3/search/tv?api_key=183e3914f50853ef35d6745d156ab32d&language=it_IT&query=${searchQuery}`
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
        fetchResults(query); // Carico i risultati
    };

    // Funzione per ottenere la bandiera in base alla lingua ed Restituisce la bandiera o nulla se la lingua non è stata trovata 
    const getFlag = (language) => {
        return flags[language] || null;
    };


    const handleReset = () => {
        setQuery("");
        setResults([]);
    };

    return (
        <div>
            <Header query={query} setQuery={setQuery} handleSearch={handleSearch} />

            <div className="container-list">
                {results.length > 0 ? (
                    <div className="found-list">
                        {results.map((item) => (
                            <div key={item.id}>
                                <h2>Nome: {item.name || "N/A"}</h2>
                                <p>Nome originale: {item.original_name || "N/A"}</p>

                                <p>Lingua originale:
                                    {getFlag(item.original_language)
                                        ? (
                                            <img
                                                src={getFlag(item.original_language)}
                                                alt={`Flag of ${item.original_language}`}
                                                width="20"
                                            />
                                        ) : (
                                            <span>Lingua non disponibile</span>
                                        )}</p>

                                <p>Media voti: {item.vote_average || "N/A"}</p>
                                {item.poster_path ? (
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                                        alt={` ${item.name}`}
                                        width="215"
                                    />
                                ) : (
                                    <p>No poster available</p>
                                )}
                            </div>
                        ))}
                        {results.length > 0 && (
                            <button onClick={handleReset} className="reset-buttn">
                                Back
                            </button>
                        )}
                    </div>
                ) : (
                    <p className="welcome">Benvenuto su BoolFlix, prego cercare il vostro Film/Serie tramite la barra di ricerca</p>
                )}
            </div>
        </div>
    );
};

export default App;
