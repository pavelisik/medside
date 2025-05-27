import { ReactNode } from 'react';
import Post from './Post';
import usePosts from '../../hooks/usePosts';
import styles from './BlockPosts.module.css';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface BlockPostsProps {
    params: Record<string, any>;
    blockStyle?: string;
    children?: ReactNode;
}

const BlockPosts = ({ params, blockStyle = '', children = null }: BlockPostsProps) => {
    const { posts, loading, error } = usePosts(params);

    return (
        <div className={blockStyle}>
            {children && <h2>{children}</h2>}
            {loading ? (
                <div className={styles.loading}>
                    <Skeleton height={'100%'} />
                </div>
            ) : error ? (
                <p className="error">{error}</p>
            ) : (
                posts.map((post) => <Post key={post.id} post={post} displayType="gallery" />)
            )}
        </div>
    );
};

export default BlockPosts;
