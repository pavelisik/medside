import { Link } from 'react-router';
import useCategories from '../../hooks/useCategories';
import styles from './BlockPosts.module.css';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const BlockTabs = () => {
    const { categories, loading, error } = useCategories({ parent: 38, per_page: 28 });

    return (
        <div className="block-tabs">
            <h2>
                <Link to="/meditsinskiy-slovar">Словарь терминов</Link>
            </h2>

            {loading ? (
                <div className={styles.loadingTabs}>
                    <Skeleton height={'100%'} />
                </div>
            ) : error ? (
                <p className="error">{error}</p>
            ) : (
                <ul>
                    {categories.map((category) => (
                        <li key={category.id}>
                            {category.count ? <Link to={`/${category.slug}`}>{category.name}</Link> : category.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default BlockTabs;
