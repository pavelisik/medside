import clsx from 'clsx';
import { Link } from 'react-router';
import type { WPCategoryData } from '../../types/wpTypes';

const CatList = ({ data }: { data: WPCategoryData }) => {
    const { cats_array, id, slug } = data.data;
    return (
        <ul className={clsx('cat-list-main', id === 38 ? 'columns05' : 'columns02')}>
            {cats_array?.map(({ cat_ID, cat_slug, cat_title, cat_is_child }) => (
                <li className={clsx(cat_is_child && 'child')} key={cat_ID}>
                    <Link to={`/${slug}/${cat_slug}`} className="icon-text">
                        {cat_title}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default CatList;
