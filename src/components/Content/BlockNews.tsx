import { Link } from 'react-router';
import Post from './Post';
import usePosts from '../../hooks/usePosts';
import styles from './BlockPosts.module.css';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const BlockNews = () => {
    const { posts, loading, error } = usePosts({ categories: 36, per_page: 7 });

    return (
        <div className="index-block block-3-4">
            <h2>
                <Link to="/novosti-meditsinyi">Новости медицины</Link>
            </h2>

            {loading ? (
                <div className={styles.loadingNews}>
                    <Skeleton height={'100%'} />
                </div>
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
