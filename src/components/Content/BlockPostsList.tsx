import { ReactNode } from 'react';
import Post from './Post';
import usePosts from '../../hooks/usePosts';
import Skelet from '../Skelet';

interface BlockPostsProps {
    params: Record<string, any>;
    itemsCount?: number;
    blockStyle?: string;
    children?: ReactNode;
}

const BlockPostsList = ({ params, itemsCount = 15, blockStyle = '', children = null }: BlockPostsProps) => {
    const { posts, loading, error } = usePosts(params);

    return (
        <div className={blockStyle}>
            {children && <h2>{children}</h2>}
            {loading ? (
                <Skelet skeletClass="postsList" itemsCount={itemsCount} />
            ) : error ? (
                <p className="error">{error}</p>
            ) : (
                <ul>
                    {posts.map((post) => (
                        <Post key={post.id} post={post} displayType="list-item" />
                    ))}
                </ul>
            )}
        </div>
    );
};

export default BlockPostsList;
