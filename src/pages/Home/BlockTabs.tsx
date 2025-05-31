import { Link } from 'react-router';
import useCategories from '../../hooks/useCategories';
import Skelet from '../../components/ui/Skelet';

const BlockTabs = () => {
    const { categories, loading, error } = useCategories({ parent: 38, per_page: 28 });

    return (
        <div className="block-tabs">
            <h2>
                <Link to="/meditsinskiy-slovar">Словарь терминов</Link>
            </h2>

            {loading ? (
                <Skelet skeletClass="tabs" />
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
