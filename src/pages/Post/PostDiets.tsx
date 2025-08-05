import Rating from '../../components/Rating/Rating';
import DietsLabels from '../../components/DietsLabels';
import DataList from '../../components/DataList';
import ShareBlock from '../../components/ShareBlock';
import PageMenu from '../../components/PageMenu';
import SourcesBlock from '../../components/SourcesBlock';
import AuthorBlock from '../../components/AuthorBlock';
import CommentsBlock from '../../components/Comments/CommentsBlock';
import SimilarBottomBlock from '../../components/SimilarBottomBlock';
import { parseContent } from '../../utils/parseContent';
import type { WPDietsData } from '../../types/wpTypes';

const PostDiets = ({ data }: { data: WPDietsData }) => {
    const { id, title, featured_image, date, head_description, rating, rating_count, categories, menu_data, content, metadata, post_author, tags_posts } =
        data.data;

    return (
        <div itemScope itemType="https://schema.org/WebPage">
            <h1 itemProp="name">{title}</h1>
            <div className="title-bar">
                <div className="main-image-block">{featured_image && <img src={featured_image} alt={title} itemProp="image" />}</div>
                <div className="right-block">
                    <Rating postId={id} initialRatingSum={rating} initialVoteCount={rating_count} />
                    <span className="date">{date}</span>
                    <DietsLabels categories={categories} data={metadata} />
                    <div className="right-inner-block">
                        {/* <DataList data={metadata} posts={tags_posts?.slice(0, 3)} /> */}
                        <ShareBlock className="share-block-top" title={title} description={head_description} image={featured_image} />
                    </div>
                </div>
            </div>
            <div id="page-content">
                {menu_data.length > 1 && <PageMenu data={menu_data} />}
                {/* в контент надо будет выводить таблицы калорийности */}
                {parseContent({ content })}
            </div>
            <ShareBlock className="share-block-bottom" title={title} description={head_description} image={featured_image} />
            <AuthorBlock author={post_author} />
            <CommentsBlock postId={id} />
            {tags_posts && <SimilarBottomBlock posts={tags_posts.slice(3, 11)} />}
        </div>
    );
};

export default PostDiets;
