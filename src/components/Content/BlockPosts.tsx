import { useState, useEffect, ReactNode } from 'react';
import { Link } from 'react-router';
import type { WP_REST_API_Post as WPPost } from 'wp-types';
import { getPosts } from '../../api/requests';

interface WPPostImg extends WPPost {
    featured_image: string;
}

interface BlockPostsProps {
    params: Record<string, any>;
    position: 'left' | 'right';
    children?: ReactNode;
}

const Post = ({ post }: { post: WPPostImg }) => (
    <div className="one-post" key={post.id}>
        <Link to={`/${post.slug}`}>
            {post.featured_image && <img src={post.featured_image} alt={post.title?.rendered} loading="lazy" />}
            <h3>{post.title.rendered}</h3>
        </Link>
    </div>
);

const BlockPosts = ({ params, position, children = null }: BlockPostsProps) => {
    const [posts, setPosts] = useState<WPPostImg[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);
        setError(null);
        getPosts<WPPostImg>('/posts', params)
            .then((data) => {
                if (data) setPosts(data);
            })
            .catch(() => setError('Не удалось загрузить.'))
            .finally(() => setLoading(false));
    }, [JSON.stringify(params)]);

    return (
        <div className={`index-block block-4 ${position}`}>
            <h2>{children}</h2>
            {loading ? (
                <p className="loading">Загрузка...</p>
            ) : error ? (
                <p className="error">{error}</p>
            ) : (
                posts.map((post) => <Post key={post.id} post={post} />)
            )}
        </div>
    );
};

export default BlockPosts;
