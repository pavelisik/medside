import { useState, useEffect } from 'react';
import StarRatings from 'react-star-ratings';
import axios from 'axios';

interface RatingProps {
    postId: number;
    initialRatingSum: number;
    initialVoteCount: number;
}

const Raiting = ({ postId, initialRatingSum, initialVoteCount }: RatingProps) => {
    const [rating, setRating] = useState(0);
    const [voted, setVoted] = useState(false);
    const [ratingSum, setRatingSum] = useState(initialRatingSum);
    const [voteCount, setVoteCount] = useState(initialVoteCount);

    const average = voteCount === 0 ? 0 : ratingSum / voteCount;

    useEffect(() => {
        const votedBefore = localStorage.getItem(`voted_post_${postId}`);
        if (votedBefore) {
            setVoted(true);
        }
    }, [postId]);

    const handleChangeRating = async (newRating: number) => {
        if (voted) return;

        try {
            const response = await axios.post('https://yourdomain.com/wp-json/custom/v1/rate/', {
                post_id: postId,
                rating: newRating,
            });

            if (response.data.success) {
                setRatingSum((prev) => prev + newRating);
                setVoteCount((prev) => prev + 1);
                setVoted(true);
                localStorage.setItem(`voted_post_${postId}`, 'true');
            }
        } catch (error) {
            console.error('Ошибка при голосовании:', error);
        }

        setRating(newRating);
    };

    return (
        <div>
            <StarRatings
                // rating={voted ? average : rating}
                // svgIconPath="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21z"
                // svgIconViewBox="0 0 24 24"
                rating={average}
                starEmptyColor="rgb(210, 210, 210)"
                starHoverColor="rgb(165, 165, 165)"
                starRatedColor="rgb(165, 165, 165)"
                changeRating={handleChangeRating}
                numberOfStars={5}
                name="post-rating"
                starDimension="20px"
                starSpacing="0px"
            />
            {/* <div style={{ marginTop: '8px' }}>
                {voted ? `Спасибо за голос! Текущий рейтинг: ${average.toFixed(2)} из 5 (${voteCount} голосов)` : `Оцените этот пост`}
            </div> */}
        </div>
    );
};

export default Raiting;
