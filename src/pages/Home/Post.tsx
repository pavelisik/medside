import { Link } from 'react-router';
import type { WPPostImg } from '../../types/wpTypes';

interface PostProps {
    post: WPPostImg;
    displayType: 'gallery' | 'list-item';
}

const Post = ({ post, displayType }: PostProps) => {
    switch (displayType) {
        case 'gallery':
            return (
                <div className="one-post">
                    <Link to={`/${post.slug}`}>
                        {post.featured_image && (
                            <img src={post.featured_image} alt={post.title?.rendered} loading="lazy" />
                        )}
                        <h3>{post.title.rendered}</h3>
                    </Link>
                </div>
            );
        case 'list-item':
            return (
                <li>
                    <Link to={`/${post.slug}`}>{post.title.rendered}</Link>
                </li>
            );
        default:
            return null;
    }
};

export default Post;
