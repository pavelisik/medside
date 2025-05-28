import { Link } from 'react-router';
import Post from './Post';
import usePosts from '../../hooks/usePosts';
import Skelet from '../Skelet';

const BlockNews = () => {
    const { posts, loading, error } = usePosts({ categories: 36, per_page: 7 });

    return (
        <div className="index-block block-3-4">
            <h2>
                <Link to="/novosti-meditsinyi">Новости медицины</Link>
            </h2>

            {loading ? (
                <Skelet skeletClass="news" />
            ) : error ? (
                <p className="error">{error}</p>
            ) : (
                <>
                    {posts.slice(0, 3).map((post) => (
                        <Post key={post.id} post={post} displayType="gallery" />
                    ))}

                    <ul className="list-post">
                        {posts.slice(3, 7).map((post) => (
                            <Post key={post.id} post={post} displayType="list-item" />
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
};

export default BlockNews;
