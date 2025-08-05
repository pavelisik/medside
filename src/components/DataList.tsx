import type { WPBolezniMetadata, WPSimplePost } from '../types/wpTypes';

interface DataListProps {
    data: WPBolezniMetadata;
    posts?: WPSimplePost[];
}

const DataList = ({ data, posts }: DataListProps) => {
    return (
        <>
            {data.doctors || data.diets ? (
                <ul>
                    {data.doctors && (
                        <li>
                            Лечащие врачи:{' '}
                            {data.doctors.map(({ name, slug }, index, arr) => (
                                <span key={slug}>
                                    <a href={`/doctors/${slug}`} title={`Все доктора специализации ${name}`} target="_blank" rel="noopener noreferrer">
                                        {name}
                                    </a>
                                    {index < arr.length - 1 ? ', ' : ''}
                                </span>
                            ))}
                        </li>
                    )}

                    {data.diets && (
                        <li>
                            Диеты при болезни:{' '}
                            {data.diets.map(({ name, slug, id }, index, arr) => (
                                <span key={id}>
                                    <a href={`/${slug}`} title={name} target="_blank" rel="noopener noreferrer">
                                        {name}
                                    </a>
                                    {index < arr.length - 1 ? ', ' : ''}
                                </span>
                            ))}
                        </li>
                    )}
                </ul>
            ) : (
                posts && (
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
                )
            )}
        </>
    );
};

export default DataList;
