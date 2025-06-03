import type { ReactNode } from 'react';
import Post from './Post';
import usePosts from '../../hooks/usePosts';
import Skelet from '../../components/ui/Skelet';

interface BlockPostsProps {
    params: Record<string, any>;
    titleLinesCount?: number;
    blockStyle?: string;
    children?: ReactNode;
}

const BlockPosts = ({ params, titleLinesCount = 3, blockStyle = '', children = null }: BlockPostsProps) => {
    const { posts, loading, error } = usePosts(params);

    return (
        <div className={blockStyle}>
            {children && <h2>{children}</h2>}
            {loading ? (
                <Skelet skeletClass="posts" titleLinesCount={titleLinesCount} />
            ) : error ? (
                <p className="error">{error}</p>
            ) : (
                posts.map((post) => <Post key={post.id} post={post} displayType="gallery" />)
            )}
        </div>
    );
};

export default BlockPosts;
