import type { WPBolezniMetadata } from '../types/wpTypes';

const DataList = ({ data }: { data: WPBolezniMetadata }) => {
    return (
        <>
            {(data.doctors || data.diets) && (
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
                            {data.diets.map(({ name, slug }, index, arr) => (
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
        </>
    );
};

export default DataList;
