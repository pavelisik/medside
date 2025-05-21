import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import type { WP_REST_API_Post as WPPost } from 'wp-types';
import { getPosts } from '../../api/requests';

interface WPPostImg extends WPPost {
    featured_image: string;
}

const Content = () => {
    const [posts, setPosts] = useState<WPPostImg[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);
        getPosts<WPPostImg>('/posts', {
            _fields: 'id,title,slug,featured_image',
            categories: 36,
            per_page: 7,
        })
            .then((posts) => {
                if (posts) setPosts(posts);
            })
            .catch(() => {
                setError('Не удалось загрузить.');
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <section id="content" className="nosb">
            <div id="center">
                <div className="index-block block-3-4">
                    <h2>
                        <Link to="/novosti-meditsinyi">Новости медицины</Link>
                    </h2>

                    {loading || error ? (
                        <>
                            {loading && <p className="loading">Загрузка...</p>}
                            {error && <p className="error">{error}</p>}
                        </>
                    ) : (
                        <>
                            {posts.slice(0, 3).map((item) => (
                                <div className="one-post" key={item.id}>
                                    <Link to={`/${item.slug}`}>
                                        {item.featured_image && (
                                            <img
                                                src={item.featured_image}
                                                alt={item.title.rendered}
                                                loading="lazy"
                                            />
                                        )}
                                        <h3>{item.title.rendered}</h3>
                                    </Link>
                                </div>
                            ))}

                            <ul className="list-post">
                                {posts.slice(3, 7).map((item) => (
                                    <li key={item.id}>
                                        <Link to={`/${item.slug}`}>
                                            {item.title.rendered}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}
                </div>
            </div>

            <div className="clear"></div>
        </section>
    );
};

export default Content;
