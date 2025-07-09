import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import StarRatings from 'react-star-ratings';
import axios from 'axios';

interface RatingProps {
    postId: number;
    initialRatingSum: number;
    initialVoteCount: number;
}

const Rating = ({ postId, initialRatingSum, initialVoteCount }: RatingProps) => {
    // проверка на голосование
    const [voted, setVoted] = useState(false);
    // общая сумма голосов у поста
    const [ratingSum, setRatingSum] = useState(initialRatingSum);
    // общее число голосов у поста
    const [voteCount, setVoteCount] = useState(initialVoteCount);
    // отображение всплывающего окна
    const [tooltipVisible, setTooltipVisible] = useState(false);
    // текст всплывающего окна
    const [tooltipText, setTooltipText] = useState('');
    // отображение нового рейтинга
    const [showNewRating, setShowNewRating] = useState(false);

    const averageRating = voteCount ? ratingSum / voteCount : 0;
    const cookieName = `voted_post_${postId}`;

    useEffect(() => {
        setVoted(Boolean(Cookies.get(cookieName)));
    }, [postId]);

    const showTooltip = (text: string) => {
        setTooltipText(text);
        setTooltipVisible(true);
        setTimeout(() => setTooltipVisible(false), 3000);
    };

    const markAsVoted = () => {
        setVoted(true);
        Cookies.set(cookieName, 'true', { expires: 365 });
    };

    const handleChangeRating = async (newRating: number) => {
        if (voted) return;

        try {
            const url = new URL('https://medside.ru/wp-json/custom/v1/rate');
            url.searchParams.set('cache_bust', Date.now().toString());
            const response = await axios.post(url.toString(), {
                post_id: postId,
                rating: newRating,
            });

            const data = response.data;

            if (!data.success) {
                showTooltip(data.message || 'Ошибка');
                markAsVoted();
                return;
            }

            // успешный голос
            setRatingSum((prev) => prev + newRating);
            setVoteCount((prev) => prev + 1);
            markAsVoted();
            showTooltip('Ваш голос учтен');
        } catch (error) {
            console.error('Ошибка при голосовании:', error);
            showTooltip('Ошибка при отправке');
        }
    };

    return (
        <div className="wp-stars-outer">
            <div
                className="wp-stars-wrapper"
                itemProp="aggregateRating"
                itemScope
                itemType="https://schema.org/AggregateRating"
                data-post-id={postId}
                {...(tooltipVisible ? { 'data-tooltip': tooltipText } : {})}
                onMouseLeave={() => {
                    if (voted) setShowNewRating(true);
                }}
            >
                <StarRatings
                    rating={averageRating}
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
                <meta itemProp="ratingValue" content={`${averageRating}`} />
                <meta itemProp="bestRating" content="5" />
                <meta itemProp="worstRating" content="1" />
            </div>
        </div>
    );
};

export default Rating;
