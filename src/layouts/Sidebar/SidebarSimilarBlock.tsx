import { Link } from 'react-router';

interface SidebarSimilarBlockProps {
    title: string;
    posts: {
        post_ID: number;
        post_slug: string;
        post_title: string;
        post_image: string;
    }[];
}

const SidebarSimilarBlock = ({ title, posts }: SidebarSimilarBlockProps) => {
    return (
        <div className="sidebar-block similar-block">
            <h2>{title}</h2>
            <div className="sidebar-block-body">
                {posts.map((post) => (
                    <div className="sidebar-block-single" key={post.post_ID}>
                        <Link to={`/${post.post_slug}`}>
                            <img src={post.post_image} alt={post.post_title} />
                            <h3>{post.post_title}</h3>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SidebarSimilarBlock;
