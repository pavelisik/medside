import type { WPSimplePost } from '../../types/wpTypes';

interface SidebarSimilarBlockProps {
    title: string;
    posts: WPSimplePost[];
}

const SidebarPostsBlock = ({ title, posts }: SidebarSimilarBlockProps) => {
    return (
        <div className="sidebar-block similar-block">
            <h2>{title}</h2>
            <div className="sidebar-block-body">
                {posts.map(({ post_ID, post_slug, post_image, post_title }) => (
                    <div className="sidebar-block-single" key={post_ID}>
                        <a href={`/${post_slug}`} target="_blank" rel="noopener noreferrer">
                            <img src={post_image} alt={post_title} loading="lazy" />
                            <h3>{post_title}</h3>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SidebarPostsBlock;
