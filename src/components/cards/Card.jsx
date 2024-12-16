import { getFlag } from "../../utils/flag";
import Stars from "../cards/star";
import styles from "./card.module.css";

const Card = (item) => {
    return (
        <div className={styles['card-container']}>
            <div className={styles['card-image-container']}>
                {item.poster_path ? (
                    <img
                        className={styles['card-image']}
                        src={`https://image.tmdb.org/t/p/w342${item.poster_path}`}
                        alt={`${item.name || item.title}`}
                    />
                ) : (
                    <img
                        className={styles['card-image']}
                        src="/card600.jpg"
                        alt="No poster available"
                    />
                )}

                {!item.poster_path && (
                    <p className={styles['no-image']}>No poster available</p>
                )}

                <div className={styles['card-info']}>
                    <h2>{item.title ? "Film:" : "Serie TV:"}</h2>
                    <h3>{item.title || item.name || "N/A"}</h3>
                    <p>Original Title: {item.original_title || item.original_name || "N/A"}</p>
                    <p>Language:
                        {getFlag(item.original_language) ? (
                            <img
                                src={getFlag(item.original_language)}
                                alt={`Flag of ${item.original_language}`}
                                width="25"
                            />
                        ) : (
                            <span> Not available</span>
                        )}
                    </p>
                    <p>Average Vote: <Stars vote={item.vote_average || 0} /></p>
                    <p>Overview: {item.overview || "No overview available."}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
