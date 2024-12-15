import { getFlag } from "../../utils/flag";
import Stars from "../cards/star";
import styles from "./card.module.css";

const Card = (item) => {
    return (
        <div className={styles['card-container']}>
            <div className={styles['card-text']}>
                <h2>Title:</h2>  {item.name || "N/A"}
                <p>Original Title:</p> {item.original_name || "N/A"}
                <p>Flag Language:  </p>
                {getFlag(item.original_language)
                    ? (
                        <img
                            src={getFlag(item.original_language)}
                            alt={`Flag of ${item.original_language}`}
                            width="25"
                        />
                    ) : (
                        <span>Lingua non disponibile</span>
                    )}

                <p>Average Vote:</p>
                <Stars vote={item.vote_average || 0} />
            </div>
            <div className="card-image">
                {item.poster_path ? (
                    <img
                        src={`https://image.tmdb.org/t/p/w342${item.poster_path}`}
                        alt={`${item.name}`}
                        width="215"
                    />
                ) : (
                    <img
                        src="/card600.jpg"
                        alt="No poster available"
                        width="220"

                    />

                )}
            </div>
        </div>
    );
};

export default Card;
