import RatingStatic from './RatingStatic';
import type { WPBolezniMetadata } from '../types/wpTypes';

interface DietsBlockProps {
    data?: WPBolezniMetadata['diets'];
}

const DietsBlock = ({ data }: DietsBlockProps) => {
    return (
        <div className="diets-block">
            {data?.map((post) => (
                <div className="diet-one" key={post.id}>
                    <div className="diet-left">
                        <img src={post.image} alt={post.name} loading="lazy" />
                    </div>
                    <div className="diet-right">
                        <span className="diet-rating">
                            <RatingStatic rating={post.diet_rating ?? 0} />
                        </span>

                        <h3>
                            <a href={`/${post.slug}`} target="_blank" rel="noopener noreferrer">
                                {post.name}
                            </a>
                        </h3>

                        {(post.diet_result || post.diet_time || post.diet_cost) && (
                            <ul className="diet-spisok">
                                {post.diet_result && (
                                    <li>
                                        <strong>Эффективность: </strong>
                                        {post.diet_result}
                                    </li>
                                )}
                                {post.diet_time && (
                                    <li>
                                        <strong>Сроки: </strong>
                                        {post.diet_time}
                                    </li>
                                )}
                                {post.diet_cost && (
                                    <li>
                                        <strong>Стоимость продуктов: </strong>
                                        {post.diet_cost}
                                    </li>
                                )}
                            </ul>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DietsBlock;
