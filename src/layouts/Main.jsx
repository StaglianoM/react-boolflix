import { useState } from "react";
import Header from "./Header";
import '../styles/Main.css'

const App = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    // Funzione chiamo l'api tramite il search (form) e chiamo l'api con il fetch
    const fetchResults = (searchQuery) => {
        fetch(
            `https://api.themoviedb.org/3/search/tv?api_key=183e3914f50853ef35d6745d156ab32d&language=it_IT&query=${searchQuery}`
        )
            //L'api risponde e verifica se la richiesta ha avuto successo e se non è valida rispondo con l errore e converto la risposta in json
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Errore nella chiamata API");
                }
                return response.json();
            })
            //elaboro i dati (già convertiti in json) e con slice prendo solo il primo elemento con indice 0 
            .then((data) => {
                setResults(data.results.slice(0, 1)); // Mostro solo il PRIMO risultato (indice 0)
            })
            .catch((error) => {
                console.error("Errore:", error);
            });
    };

    // Funzione per gestire la ricerca
    const handleSearch = (e) => {
        e.preventDefault();  //evita il refresh della pagina post click search
        fetchResults(query); // Carico i risultati della funzione result
    };


    //Risultati dell'api e se ci sono risultati pubblica la lista chiamata, oppure lascia il messaggio principale 
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
                                <p>Lingua originale: {item.original_language || "N/A"}</p>
                                <p>Media voti: {item.vote_average || "N/A"}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="welcome">Nessuna ricerca è stata inizializzata o trovata</p>
                )}
            </div>
        </div>
    );
};

export default App;
