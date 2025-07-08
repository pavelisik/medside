import { useState, useEffect } from 'react';
import StarRatings from 'react-star-ratings';
import axios from 'axios';

interface RatingProps {
    postId: number;
    initialRatingSum: number;
    initialVoteCount: number;
}

const RaitingComponent = ({ postId, initialRatingSum, initialVoteCount }: RatingProps) => {
    // проверка на голосование
    const [voted, setVoted] = useState(false);
    // общая сумма голосов у поста
    const [ratingSum, setRatingSum] = useState(initialRatingSum);
    // общее число голосов у поста
    const [voteCount, setVoteCount] = useState(initialVoteCount);
    // отображение всплывающего окна
    const [tooltipVisible, setTooltipVisible] = useState(false);
    // отображение нового рейтинга
    const [showNewRating, setShowNewRating] = useState(false);

    const rating = voteCount === 0 ? 0 : ratingSum / voteCount;

    useEffect(() => {
        const votedBefore = localStorage.getItem(`voted_post_${postId}`);
        if (votedBefore) {
            setVoted(true);
        }
    }, [postId]);

    const handleChangeRating = async (newRating: number) => {
        if (voted) return;

        try {
            const response = await axios.post(`https://medside.ru/wp-json/custom/v1/rate/?post_id=${postId}&rating=${newRating}`);

            if (response.data.success) {
                setRatingSum((prev) => prev + newRating);
                setVoteCount((prev) => prev + 1);
                setVoted(true);
                localStorage.setItem(`voted_post_${postId}`, 'true');

                // показать всплывающее сообщение на 3 секунды
                setTooltipVisible(true);
                setTimeout(() => setTooltipVisible(false), 3000);
            }
        } catch (error) {
            console.error('Ошибка при голосовании:', error);
        }
    };

    return (
        <div
            className="wp-stars-wrapper"
            itemProp="aggregateRating"
            itemScope
            itemType="https://schema.org/AggregateRating"
            data-post-id={postId}
            {...(tooltipVisible ? { 'data-tooltip': 'Ваш голос учтен' } : {})}
            onMouseLeave={() => {
                if (voted) setShowNewRating(true);
            }}
        >
            <StarRatings
                rating={rating}
                key={showNewRating && !tooltipVisible ? 'readonly' : 'interactive'}
                changeRating={!voted ? handleChangeRating : undefined}
                starEmptyColor="rgb(210, 210, 210)"
                starHoverColor="rgb(165, 165, 165)"
                starRatedColor="rgb(165, 165, 165)"
                svgIconPath="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21z"
                svgIconViewBox="1 1 22 22"
                numberOfStars={5}
                name="post-rating"
                starDimension="20px"
                starSpacing="0px"
            />
            <meta itemProp="reviewCount" content={`${voteCount}`} />
            <meta itemProp="ratingCount" content={`${voteCount}`} />
            <meta itemProp="ratingValue" content={`${rating}`} />
            <meta itemProp="bestRating" content="5"></meta>
        </div>
    );
};

export default RaitingComponent;
