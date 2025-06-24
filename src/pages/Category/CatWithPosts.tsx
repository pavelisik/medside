import clsx from 'clsx';
import { Link } from 'react-router';
import Pagination from '../../components/Pagination';
import type { WPCategoryData } from '../../types/wpTypes';

const CatWithPosts = ({ data }: { data: WPCategoryData }) => {
    const { parent, posts_array, page, pages } = data.data;
    const isEmpty = parent === 38;
    return (
        <>
            {posts_array?.map(({ post_ID, post_image, post_title, post_slug, post_excerpt, post_date }) => (
                <div className={clsx('cat-list-one', 'post', isEmpty && 'empty')} key={post_ID}>
                    {parent !== 38 && (
                        <div className="cat-list-img">
                            <img src={post_image} alt={post_title} loading="lazy" />
                        </div>
                    )}
                    <div className="cat-list-right">
                        <span className="date">{post_date}</span>
                        <h2>
                            <Link to={`/${post_slug}`}>{post_title}</Link>
                        </h2>
                        <p>{post_excerpt}</p>
                    </div>
                </div>
            ))}
            <Pagination page={page} pages={pages} />
        </>
    );
};

export default CatWithPosts;
