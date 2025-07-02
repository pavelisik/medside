import { useEffect, useRef } from 'react';
import { bolLabelIcons } from '../../assets/images/bol-label';
import Raiting from '../../components/Raiting';
import type { WPBolezniData } from '../../types/wpTypes';

const PostBolezni = ({ data }: { data: WPBolezniData }) => {
    const scriptLoaded = useRef(false);

    useEffect(() => {
        if (!scriptLoaded.current) {
            const script = document.createElement('script');
            script.src = 'https://yastatic.net/share2/share.js';
            script.async = true;
            document.body.appendChild(script);
            scriptLoaded.current = true;
        }
    }, []);

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
        content,
        metadata,
    } = data.data;
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
                        <Raiting postId={id} initialRatingSum={rating} initialVoteCount={rating_count} />
                    </div>

                    <span className="date">{date}</span>

                    <div className="right-inner-block">
                        <a className="up-label" href={catHref} title={catTitle} target="_blank" rel="noopener noreferrer">
                            <img src={iconScr} alt={catTitle} />
                        </a>
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
                        <div className="share-block-top">
                            <div
                                className="ya-share2"
                                data-curtain
                                data-services="vkontakte,odnoklassniki,telegram,twitter,viber,whatsapp"
                                data-title={title}
                                data-description={head_description}
                                data-image={featured_image}
                                data-hashtags:twitter="медицина,здоровье"
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
            Рейтинг:{rating / rating_count}
            <br />
            Общий рейтинг:{rating}
            <br />
            Всего голосов:{rating_count}
            <br />
            <div id="page-content" dangerouslySetInnerHTML={{ __html: content }} />
            {/* <h1>{title}</h1>
                    <p>{cat_type}</p>
                    <div id="page-content" dangerouslySetInnerHTML={{ __html: content }} /> */}
        </div>
    );
};

export default PostBolezni;
