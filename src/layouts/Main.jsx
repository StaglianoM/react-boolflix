import { useState } from "react";
import Header from "./Header";
import '../styles/Main.css';
import Card from "../components/cards/Card";

const App = () => {
    const [query, setQuery] = useState("");
    const [movieResults, setMovieResults] = useState([]); // film
    const [tvResults, setTvResults] = useState([]);       // serie TV
    const [searched, setSearched] = useState(false);

    // Funzione per caricare i risultati dall'API
    const fetchResults = (searchQuery) => {
        const apiKey = "183e3914f50853ef35d6745d156ab32d";
        const language = "it_IT";

        const movieURL = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=${language}&query=${searchQuery}`;
        const tvURL = `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&language=${language}&query=${searchQuery}`;

        // API per i film
        fetch(movieURL)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Errore nella chiamata API per i film");
                }
                return response.json();
            })
            .then((data) => {
                setMovieResults(data.results.slice(0, 5)); // Salvo i primi 5 risultati dei film
            })
            .catch((error) => {
                console.error("Errore nei film:", error);
                setMovieResults([]);
            });

        // API per le serie TV
        fetch(tvURL)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Errore nella chiamata API per le serie TV");
                }
                return response.json();
            })
            .then((data) => {
                setTvResults(data.results.slice(0, 5)); // Salvo i primi 5 risultati delle serie TV
            })
            .catch((error) => {
                console.error("Errore nelle serie TV:", error);
                setTvResults([]);
            });
    };

    // Funzione per gestire la ricerca
    const handleSearch = (e) => {
        e.preventDefault();
        setSearched(true);  // Imposto che è stata effettuata una ricerca
        fetchResults(query); // Carico i risultati
    };

    const handleReset = () => {
        setQuery("");
        setMovieResults([]);
        setTvResults([]);
        setSearched(false);  // Resetta lo stato della ricerca
    };

    return (
        <div>
            <Header
                query={query}
                setQuery={setQuery}
                handleSearch={handleSearch}
                handleReset={handleReset}
            />
            <div>
                {searched && (
                    <>
                        {/* Sezione Film */}
                        {movieResults.length > 0 && (
                            <div>
                                <h2>FILM:</h2>
                                <div className="container-cards">
                                    {movieResults.map((item) => (
                                        <Card {...item} key={item.id} />
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Sezione Serie TV */}
                        {tvResults.length > 0 && (
                            <div>
                                <h2>SERIE TV:</h2>
                                <div className="container-cards">
                                    {tvResults.map((item) => (
                                        <Card {...item} key={item.id} />
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Nessun risultato trovato */}
                        {movieResults.length === 0 && tvResults.length === 0 && (
                            <p className="check">
                                Nessun risultato trovato. Prego cercare un altro Film/Serie.
                            </p>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default App;
