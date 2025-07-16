import StarRating from 'react-star-ratings';

interface RatingStaticProps {
    rating: number;
}

const RatingStatic = ({ rating }: RatingStaticProps) => {
    return (
        <>
            <StarRating
                rating={rating}
                key={'readonly'}
                starEmptyColor="rgb(210, 210, 210)"
                starHoverColor="rgb(165, 165, 165)"
                starRatedColor="rgb(165, 165, 165)"
                svgIconPath="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21z"
                svgIconViewBox="1 1 22 22"
                numberOfStars={5}
                name="diet-rating"
                starDimension="20px"
                starSpacing="0px"
            />
            <meta itemProp="ratingValue" content={`${rating}`} />
            <meta itemProp="bestRating" content="5" />
            <meta itemProp="worstRating" content="1" />
        </>
    );
};

export default RatingStatic;
