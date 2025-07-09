import parse from 'html-react-parser';
import Rating from '../../components/Rating';
import CategoryLabel from '../../components/CategoryLabel';
import ShareBlock from '../../components/ShareBlock';
import PageMenu from '../../components/PageMenu';
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
                {/* !! потом сделать заглушку если нет изображения */}
                <div className="main-image-block">{featured_image && <img src={featured_image} alt={title} itemProp="image" />}</div>

                <div className="right-block">
                    <Rating postId={id} initialRatingSum={rating} initialVoteCount={rating_count} />

                    <span className="date">{date}</span>

                    <div className="right-inner-block">
                        <CategoryLabel categories={categories} count={parents_count} first={parent_cat_first} second={parent_cat_second} />

                        {(metadata.doctors || metadata.diets) && (
                            <ul>
                                {metadata.doctors && (
                                    <li>
                                        Лечащие врачи:{' '}
                                        {metadata.doctors.map(({ name, slug }, index, arr) => (
                                            <span key={slug}>
                                                <a
                                                    href={`/doctors/${slug}`}
                                                    title={`Все доктора специализации ${name}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    {name}
                                                </a>
                                                {index < arr.length - 1 ? ', ' : ''}
                                            </span>
                                        ))}
                                    </li>
                                )}

                                {metadata.diets && (
                                    <li>
                                        Диеты при болезни:{' '}
                                        {metadata.diets.map(({ name, slug }, index, arr) => (
                                            <span key={slug}>
                                                <a href={`/${slug}`} title={name} target="_blank" rel="noopener noreferrer">
                                                    {name}
                                                </a>
                                                {index < arr.length - 1 ? ', ' : ''}
                                            </span>
                                        ))}
                                    </li>
                                )}
                            </ul>
                        )}

                        <ShareBlock title={title} description={head_description} image={featured_image} />
                    </div>
                </div>
            </div>
            {/* <div id="page-content" dangerouslySetInnerHTML={{ __html: content }} /> */}
            <div id="page-content">
                {menu_data.length > 1 && <PageMenu data={menu_data} />}
                {parse(content)}
            </div>
        </div>
    );
};

export default PostBolezni;
