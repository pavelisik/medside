import Rating from '../../components/Rating';
import CategoryLabel from '../../components/CategoryLabel';
import DataList from '../../components/DataList';
import ShareBlock from '../../components/ShareBlock';
import PageMenu from '../../components/PageMenu';
import SourcesBlock from '../../components/SourcesBlock';
import { parseContent } from '../../utils/parseContent';
import type { WPBolezniData } from '../../types/wpTypes';

const PostBolezni = ({ data }: { data: WPBolezniData }) => {
    const {
        id,
        title,
        featured_image,
        date,
        head_description,
        rating,
        rating_count,
        parent_cat_first,
        parent_cat_second,
        parents_count,
        categories,
        menu_data,
        content,
        metadata,
    } = data.data;

    return (
        <div itemScope itemType="https://schema.org/WebPage">
            <h1 itemProp="name">{title}</h1>
            <div className="title-bar">
                <div className="main-image-block">{featured_image && <img src={featured_image} alt={title} itemProp="image" />}</div>
                <div className="right-block">
                    <Rating postId={id} initialRatingSum={rating} initialVoteCount={rating_count} />
                    <span className="date">{date}</span>
                    <div className="right-inner-block">
                        <CategoryLabel categories={categories} count={parents_count} first={parent_cat_first} second={parent_cat_second} />
                        <DataList data={metadata} />
                        <ShareBlock className="share-block-top" title={title} description={head_description} image={featured_image} />
                    </div>
                </div>
            </div>
            <div id="page-content">
                {menu_data.length > 1 && <PageMenu data={menu_data} />}
                {parseContent({ content, drugs: metadata.drugs, diets: metadata.diets })}
                {metadata.sources && <SourcesBlock data={metadata.sources} />}
            </div>

            <ShareBlock className="share-block-bottom" title={title} description={head_description} image={featured_image} />
        </div>
    );
};

export default PostBolezni;
