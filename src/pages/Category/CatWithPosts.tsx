import clsx from 'clsx';
import { Link } from 'react-router';
import Pagination from '../../components/Pagination/Pagination';
import type { WPCategoryData } from '../../types/wpTypes';

const CatWithPosts = ({ data }: { data: WPCategoryData }) => {
    const isEmpty = data.data.parent === 38;
    return (
        <>
            {data.data.posts_array?.map((post) => (
                <div className={clsx('cat-list-one', 'post', isEmpty && 'empty')} key={post.post_ID}>
                    {data.data.parent !== 38 && (
                        <div className="cat-list-img">
                            <img src={post.post_image} alt={post.post_title} loading="lazy" />
                        </div>
                    )}
                    <div className="cat-list-right">
                        <span className="date">{post.post_date}</span>
                        <h2>
                            <Link to={`/${post.post_slug}`}>{post.post_title}</Link>
                        </h2>
                        <p>{post.post_excerpt}</p>
                    </div>
                </div>
            ))}
            <Pagination page={data.data.page} pages={data.data.pages} />
        </>
    );
};

export default CatWithPosts;
