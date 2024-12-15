import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import styles from "./card.module.css";


const Stars = ({ vote }) => {
    const renderStars = (vote) => {
        const roundedVote = Math.ceil(vote / 2);
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <FontAwesomeIcon
                    key={i}
                    icon={i <= roundedVote ? solidStar : regularStar}
                    className={styles['star-icon']}

                />
            );
        }
        return stars;
    };

    return <div>{renderStars(vote)}</div>;
};

export default Stars;
