import { bolLabelIcons } from '../../assets/images/bol-label';
import type { WPBolezniData } from '../../types/wpTypes';

const PostBolezni = ({ data }: { data: WPBolezniData }) => {
    const { title, featured_image, date, rating, rating_count, parent_cat_first, parent_cat_second, parents_count, categories } = data.data;
    const catTitle = categories[0].name;
    let catHref;

    if (parents_count === 1 && parent_cat_first) {
        catHref = `/${parent_cat_first.slug}/${categories[0].slug}`;
    } else if (parents_count === 2 && parent_cat_first && parent_cat_second) {
        catHref = `/${parent_cat_second.slug}/${parent_cat_first.slug}/${categories[0].slug}`;
    }

    const iconKey = `bolLabel${categories[0].term_id}` as keyof typeof bolLabelIcons;
    const iconScr = bolLabelIcons[iconKey];

    return (
        <div itemScope itemType="https://schema.org/WebPage">
            <h1 itemProp="name">{title}</h1>

            <div className="title-bar">
                {/* !! потом сделать заглушку если нет изображения */}
                <div className="main-image-block">{featured_image && <img src={featured_image} alt={title} itemProp="image" />}</div>

                <div className="right-block">
                    <div className="wp-stars-outer">
                        {rating} + {rating_count}
                    </div>

                    <span className="date">{date}</span>

                    <div className="right-inner-block">
                        <a className="up-label" href={catHref} title={catTitle} target="_blank" rel="noopener noreferrer">
                            <img src={iconScr} alt={catTitle} />
                        </a>
                    </div>
                </div>
            </div>

            {/* <h1>{title}</h1>
                    <p>{cat_type}</p>
                    <div id="page-content" dangerouslySetInnerHTML={{ __html: content }} /> */}
        </div>
    );
};

export default PostBolezni;
