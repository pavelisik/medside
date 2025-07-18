import type { WPSimplePost } from '../types/wpTypes';

interface SimilarBottomBlockProps {
    posts: WPSimplePost[];
}

const SimilarBottomBlock = ({ posts }: SimilarBottomBlockProps) => {
    return (
        <div className="similar-bottom-block">
            {posts.map(({ post_ID, post_slug, post_image, post_title }) => (
                <div className="single-block" key={post_ID}>
                    <a href={`/${post_slug}`} target="_blank" rel="noopener noreferrer">
                        <img src={post_image} alt={post_title} loading="lazy" />
                        <h3>{post_title}</h3>
                    </a>
                </div>
            ))}
        </div>
    );
};

export default SimilarBottomBlock;
