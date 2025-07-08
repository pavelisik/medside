declare module 'react-star-ratings' {
    import * as React from 'react';

    interface StarRatingsProps {
        rating: number;
        starRatedColor?: string;
        starEmptyColor?: string;
        starHoverColor?: string;
        numberOfStars?: number;
        name?: string;
        starDimension?: string;
        starSpacing?: string;
        changeRating?: (newRating: number, name?: string) => void;
        svgIconPath?: string;
        svgIconViewBox?: string;
    }

    const StarRatings: React.FC<StarRatingsProps>;

    export default StarRatings;
}
