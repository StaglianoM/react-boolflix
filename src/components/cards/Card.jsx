import { getFlag } from "../../utils/flag";

const Card = (item) => {

    // Calcolo  media voti
    const voteAverage = item.vote_average
        ? Math.ceil(item.vote_average / 2)
        : "N/A";

    return (
        <div>
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
                    )}
            </p>

            <p>Media voti: {voteAverage}</p>
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
    );
};

export default Card;
