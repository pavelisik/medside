import DataListItem from './DataListItem';
import type { WPBolezniMetadata, CatType, WPSimplePost } from '../types/wpTypes';

interface DataListProps {
    catType: CatType;
    // для болезней и симптомов
    doctors?: WPBolezniMetadata['doctors'];
    diets?: WPBolezniMetadata['diets'];
    // для диет
    diet_result?: string;
    diet_time?: string;
    diet_cost?: string;
    // при отсутствии всех полей
    posts?: WPSimplePost[];
}

const DataList = ({ catType, doctors, diets, diet_result, diet_time, diet_cost, posts }: DataListProps) => {
    if (catType === 'bolezni' || catType === 'symptoms') {
        if (doctors || diets) {
            return (
                <ul>
                    {doctors && (
                        <li>
                            <DataListItem label={'Лечащие врачи: '} data={doctors} hrefPrefix={'doctors/'} titlePrefix={'Все доктора специализации '} />
                        </li>
                    )}
                    {diets && (
                        <li>
                            <DataListItem label={'Диеты при болезни: '} data={diets} />
                        </li>
                    )}
                </ul>
            );
        }
    }
    if (catType === 'diets') {
        if (diet_result || diet_time || diet_cost) {
            return (
                <ul className="post-list">
                    {diet_result && (
                        <li title="Эффективность диеты при соблюдении всех правил">
                            <DataListItem label={'Эффективность: '} data={diet_result} />
                        </li>
                    )}
                    {diet_time && (
                        <li title="Минимальные сроки соблюдения диеты, необходимые для положительного результата">
                            <DataListItem label={'Сроки: '} data={diet_time} />
                        </li>
                    )}
                    {diet_cost && (
                        <li title="Приблизительная стоимость продуктов, входящих в рацион диеты">
                            <DataListItem label={'Стоимость продуктов: '} data={diet_cost} />
                        </li>
                    )}
                </ul>
            );
        }
    }

    if (posts) {
        return (
            <>
                Статьи по теме:
                <ul className="post-list">
                    {posts.map(({ post_ID, post_slug, post_title }) => (
                        <li key={post_ID}>
                            <a href={`/${post_slug}`} target="_blank" rel="noopener noreferrer">
                                {post_title}
                            </a>
                        </li>
                    ))}
                </ul>
            </>
        );
    }
};

export default DataList;
